import { useState } from "react";
import { ThumbsUp, ThumbsDown, Send } from "lucide-react";
import { submitFeedback } from "@/lib/feedbackQueue";

const NOT_HELPFUL_TAGS = [
  "Situation was different",
  "Instructions unclear",
  "I still felt unsure",
];

export const FeedbackCard = ({ scenarioId }) => {
  const [state, setState] = useState("ask"); // ask | yes | no | done
  const [note, setNote] = useState("");
  const [showNote, setShowNote] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleYes = async () => {
    setState("yes");
    await submitFeedback({
      scenario_id: scenarioId,
      helpful: true,
      tags: [],
      note: "",
    });
  };

  const handleNo = () => {
    setState("no");
  };

  const handleSubmitNo = async () => {
    await submitFeedback({
      scenario_id: scenarioId,
      helpful: false,
      tags: selectedTags,
      note: note.trim(),
    });
    setState("done");
  };

  const handleSubmitNote = async () => {
    // Re-submit the YES feedback with the note
    await submitFeedback({
      scenario_id: scenarioId,
      helpful: true,
      tags: [],
      note: note.trim(),
    });
    setState("done");
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // --- Ask state ---
  if (state === "ask") {
    return (
      <div className="feedback-card animate-in" style={{ animationDelay: "480ms" }} data-testid="feedback-card">
        <p className="font-body text-sm text-zinc-400 mb-4">
          Did this help you in this situation?
        </p>
        <div className="flex gap-3">
          <button
            onClick={handleYes}
            className="feedback-btn feedback-btn-yes"
            data-testid="feedback-yes-btn"
          >
            <ThumbsUp size={16} />
            <span>Yes, it helped</span>
          </button>
          <button
            onClick={handleNo}
            className="feedback-btn feedback-btn-no"
            data-testid="feedback-no-btn"
          >
            <ThumbsDown size={16} />
            <span>Not really</span>
          </button>
        </div>
      </div>
    );
  }

  // --- Yes state ---
  if (state === "yes") {
    return (
      <div className="feedback-card animate-in" data-testid="feedback-yes-response">
        <p className="font-body text-sm text-zinc-200 font-medium mb-3">
          Good. You handled it right.
        </p>
        {!showNote ? (
          <button
            onClick={() => setShowNote(true)}
            className="font-body text-xs text-zinc-500 underline underline-offset-2 hover:text-zinc-400 transition-colors duration-200"
            data-testid="feedback-add-note-link"
          >
            Add a short note (optional)
          </button>
        ) : (
          <div className="space-y-3">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value.slice(0, 200))}
              placeholder="You can briefly describe what happened."
              className="feedback-textarea"
              rows={3}
              maxLength={200}
              data-testid="feedback-note-input"
            />
            <div className="flex items-center justify-between">
              <span className="font-body text-xs text-zinc-600">
                {note.length}/200
              </span>
              <button
                onClick={handleSubmitNote}
                className="feedback-submit-btn"
                data-testid="feedback-submit-note-btn"
              >
                <Send size={14} />
                <span>Send</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- No state ---
  if (state === "no") {
    return (
      <div className="feedback-card animate-in" data-testid="feedback-no-response">
        <p className="font-body text-sm text-zinc-200 font-medium mb-4">
          Thanks — that helps us improve.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {NOT_HELPFUL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`feedback-tag ${selectedTags.includes(tag) ? "feedback-tag-active" : ""}`}
              data-testid={`feedback-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {tag}
            </button>
          ))}
        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value.slice(0, 200))}
          placeholder="You can briefly describe what happened."
          className="feedback-textarea"
          rows={3}
          maxLength={200}
          data-testid="feedback-note-input"
        />
        <div className="flex items-center justify-between mt-3">
          <span className="font-body text-xs text-zinc-600">
            {note.length}/200
          </span>
          <button
            onClick={handleSubmitNo}
            className="feedback-submit-btn"
            data-testid="feedback-submit-btn"
          >
            <Send size={14} />
            <span>Send</span>
          </button>
        </div>
      </div>
    );
  }

  // --- Done state ---
  return (
    <div className="feedback-card animate-in" data-testid="feedback-done">
      <p className="font-body text-sm text-zinc-400">
        Thanks for helping make this better.
      </p>
    </div>
  );
};
