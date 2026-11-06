"use client";

import { useEffect, useRef } from "react";

const interactiveSelector =
  "a, button, [data-cursor], input, textarea, select, label, summary";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const root = document.documentElement;
    let isActive = false;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;
    let isVisible = false;

    const activate = () => {
      if (isActive) return;
      isActive = true;
      root.classList.add("has-custom-cursor");
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(render);
    };

    const show = () => {
      if (isVisible) return;
      isVisible = true;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const hide = () => {
      isVisible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      activate();
      show();
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      ring.classList.toggle("is-hover", Boolean(target.closest(interactiveSelector)));
    };

    const onOut = (event: MouseEvent) => {
      const related = event.relatedTarget;
      if (related instanceof Element && related.closest(interactiveSelector)) return;
      ring.classList.remove("is-hover");
    };

    const onPress = () => ring.classList.add("is-down");
    const onRelease = () => ring.classList.remove("is-down");

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mousedown", onPress);
    document.addEventListener("mouseup", onRelease);
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    frame = window.requestAnimationFrame(render);

    return () => {
      root.classList.remove("has-custom-cursor");
      window.cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mousedown", onPress);
      document.removeEventListener("mouseup", onRelease);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
