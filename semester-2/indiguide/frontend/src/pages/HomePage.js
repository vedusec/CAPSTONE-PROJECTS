import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import categories from "@/data/scenarios";
import {
  CarTaxiFront,
  ShoppingBag,
  Utensils,
  TrainFront,
  Users,
  ShieldAlert,
  Landmark,
  Download,
  MapPin,
} from "lucide-react";

const iconMap = {
  CarTaxiFront,
  ShoppingBag,
  Utensils,
  TrainFront,
  Users,
  ShieldAlert,
  Landmark,
};

export default function HomePage() {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  // Bento grid: first 2 items are large, rest are smaller
  const getGridClass = (index) => {
    if (index === 0) return "col-span-2 row-span-2";
    if (index === 5) return "col-span-2";
    return "col-span-1";
  };

  const getCardHeight = (index) => {
    if (index === 0) return "h-[280px]";
    if (index === 5) return "h-[140px]";
    return "h-[160px]";
  };

  return (
    <div className="safe-top safe-bottom" data-testid="home-page">
      {/* Header */}
      <div className="px-6 pt-8 pb-2">
        <div
          className="flex items-center gap-2 mb-2"
          style={{ animationDelay: "0ms" }}
        >
          <MapPin size={16} className="text-amber-500" />
          <span className="text-xs font-body text-zinc-500 uppercase tracking-widest">
            Delhi NCR
          </span>
        </div>
        <h1
          className="font-heading text-3xl sm:text-4xl text-zinc-100 leading-none animate-in"
          style={{ animationDelay: "50ms" }}
          data-testid="home-title"
        >
          What's happening
          <br />
          around you?
        </h1>
        <p
          className="font-body text-sm text-zinc-500 mt-3 animate-in"
          style={{ animationDelay: "100ms" }}
        >
          Tap the situation that matches what you're experiencing right now.
        </p>
      </div>

      {/* Install Banner */}
      {showInstall && (
        <div className="px-6 mt-4 animate-in" style={{ animationDelay: "120ms" }}>
          <button
            className="install-banner w-full"
            onClick={handleInstall}
            data-testid="install-pwa-btn"
          >
            <div className="flex items-center gap-3">
              <Download size={18} className="text-amber-500" />
              <div className="text-left">
                <p className="font-body text-sm text-zinc-200 font-medium">
                  Install IndiGuide
                </p>
                <p className="font-body text-xs text-zinc-500">
                  Works offline after install
                </p>
              </div>
            </div>
            <span className="text-xs text-amber-500 font-semibold uppercase tracking-wider">
              Add
            </span>
          </button>
        </div>
      )}

      {/* Category Grid */}
      <div className="px-6 pt-6 pb-8">
        <div className="grid grid-cols-2 gap-3" data-testid="category-grid">
          {categories.map((cat, index) => {
            const IconComponent = iconMap[cat.icon];
            return (
              <div
                key={cat.slug}
                className={`category-card ${getGridClass(index)} ${getCardHeight(index)} animate-in`}
                style={{ animationDelay: `${150 + index * 60}ms` }}
                onClick={() => navigate(`/category/${cat.slug}`)}
                data-testid={`category-${cat.slug}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigate(`/category/${cat.slug}`)
                }
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="category-card-content">
                  <div className="flex items-center gap-2 mb-1">
                    {IconComponent && (
                      <IconComponent size={16} className="text-amber-500" />
                    )}
                    <span className="font-body text-xs text-zinc-400">
                      {cat.scenarios.length} situations
                    </span>
                  </div>
                  <h2 className="font-heading text-lg sm:text-xl text-white leading-tight">
                    {cat.name}
                  </h2>
                  {index === 0 && (
                    <p className="font-body text-xs text-zinc-400 mt-1">
                      {cat.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-10 text-center">
        <p className="font-body text-xs text-zinc-600">
          IndiGuide v1.0 — Delhi NCR Edition
        </p>
        <p className="font-body text-xs text-zinc-700 mt-1">
          A calm local companion in your pocket
        </p>
      </div>
    </div>
  );
}
