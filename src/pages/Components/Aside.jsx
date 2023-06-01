import React from "react";

const Section = ({ children }) => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </section>
  );
};

export default Section;
