import { useEffect, useState } from "react";
import Modal from "react-modal";
import Thumbnail from "../Thumbnail";
import ProjectPage from "../ProjectPage";
import '../../styles/Project.css'
import '../../styles/Thumbnail.css'
import projectData from '../../data/projects.json'

Modal.setAppElement("#root"); // Nécessaire pour l'accessibilité avec react-modal

function ProjectGallery() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [projects, setProjects] = useState([projectData]);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [hoverPrev, setHoverPrev] = useState(false);
    const [hoverNext, setHoverNext] = useState(false);
    const [isTablet, setIsTablet] = useState(false)

useEffect(() => {
    setProjects(projectData);
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleNextProject() {
        setCurrentProjectIndex(index =>
            (index +1) % projects.length
        )
    }
    
    function handlePrevProject() {
        setCurrentProjectIndex(index =>
        (index -1 + projects.length) % projects.length
        )
    }

    const currentProject = projects[currentProjectIndex]

    const handleResize = () => {
        setIsTablet(window.innerWidth < 1240);
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const customStylesDesktop = {
        content : {
            width: '70%',
            height: '100%',
            margin: 'auto',

        }
    }
    const customStylesTablet = {
        content : {
            width: '100%',
            height: '100%',
            margin: 'auto',
            left: '0',
            

        }, 
        overlay :{
            top:'40px'
        }
    }

    return (
        <section id="project" className="blue-section">
            <h2>Projets</h2>
            <div className='container'>
                <button className="change-project" onClick={handlePrevProject}>
                    <img 
                    src= {hoverPrev ? "/assets/icons/icon_slider_prev_hover.png" : "/assets/icons/icon_slider_prev_mini.png"} 
                    alt="prev icon"
                    onMouseEnter={() => setHoverPrev(true)} 
                    onMouseLeave={() => setHoverPrev(false)}/>
                </button>
                <Thumbnail 
                    title= {currentProject.title}
                    image= {currentProject.logo}
                    subtitle={currentProject.subtitle} 
                    openModal={() => openModal(currentProject)} />
                <button className="change-project" onClick={handleNextProject}>
                <img 
                src={hoverNext ? "/assets/icons/icon_slider_next_hover.png" : "/assets/icons/icon_slider_next_mini.png"  }
                alt="next icon" 
                onMouseEnter= {() => setHoverNext(true)}
                onMouseLeave= {() => setHoverNext(false)}
                />
                
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Détails du projet"
                style={ isTablet ? customStylesTablet : customStylesDesktop  }
            >
                {currentProject && (
                    <ProjectPage 
                        title={currentProject.title} 
                        image={currentProject.image} 
                        year = {currentProject.year}
                        description={currentProject.description}
                        tags = {currentProject.tags}
                        problematic={currentProject.problematic}
                        url = {currentProject.url}
                        closeModal={closeModal} 
                    />
                )}
            </Modal>
        </section>
    );
}

export default ProjectGallery;
