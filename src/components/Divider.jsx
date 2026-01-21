import React from "react";

const Divider = ({ compact = false }) => {
  return (
    <div
      className="w-full flex justify-center"
      style={{ marginTop: compact ? "60px" : "120px", marginBottom: compact ? "60px" : "120px" }}
    >
      <hr
        className="w-[90%] max-w-4xl border-t border-gold/20"
        style={{ borderTopWidth: "1px" }}
      />
    </div>
  );
};

export default Divider;