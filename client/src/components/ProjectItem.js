import React from "react";

const ProjectItem = ({ info }) => {
  const { title, desc, img, link } = { ...info };
  return (
    <div className='project-item-container  center-flex'>
      <h3>{title}</h3>
      <div className='project-item-img-container'>
        {img && <img src={img} alt='no.jpg' />}
      </div>
      <div className='project-item-desc'>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
