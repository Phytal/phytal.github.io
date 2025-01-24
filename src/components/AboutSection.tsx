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
        <li>building <a href="https://fynopsis.ai" target="_blank" rel="noopener noreferrer">fynopsis.ai</a></li>
        <li>coding since the fifth grade</li>
        <li>experience in low-level systems, machine learning, and full-stack</li>
        <li>avid weightlifter, runner, and guitarist</li> 
        <li>jazz and bossa-nova enthusiast</li>
        <li>ceremonial matcha worshipper</li>
      </ul>
    </motion.div>
  );
};

export default AboutSection;