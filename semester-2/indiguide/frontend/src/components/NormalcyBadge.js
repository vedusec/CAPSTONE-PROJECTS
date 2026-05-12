import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

const config = {
  normal: {
    label: "Normal",
    className: "normalcy-normal",
    Icon: CheckCircle2,
  },
  sometimes_normal: {
    label: "Sometimes normal",
    className: "normalcy-sometimes",
    Icon: AlertTriangle,
  },
  red_flag: {
    label: "Red flag",
    className: "normalcy-danger",
    Icon: XCircle,
  },
};

export const NormalcyBadge = ({ normalcy, compact = false }) => {
  const { label, className, Icon } = config[normalcy] || config.normal;

  return (
    <span className={`normalcy-badge ${className}`} data-testid={`normalcy-badge-${normalcy}`}>
      <Icon size={compact ? 12 : 14} />
      {label}
    </span>
  );
};
