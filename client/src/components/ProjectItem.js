import React from "react";

const ProjectItem = ({ info }) => {
  const { title, desc, img, link } = { ...info };
  return (
    <a className='project-item-link' href={link ? link : ""} target='_blank'>
      <div className='project-item-container  center-flex'>
        <h3 className='project-item-title'>{title}</h3>
        <div className='project-item-desc'>
          <p>{desc}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
