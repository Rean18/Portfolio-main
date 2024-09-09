import Tags from "../Tags"


function ProjectPage({title, image, year, description, closeModal, tags}) {
    return (
            <div id="project-container">
                    <button type="button" id="close-modale" onClick={closeModal}></button>
                    <h2>{title}</h2>
                <div className="image-container">
                    <img src={image} alt={`Description du projet ${title}`} />
                </div>
                <div className="tags-container">
                    <Tags 
                        tagsList={tags}
                    
                    />
                </div>
                <div className="project-description">
                    <h3>Année : {year}</h3>
                    <h4>Objectifs : {description}</h4>
                </div>
                
            </div>

        )

}

export default ProjectPage