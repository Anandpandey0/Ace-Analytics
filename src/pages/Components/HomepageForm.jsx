import React, { useState } from "react";

const HomepageForm = ({ placeholderValue, type }) => {
  const [inputValue, setInputValue] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const handleInputFocus = () => {
    setShowPlaceholder(false);
    // console.log("Hi");
  };
  const handleInputBlur = () => {
    if (inputValue === "") {
      setShowPlaceholder(true);
    }
  };
  return (
    <input
      type={type}
      className="w-5/6 mx-auto p-2 py-2 px-4 border-2 bg-gray-100 outline-none"
      placeholder={showPlaceholder ? placeholderValue : ""}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
    />
  );
};

export default HomepageForm;
