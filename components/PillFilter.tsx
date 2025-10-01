// components/PillFilter.tsx
import React from "react";

export type Pill = {
  id: string;
  label: string;
  ariaLabel?: string;
  icon?: React.ReactNode; // optional small svg icon
};

type Props = {
  pills: Pill[];
  value?: string; // selected id
  onChange?: (id: string) => void;
};

export default function PillFilter({ pills, value, onChange }: Props) {
  const handleClick = (id: string) => onChange?.(id === value ? "" : id);

  return (
    <div className="w-full">
      <div
        className="flex gap-3 overflow-x-auto no-scrollbar py-3 px-4 sm:px-6"
        role="toolbar"
        aria-label="Filters"
      >
        {pills.map((p) => {
          const selected = value === p.id;
          return (
            <button
              key={p.id}
              type="button"
              aria-pressed={selected}
              aria-label={p.ariaLabel ?? p.label}
              onClick={() => handleClick(p.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition
                ${selected
                  ? "bg-white text-sky-700 shadow-md ring-1 ring-sky-100"
                  : "bg-sky-50 text-sky-600 hover:bg-sky-100"}
                `}
            >
              {p.icon && <span className="w-4 h-4">{p.icon}</span>}
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
