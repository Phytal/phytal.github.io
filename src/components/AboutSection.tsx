import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-8">
        Pursuing a dual degree in Computer Science Honors and Business Administration at UT Austin. 
        AWS Certified Cloud Practitioner with experience in full-stack development, machine learning, and financial technology.
      </p>
    </motion.div>
  );
};

export default AboutSection;