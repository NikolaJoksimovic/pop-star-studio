import React, { useEffect, useState } from "react";
import ProjectItem from "../components/ProjectItem";
import data from "../projects/projects.json";

const FinishedProjects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects(data);
  }, []);

  return (
    <section id='finished-projects' className='height-100'>
      <div className='projects-container height-90'>
        {projects?.map((item) => {
          const info = {
            title: item.title,
            desc: item.desc,
            img: item.img,
            link: item.link,
          };
          return <ProjectItem key={item.title} info={info}></ProjectItem>;
        })}
      </div>
      {/* <Footer></Footer> */}
    </section>
  );
};

export default FinishedProjects;
