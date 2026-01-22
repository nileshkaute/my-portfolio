import React from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/si";

const SkillIcon = ({ skill }) => {
  const IconComponent = Icons[skill.icon] || Icons.SiJavascript;

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg border border-zinc-200 shadow-sm transition-all"
    >
      <IconComponent className="text-2xl sm:text-3xl text-zinc-800" />
      {/* Tooltip on Hover */}
      <span className="absolute -top-10 scale-0 transition-all rounded bg-zinc-900 p-2 text-xs text-white group-hover:scale-100 font-sans">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillIcon;