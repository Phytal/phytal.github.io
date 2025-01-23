import { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, date, tags, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full mb-6"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div
        className={`relative p-6 rounded-lg bg-card transition-all duration-300 ${
          isHovered ? "shadow-lg shadow-primary/20" : "shadow-md"
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;