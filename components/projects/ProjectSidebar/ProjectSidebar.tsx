import Link from 'next/link';
import { RiExternalLinkLine, RiCloseCircleLine } from 'react-icons/ri';
import React from 'react';
import { Project } from '../../../interfaces/project';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tag from '../../shared/Tag/Tag';

interface ProjectSidebarProps {
    show: boolean;
    handleClose: () => void;
    project: Project;
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ show, handleClose, project }) => {


    return (
        <div className="project-sidebar">
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <div className="project-sidebar__header">
                      <RiCloseCircleLine onClick={handleClose}/>
                </div>
                <div className="project-sidebar__body">
                    <h4 className="project-sidebar__title">{project.title}</h4>
                    <div className="project-sidebar__img-container">
                        <img src={project.imgUrl} alt="project" />
                    </div>
                    <p className="project-sidebar__description">{project.description} Also, this project was built with the following
                    technologies:</p>
                   
                    <div className="project-sidebar__technologies">
                            {project.technologies.map((technology, index)=>(
                                 <Tag key={index}>{technology}</Tag>
                            ))}
                    </div>
                    <div>
                        <Link href={project.href} target={"_blank"} className="project-sidebar__link">Open Project <span><RiExternalLinkLine /></span></Link>
                    </div>

                </div>
            </Offcanvas>
        </div>
    )
}

export default ProjectSidebar;