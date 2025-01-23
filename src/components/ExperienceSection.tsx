import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Development Intern",
    company: "Amazon - Seattle, WA",
    date: "May 2025 - August 2025",
    bullets: [
      "Incoming Software Development Intern"
    ]
  },
  {
    title: "Software Development Intern",
    company: "LPL Financial - Austin, TX",
    date: "June 2024 - August 2024",
    bullets: [
      "Drove $22M cost savings through standardized logging for 500+ enterprise applications",
      "Built data pipelines to Confluent Cloud with AWS, reducing processing times by 20%",
      "Engineered scalable RESTful APIs handling 1,000+ requests/second",
      "Automated AWS deployment with Terraform, reducing time-to-production by 35%"
    ]
  },
  {
    title: "Computer Science Tutor",
    company: "Freelance - Austin, TX",
    date: "January 2024 - Present",
    bullets: [
      "Provided one-on-one Java tutoring covering OOP, data structures, and algorithms",
      "Increased student exam scores by 20% through personalized curriculum"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="p-6 rounded-lg bg-card shadow-md hover:shadow-lg hover:shadow-primary/20"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground">{exp.company}</p>
            </div>
            <span className="text-sm text-muted-foreground">{exp.date}</span>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {exp.bullets.map((bullet, idx) => (
              <li key={idx} className="text-muted-foreground">{bullet}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExperienceSection;