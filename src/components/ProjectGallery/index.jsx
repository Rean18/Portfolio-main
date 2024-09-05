import { useEffect, useState } from "react";
import Modal from "react-modal";
import Thumbnail from "../Thumbnail";
import ProjectPage from "../ProjectPage";
import '../../styles/Project.css'
import projectData from '../../data/projects.json'

Modal.setAppElement("#root"); // Nécessaire pour l'accessibilité avec react-modal

function ProjectGallery() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [projects, setProjects] = useState([projectData]);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [hoverPrev, setHoverPrev] = useState(false);
    const [hoverNext, setHoverNext] = useState(false);

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

    const customStyles = {
        content : {
            width: '70%',
            height: '90%',
            margin: 'auto',

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
                    image= {currentProject.image} 
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
                style={customStyles}
            >
                {currentProject && (
                    <ProjectPage 
                        title={currentProject.title} 
                        image={currentProject.image} 
                        year = {currentProject.year}
                        description={currentProject.description}
                        tags = {currentProject.tags}
                        closeModal={closeModal} 
                    />
                )}
            </Modal>
        </section>
    );
}

export default ProjectGallery;
