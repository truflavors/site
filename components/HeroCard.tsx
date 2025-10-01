"use client";

// components/HeroCard.tsx
import Image from "next/image";
import React from "react";
import PillFilter from "./PillFilter";

const dummyPills = [
  { id: "anti-inflammatory", label: "Anti-Inflammatory" },
  { id: "high-protein", label: "High Protein" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "gut-friendly", label: "Gut-Friendly" },
  { id: "vegetarian", label: "Vegetarian" },
];

export default function HeroCard() {
  const [selected, setSelected] = React.useState<string>("anti-inflammatory");

  return (
    <section className="py-12 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <PillFilter pills={dummyPills} value={selected} onChange={setSelected} />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: image with overlay card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/images/hero-bowl.jpg"
                alt="Tru Flavors - bowl"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* small overlay card (like screenshot) */}
            <div className="absolute left-6 bottom-6 bg-white rounded-xl p-3 shadow-lg w-64">
              <div className="text-sm font-semibold">Creamy Chicken + Bell Pepper Alfredo</div>
              <div className="text-xs text-slate-500 mt-1 flex items-center justify-between">
                <span>10 min</span>
                <span>710 cal</span>
              </div>
            </div>
          </div>

          {/* Right: copy + CTA */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-900">Anti-Inflammatory</h1>
            <p className="mt-4 text-lg text-slate-700">
              Fill your cart with delicious, whole foods packed with inflammation-fighting benefits—
              think fruits, veggies, lean proteins, whole grains, and healthy fats.
            </p>

            <div className="mt-6 flex gap-3 items-center">
              <a
                href="/subscribe"
                className="inline-flex items-center rounded-full bg-sky-700 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-sky-600"
              >
                Get started
              </a>
              <a href="/recipes" className="text-sm text-slate-600 hover:text-slate-800">
                Browse recipes →
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              <strong className="text-slate-900">1,000+</strong> recipes — easy meals ready in minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
