import { useParams, useNavigate } from "react-router-dom";
import categories from "@/data/scenarios";
import { BackHeader } from "@/components/BackHeader";
import { NormalcyBadge } from "@/components/NormalcyBadge";
import { ChevronRight } from "lucide-react";
import {
  CarTaxiFront,
  ShoppingBag,
  Utensils,
  TrainFront,
  Users,
  ShieldAlert,
  Landmark,
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

export default function CategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="flex items-center justify-center h-screen" data-testid="category-not-found">
        <p className="font-body text-zinc-500">Category not found</p>
      </div>
    );
  }

  const IconComponent = iconMap[category.icon];

  return (
    <div className="safe-top safe-bottom" data-testid="category-page">
      <BackHeader title={category.name} onBack={() => navigate("/")} />

      {/* Category hero */}
      <div className="px-6 pt-5 pb-4">
        <div className="flex items-center gap-3 mb-3 animate-in" style={{ animationDelay: "0ms" }}>
          {IconComponent && (
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700">
              <IconComponent size={20} className="text-amber-500" />
            </div>
          )}
          <div>
            <p className="font-body text-xs text-zinc-500 uppercase tracking-widest">
              {category.scenarios.length} situations
            </p>
          </div>
        </div>
        <p className="font-body text-sm text-zinc-400 animate-in" style={{ animationDelay: "50ms" }}>
          Select the situation that matches what's happening right now.
        </p>
      </div>

      {/* Scenario list */}
      <div className="pb-8" data-testid="scenario-list">
        {category.scenarios.map((scenario, index) => (
          <div
            key={scenario.id}
            className="scenario-row animate-in"
            style={{ animationDelay: `${100 + index * 50}ms` }}
            onClick={() => navigate(`/scenario/${slug}/${scenario.id}`)}
            data-testid={`scenario-${scenario.id}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              navigate(`/scenario/${slug}/${scenario.id}`)
            }
          >
            <div className="flex-1 pr-4">
              <h3 className="font-body text-base text-zinc-100 font-medium leading-snug">
                {scenario.title}
              </h3>
              <div className="mt-2">
                <NormalcyBadge normalcy={scenario.normalcy} compact />
              </div>
            </div>
            <ChevronRight size={20} className="text-zinc-600 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
