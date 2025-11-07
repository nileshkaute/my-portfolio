import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="w-52 h-56 bg-white/5 border  border-white/10 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 hover:bg-gray-750 mx-2 my-2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08, 
        ease: [0.33, 1, 0.68, 1] // smooth cubic-bezier easing
      }}
      whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 300, damping: 15 } }}
    >
      {/* Image Container */}
      <div className="w-20 h-20 bg-purple-300 rounded-full flex items-center justify-center mb-5 overflow-hidden border border-gray-600">
        <img 
          src={skill.image} 
          alt={skill.name}
          className="w-12 h-12 object-contain rounded-full"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/48/4A5568/FFFFFF?text=${skill.name.charAt(0)}`;
          }}
        />
      </div>
      
      <h3 className="text-white font-semibold text-base leading-tight text-center mb-5">
        {skill.name}
      </h3>

      {/* Progress Bar with reduced width */}
      <div className="w-4/5 bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-full bg-purple-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
      
      {/* Progress Percentage */}
      <span className="text-gray-300 text-sm mt-2 font-medium">
        {skill.progress}%
      </span>
    </motion.div>
  );
};

export default SkillCard;
