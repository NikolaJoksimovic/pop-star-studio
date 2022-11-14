import React from "react";

const DropSection = ({ name, children }) => {
  const handleDropClick = (e) => {
    console.log(e.target.parentElement.childNodes[1]);
    let dropSectionEl = e.target.parentElement.childNodes[1];
    dropSectionEl.classList.toggle("drop-section-show");
  };
  return (
    <div className='drop-section-container'>
      <h3 className='drop-title' onClick={handleDropClick}>
        {name}
      </h3>
      <div className='drop-section'>{children}</div>
    </div>
  );
};

export default DropSection;
