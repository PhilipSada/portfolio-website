import Link from 'next/link';
import React from 'react';
import { data } from '../../../data/project';
import ProjectCard from '../ProjectCard/ProjectCard';


const ProjectSection: React.FC = () => {
    return (
        <section className="project-section">
            <div className="project-section__main-container">
                <div className="project-section__heading-container" data-aos="fade-down">
                    <h4>Projects</h4>
                </div>

                <div className="project-section__cards-container" data-aos="fade-down">
                    {
                        data.map((project, index) => (
                            <div className="project-section__cards" key={index}>
                                <ProjectCard project={project} />
                            </div>

                        ))
                    }
                </div>
            </div>


        </section>
    )
}

export default ProjectSection;