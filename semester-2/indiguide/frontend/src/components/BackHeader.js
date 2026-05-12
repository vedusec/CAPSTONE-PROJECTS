import { ArrowLeft } from "lucide-react";

export const BackHeader = ({ title, onBack }) => {
  return (
    <div className="back-header safe-top" data-testid="back-header">
      <button
        className="back-btn"
        onClick={onBack}
        data-testid="back-button"
        aria-label="Go back"
      >
        <ArrowLeft size={20} />
      </button>
      <h2 className="font-heading text-base uppercase tracking-wider text-zinc-300 truncate">
        {title}
      </h2>
    </div>
  );
};
