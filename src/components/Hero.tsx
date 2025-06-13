'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-0" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">Hi, I&apos;m</span>
              <span className="block text-primary mt-2">Topan Nurpana</span>
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Software Developer specializing in web development, with experience in both backend and frontend technologies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground hover:bg-accent transition-colors"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Skills badges */}
          <div
            className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {['Backend Developer', 'Frontend Developer', 'Full Stack', 'Web Developer'].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-center px-4 py-2 rounded-full bg-accent/50 text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
} 