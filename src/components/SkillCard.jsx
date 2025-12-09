import React from "react";

const SkillCard = ({ title, items }) => {
  return (
    <div
      className="
        w-full 
        sm:w-[310px] 
        md:w-[310px] 
        lg:w-[410px] 
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
   <h4 
  key={index}
  className="brush-bg  text-sm sm:text-sm text-black  inline-block"
  style={{padding:"3px 4px"}}
>
  {skill.name}
</h4>


        ))}
      </div>
    </div>
  );
};

export default SkillCard;
