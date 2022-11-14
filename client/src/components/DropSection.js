import React from "react";

const DropSection = ({ name, children }) => {
  const handleDropClick = (e) => {
    // console.log(e.target.parentElement.childNodes[1].childElementCount);
    const dropSectionEl = e.target.parentElement.childNodes[1];
    const chldElCount = e.target.parentElement.childNodes[1].childElementCount;

    if (dropSectionEl.classList.contains("drop-section-show")) {
      dropSectionEl.style.height = `0px`;
    } else {
      dropSectionEl.style.height = `${
        dropSectionEl.parentElement.offsetHeight * chldElCount
      }px`;
    }
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
