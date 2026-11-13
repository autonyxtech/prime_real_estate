"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  ["01", "Browse", "Tell us what you are looking for and explore options that match."],
  ["02", "Visit", "Arrange a site visit and get a feel for the place in person."],
  ["03", "Documentation", "Get help understanding the paperwork and next steps."],
  ["04", "Move in", "Complete the process with a local team ready to guide you."],
];

export function ProcessSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progress = progressRef.current;
    if (!section || !progress || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(min-width: 800px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: section.querySelector(".process-inner"),
        scrub: true,
        onUpdate: (self) => { progress.style.transform = `scaleX(${self.progress})`; },
      });
      return () => trigger.kill();
    });
    return () => media.revert();
  }, []);

  return (
    <section className="process-section" ref={sectionRef}>
      <div className="process-inner section-shell">
        <div className="section-heading">
          <p className="eyebrow">A straightforward journey</p>
          <h2>From first search to feeling at home.</h2>
          <p className="section-intro">We keep the process clear, personal and focused on what matters to you.</p>
        </div>
        <div className="process-progress" aria-hidden="true"><span ref={progressRef} /></div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article key={number} className="process-card">
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
