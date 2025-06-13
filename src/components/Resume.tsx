'use client';

import { useEffect, useState } from 'react';

const education = [
  {
    period: '2015-2018',
    school: 'SMK Negeri 2 Subang',
    degree: 'Software Engineering',
    description: 'SMKN 2 Subang is a vocational school known for offering a wide range of technical and vocational programs. One of its key departments is Software Engineering, which focuses on teaching students the skills needed to design, develop, and maintain software applications.',
  },
  {
    period: '2018-2022',
    school: 'University of Subang',
    degree: 'Information Systems',
    description: 'University of Subang is a public university located in Subang, Jawa Barat, Indonesia. It was established in 1976. The university offers a wide range of programs, including undergraduate, graduate, and postgraduate.',
  },
];

const experience = [
  {
    period: '2022 - Current',
    company: 'PT. Gothru Media Indonesia',
    position: 'Backend Developer',
    description: 'I have been working as a backend developer for 2 year. I have experience in building Rest API.',
  },
  {
    period: '2025 - Current',
    company: 'PT. Aghatis Karya Indonesia',
    position: 'Freelance Full Stack Developer',
    description: 'I have been working as a full stack developer for 1 year. I have experience in building Rest API and Frontend.',
  },
  {
    period: '2022 - Current',
    company: 'Freelancer',
    position: 'Web Developer',
    description: 'Working as a freelance web developer, building web applications for various institutions.',
  },
];

const codingSkills = [
  { name: 'JavaScript', level: 90 },
  { name: 'PHP', level: 85 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Laravel', level: 80 },
  { name: 'CodeIgniter', level: 75 },
  { name: 'Express.js', level: 85 },
  { name: 'Handlebars', level: 70 },
];

const knowledge = [
  'Social Media',
  'Time Management',
  'Communication',
  'Problem-Solving',
  'Social Networking',
  'Flexibility',
];

const certificates = [
  {
    name: 'Junior Web Developer',
    date: '19 April 2018',
  },
  {
    name: 'Junior Office Administrator',
    date: '19 April 2018',
  },
];

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('resume');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="resume"
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Resume
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.period} className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="text-sm font-medium text-primary mb-1">{edu.period}</div>
                  <h4 className="text-lg font-semibold mb-1">{edu.school}</h4>
                  <div className="text-muted-foreground font-medium mb-2">{edu.degree}</div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={`${exp.company}-${exp.period}`} className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="text-sm font-medium text-primary mb-1">{exp.period}</div>
                  <h4 className="text-lg font-semibold mb-1">{exp.company}</h4>
                  <div className="text-muted-foreground font-medium mb-2">{exp.position}</div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills and Knowledge */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coding Skills */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8">Coding Skills</h3>
            <div className="space-y-4">
              {codingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-accent rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-1000"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge and Certificates */}
          <div
            className={`transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Knowledge</h3>
              <div className="flex flex-wrap gap-2">
                {knowledge.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-accent/50 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Certificates</h3>
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 bg-accent/5 rounded-lg border border-border"
                  >
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 