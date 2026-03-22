"use client";

import { useState, useRef, useId } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setVisible(false), 100);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <div aria-describedby={visible ? tooltipId : undefined}>
        {children}
      </div>
      {visible && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50
            px-3 py-2 max-w-xs text-sm text-text-primary leading-snug
            bg-gradient-to-b from-bg-elevated to-bg-secondary
            border border-border-subtle rounded shadow-xl
            animate-[draft-fade-in_0.15s_ease-out]"
        >
          {content}
          {/* Triangle pointer */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
            border-l-[5px] border-r-[5px] border-t-[5px]
            border-l-transparent border-r-transparent border-t-bg-secondary" />
        </div>
      )}
    </div>
  );
}
