"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type Variant = "up" | "fade" | "scale";

const VARIANT_CLASS: Record<Variant, string> = {
  up: "reveal",
  fade: "reveal reveal-fade",
  scale: "reveal reveal-scale",
};

export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  /* stagger delay in ms */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`${VARIANT_CLASS[variant]} ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { ...style, animationDelay: `${delay}ms` } : style}
    >
      {children}
    </Tag>
  );
}
