interface SkillsSectionProps {
  title: string;
  skills: string[];
}

const SkillsSection = ({ title, skills }: SkillsSectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-accent/10 rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;