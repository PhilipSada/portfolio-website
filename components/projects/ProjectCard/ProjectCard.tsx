import Link from 'next/link';
import { RiExternalLinkLine } from 'react-icons/ri';
import React, {useState} from 'react';
import { Project } from '../../../interfaces/project';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ProjectSidebar from '../ProjectSidebar/ProjectSidebar';


interface ProjectCardProps {
    project: Project;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Open Project
        </Tooltip>
    );

    return (
        <>
           <div className="project-card">
            <div className="project-card__img-container" onClick={handleShow}>
                <img src={project.imgUrl} alt="project" />
            </div>
            <div className="project-card__overlay">
                <div className="project-card__overlay-content">
                    <div className="project-card__title">{project.title}</div>
                    <div className="project-card__link-container">
                        <OverlayTrigger
                            placement="right"
                            trigger="hover"
                        
                            rootClose
                            // delay={{ show: 250, hide: 250 }}
                            overlay={renderTooltip}
                        >
                            <Link href={project.href} className="project-card__link" target={"_blank"}><RiExternalLinkLine /></Link>
                        </OverlayTrigger>

                    </div>
                </div>
            </div>
        </div>
         <ProjectSidebar project={project} handleClose={handleClose} show={show}/>
        </>
      
    )
}

export default ProjectCard;