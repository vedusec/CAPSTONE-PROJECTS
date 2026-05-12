const DEVICE_ID_KEY = "indiguide_device_id";
const FEEDBACK_QUEUE_KEY = "indiguide_feedback_queue";

/**
 * Get or create anonymous device ID (random UUID stored in localStorage).
 * Used only to prevent duplicate spam. No PII collected.
 */
export const getDeviceId = () => {
  let id = localStorage.getItem(DEVICE_ID_KEY);
  if (!id) {
    id = crypto.randomUUID
      ? crypto.randomUUID()
      : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          const r = (Math.random() * 16) | 0;
          const v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
    localStorage.setItem(DEVICE_ID_KEY, id);
  }
  return id;
};

/**
 * Get the offline feedback queue from localStorage.
 */
const getQueue = () => {
  try {
    return JSON.parse(localStorage.getItem(FEEDBACK_QUEUE_KEY) || "[]");
  } catch {
    return [];
  }
};

/**
 * Save the queue to localStorage.
 */
const saveQueue = (queue) => {
  localStorage.setItem(FEEDBACK_QUEUE_KEY, JSON.stringify(queue));
};

/**
 * Add feedback to the queue and attempt to sync immediately.
 */
export const submitFeedback = async (feedback) => {
  const entry = {
    ...feedback,
    device_id: getDeviceId(),
    timestamp: new Date().toISOString(),
  };

  // Try to send immediately
  if (navigator.onLine) {
    const success = await sendToServer(entry);
    if (success) return true;
  }

  // If offline or failed, queue it
  const queue = getQueue();
  queue.push(entry);
  saveQueue(queue);
  return false;
};

/**
 * Send a single feedback entry to the backend.
 */
const sendToServer = async (entry) => {
  try {
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${backendUrl}/api/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Sync all queued feedback entries silently.
 * Called on `online` event. User never sees syncing.
 */
export const syncQueue = async () => {
  const queue = getQueue();
  if (queue.length === 0) return;

  const remaining = [];
  for (const entry of queue) {
    const success = await sendToServer(entry);
    if (!success) {
      remaining.push(entry);
    }
  }
  saveQueue(remaining);
};

// Auto-sync when connection returns
if (typeof window !== "undefined") {
  window.addEventListener("online", () => {
    syncQueue();
  });
}
