'use client';
import { useEffect } from 'react';
export function MotionObserver() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const elements = document.querySelectorAll<HTMLElement>('.section-heading, .security-grid article, .feature-family, .page-intro');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    elements.forEach(el => { el.classList.add('reveal-ready'); observer.observe(el); });
    return () => { observer.disconnect(); elements.forEach(el => el.classList.remove('reveal-ready')); };
  }, []);
  return null;
}
