import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="mb-8 list-disc list-inside">
        <li>coding since the fifth grade.</li>
        <li>experience in low-level systems, machine learning, and full-stack.</li>
        <li>building <a href="https://fynopsis.ai" target="_blank" rel="noopener noreferrer">fynopsis.ai</a></li>
      </ul>
    </motion.div>
  );
};

export default AboutSection;