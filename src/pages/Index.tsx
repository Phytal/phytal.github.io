import { useState, useEffect, useRef } from "react";
import TabSystem from "../components/TabSystem";
import SidePanel from "../components/SidePanel";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";

const skills = {
  developmentLanguages: [
    "C", "C++", "C#/ASP.NET", "JavaScript/TypeScript", "Java", "Kotlin", 
    "Python", "R", "SQL", "SystemVerilog", "x86 ASM"
  ],
  developmentFrameworks: [
    "Android", "AWS", "Docker", "Git", "LangGraph", "MongoDB", "Neo4j",
    "React", "Swagger", "Terraform", "Torch", "Transformer"
  ],
  businessTools: [
    "Confluence", "Google Suite", "MS Office", "Notion", "Jira", "Slack"
  ]
};

const projects = [
  {
    title: "Fynopsis.ai Document Management Platform",
    description: "Founded first AI-native virtual data room platform for M&A, built with Vector + GraphRAG, custom hybrid chunking, and multi-agent systems. Won Meta Llama Impact Hackathon.",
    date: "Spring 2024 - Present",
    link: "https://fynopsis.ai",
    tags: ["LangGraph", "Vector DB", "AWS", "Docker", "OCR", "Multi-Agent Systems"]
  },
  {
    title: "Financial Analysis Platform",
    description: "B2B SaaS platform automating company histories and industry insights using multi-agent systems and RAG framework.",
    date: "Spring 2024 - Present",
    link: "https://github.com/username/financial-analysis",
    tags: ["AWS", "Docker", "LangGraph", "Vector DB", "CI/CD"]
  },
  {
    title: "Raspberry Pi and x86-64 Kernel",
    description: "Built custom bare-metal OS with threading, preemption, and EXT2 file system. Implemented virtual memory and garbage collection.",
    date: "Fall 2024",
    link: "https://github.com/username/kernel",
    tags: ["C", "ARM Assembly", "OS Development", "Memory Management"]
  },
  {
    title: "Dual-Issue x64 CPU",
    description: "Developed 64-bit processor implementation including assemblers, simulators, and dual-issue pipeline design supporting 143 instructions.",
    date: "Spring 2024",
    link: "https://github.com/username/cpu",
    tags: ["SystemVerilog", "C", "Assembly", "Computer Architecture"]
  },
  {
    title: "Dynamic Memory Allocator",
    description: "Implemented memory allocation strategies and mark-and-sweep garbage collector in C, analyzing runtime efficiency.",
    date: "Spring 2024",
    link: "https://github.com/username/memory-allocator",
    tags: ["C", "Memory Management", "Data Analysis"]
  },
  {
    title: "Unsupervised Trading Strategy",
    description: "Applied k-means clustering on S&P 500 volatility indicators, achieving 20% YOY alpha with risk management.",
    date: "Winter 2023",
    link: "https://github.com/username/trading-strategy",
    tags: ["Python", "Machine Learning", "Financial Analysis"]
  },
  {
    title: "Tetris Game AI",
    description: "Implemented Tetris simulator with genetic algorithm optimization and comprehensive testing.",
    date: "Fall 2023",
    link: "https://github.com/username/tetris-ai",
    tags: ["Java", "Genetic Algorithms", "JUnit"]
  },
  {
    title: "HomeAccessCenter API",
    description: "Open-source web API for PowerSchool's HomeAccessCenter with secure session handling.",
    date: "Spring 2020 - Fall 2020",
    link: "https://github.com/username/hac-api",
    tags: ["C#", "ASP.NET", "HTTP", "API Development"]
  },
  {
    title: "SimpleGrade Android App",
    description: "Android app for PowerSchool grade retrieval with Flask backend and Material Design UI.",
    date: "Spring 2021 - Fall 2022",
    link: "https://github.com/username/simplegrade",
    tags: ["Kotlin", "Android", "Python", "Flask"]
  },
  {
    title: "Wsashi Discord Chatbot",
    description: "Discord bot serving 50,000+ users across 3,000+ servers with multiplayer games and moderation tools.",
    date: "Spring 2018 - Spring 2019",
    link: "https://github.com/username/wsashi",
    tags: ["C#", "Discord API", "Game Development"]
  }
];

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeTab, setActiveTab] = useState("about");
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark");
      return newTheme;
    });
  };

  const scrollToSection = (section: string) => {
    setActiveTab(section); // Immediately update active tab
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      skills: skillsRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const id = entry.target.id;
            setActiveTab(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = [aboutRef, experienceRef, projectsRef, skillsRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground ${theme}`}>
      <div className="flex flex-col md:flex-row">
        <SidePanel theme={theme} toggleTheme={toggleTheme} />
        
        <main className="flex-1 md:ml-[300px] min-h-screen">
          <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm p-4 md:px-8 md:py-2">
            <TabSystem
              tabs={["about", "experience", "projects", "skills"]}
              activeTab={activeTab}
              onTabChange={scrollToSection}
            />
          </div>

          <div className="p-8 space-y-16">
            <div id="about" ref={aboutRef} className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">About</h2>
              <AboutSection />
            </div>

            <div id="experience" ref={experienceRef} className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Experience</h2>
              <ExperienceSection />
            </div>

            <div id="projects" ref={projectsRef} className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>

            <div id="skills" ref={skillsRef} className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="space-y-8">
                <SkillsSection title="Development Languages" skills={skills.developmentLanguages} />
                <SkillsSection title="Development Frameworks" skills={skills.developmentFrameworks} />
                <SkillsSection title="Business Tools" skills={skills.businessTools} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;