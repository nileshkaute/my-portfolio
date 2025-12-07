import React from "react";

const SkillCard = ({ title, items }) => {
  return (
    <div
      className="
        w-full 
        sm:w-[300px] 
        md:w-[350px] 
        lg:w-[400px] 
        min-h-40 
        border-2 
        rounded-2xl 
        flex 
        flex-col 
        justify-center 
        items-center 
        gap-3 
        px-5 
        py-6
      "
    >
      <h1 className="text-lg sm:text-xl font-semibold text-center">
        {title}
      </h1>

      {/* Show all skills inside the card */}
      <div className="flex flex-wrap justify-center gap-3">
        {items.map((skill, index) => (
          <h4 key={index} className="text-sm sm:text-base">
            {skill.name}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
