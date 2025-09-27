"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[];              
  autoplay?: boolean;            
  intervalMs?: number;           
  className?: string;            
  aspectRatio?: string;        
};

export default function Carousel({
  images,
  autoplay = false,
  intervalMs = 4000,
  className = "",
  aspectRatio = "aspect-[16/9]",
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!autoplay || images.length <= 1) return;
    const el = trackRef.current;
    if (!el) return;

    const id = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % images.length;
        el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
        return next;
      });
    }, intervalMs);

    return () => clearInterval(id);
  }, [autoplay, images.length, intervalMs]);

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setIndex(i);
  };

  const handlePrev = () => scrollToIndex(Math.max(0, index - 1));
  const handleNext = () => scrollToIndex(Math.min(images.length - 1, index + 1));

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      aria-label="Image carousel"
      className={`relative select-none rounded-2xl bg-white/50 shadow-sm ring-1 ring-black/5 ${className}`}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {/* Viewport */}
      <div
        ref={trackRef}
        className="
          relative flex overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-2xl
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
        "
        style={{ scrollSnapType: "x mandatory" }}
        role="group"
        aria-roledescription="carousel"
      >
        {images.map((src, i) => (
          <div
            key={src + i}
            className="relative min-w-full snap-center"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${images.length}`}
          >
            <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl bg-gray-200`}>
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
            <button
              type="button"
              onClick={handlePrev}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-3 flex items-center justify-center gap-2 pb-4">
            {images.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                    ${active ? "w-6 bg-gray-900" : "w-2.5 bg-gray-400/60 hover:bg-gray-500"}
                  `}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-pressed={active}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
