import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import categories from "@/data/scenarios";
import { BackHeader } from "@/components/BackHeader";
import { NormalcyBadge } from "@/components/NormalcyBadge";
import { FeedbackCard } from "@/components/FeedbackCard";
import {
  Copy,
  Check,
  AlertTriangle,
  XCircle,
  MessageCircle,
  Heart,
} from "lucide-react";

export default function ScenarioPage() {
  const { slug, scenarioId } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const category = categories.find((c) => c.slug === slug);
  const scenario = category?.scenarios.find((s) => s.id === scenarioId);

  if (!category || !scenario) {
    return (
      <div className="flex items-center justify-center h-screen" data-testid="scenario-not-found">
        <p className="font-body text-zinc-500">Scenario not found</p>
      </div>
    );
  }

  const handleCopy = () => {
    if (!scenario.helpful_phrase.text) return;
    navigator.clipboard.writeText(scenario.helpful_phrase.text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="safe-top safe-bottom" data-testid="scenario-page">
      <BackHeader
        title={category.name}
        onBack={() => navigate(`/category/${slug}`)}
      />

      <div className="px-6 pt-5 pb-10 space-y-6">
        {/* Title */}
        <div className="animate-in" style={{ animationDelay: "0ms" }}>
          <h1
            className="font-heading text-2xl sm:text-3xl text-zinc-100 leading-tight"
            data-testid="scenario-title"
          >
            {scenario.title}
          </h1>
          <div className="mt-3">
            <NormalcyBadge normalcy={scenario.normalcy} />
          </div>
        </div>

        {/* What this likely means */}
        <div
          className="guidance-section animate-in"
          style={{ animationDelay: "80ms" }}
          data-testid="what-it-means-section"
        >
          <h2 className="font-heading text-sm uppercase tracking-widest text-zinc-500 mb-3">
            What this likely means
          </h2>
          <p className="font-body text-base text-zinc-300 leading-relaxed">
            {scenario.what_it_means}
          </p>
        </div>

        {/* What you should do */}
        <div
          className="guidance-section animate-in"
          style={{ animationDelay: "160ms" }}
          data-testid="what-to-do-section"
        >
          <h2 className="font-heading text-sm uppercase tracking-widest text-amber-500 mb-4">
            What you should do
          </h2>
          <div className="space-y-1">
            {scenario.what_to_do.map((step, i) => (
              <div key={i} className="step-item">
                <div className="step-number">{i + 1}</div>
                <p className="font-body text-sm text-zinc-300 leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What NOT to do */}
        <div
          className="guidance-section-danger animate-in"
          style={{ animationDelay: "240ms" }}
          data-testid="what-not-to-do-section"
        >
          <div className="flex items-center gap-2 mb-4">
            <XCircle size={16} className="text-red-500" />
            <h2 className="font-heading text-sm uppercase tracking-widest text-red-500">
              What NOT to do
            </h2>
          </div>
          <ul className="space-y-3">
            {scenario.what_not_to_do.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
              >
                <AlertTriangle
                  size={14}
                  className="text-red-500/60 flex-shrink-0 mt-0.5"
                />
                <p className="font-body text-sm text-zinc-400 leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Helpful phrase */}
        <div
          className="phrase-box animate-in"
          style={{ animationDelay: "320ms" }}
          data-testid="helpful-phrase-section"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-amber-500" />
              <h2 className="font-heading text-sm uppercase tracking-widest text-zinc-500">
                Say this
              </h2>
            </div>
            {scenario.helpful_phrase.text && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs text-zinc-500 hover:text-amber-500 transition-colors duration-200"
                data-testid="copy-phrase-btn"
              >
                {copied ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={14} />
                )}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            )}
          </div>

          {scenario.helpful_phrase.text ? (
            <>
              <p className="font-heading text-xl text-amber-500 mb-2">
                "{scenario.helpful_phrase.text}"
              </p>
              <p className="font-body text-xs text-zinc-500 mb-1">
                {scenario.helpful_phrase.pronunciation}
              </p>
              <p className="font-body text-sm text-zinc-400">
                {scenario.helpful_phrase.meaning}
              </p>
              <div className="mt-3 inline-block px-3 py-1 bg-zinc-800 rounded-full">
                <p className="font-body text-xs text-zinc-400">
                  Tone: {scenario.helpful_phrase.tone}
                </p>
              </div>
            </>
          ) : (
            <p className="font-body text-sm text-zinc-400 italic">
              {scenario.helpful_phrase.meaning}
            </p>
          )}
        </div>

        {/* Reassurance */}
        <div
          className="reassurance-box animate-in"
          style={{ animationDelay: "400ms" }}
          data-testid="reassurance-section"
        >
          <div className="flex items-start gap-3">
            <Heart size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-heading text-sm uppercase tracking-widest text-emerald-500 mb-2">
                You're okay
              </h2>
              <p className="font-body text-sm text-zinc-300 leading-relaxed">
                {scenario.reassurance}
              </p>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <FeedbackCard scenarioId={scenario.id} />
      </div>

      {/* Copy toast */}
      {copied && (
        <div className="copy-toast" data-testid="copy-toast">
          Phrase copied to clipboard
        </div>
      )}
    </div>
  );
}
