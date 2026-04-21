"use client";

import { useState } from "react";

interface ExpandItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ExpandItem({
  title,
  content,
  isOpen,
  onToggle,
}: ExpandItemProps) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
      >
        <span className="font-[var(--font-sora)] font-semibold text-base text-text-primary group-hover:text-accent transition-colors">
          {title}
        </span>
        <span
          className={`expand-icon text-text-muted text-xl leading-none ${isOpen ? "open" : ""}`}
        >
          +
        </span>
      </button>
      <div className={`expand-content ${isOpen ? "open" : ""}`}>
        <p className="text-text-secondary text-sm leading-relaxed pb-5 px-1">
          {content}
        </p>
      </div>
    </div>
  );
}
