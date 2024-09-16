import Tags from "../Tags"


function ProjectPage({title, image, year, description, problematic, solutions, closeModal, tags, url}) {
    return (
            <div id="project-container">
                    <button type="button" id="cross-modal" onClick={closeModal}></button>
                <div className="image-container">
                    <img id="project-image" src={image} alt={`Description du projet ${title}`} />
                </div>
                <div className="tags-container">
                    <Tags 
                        tagsList={tags}
                    />
                </div>
                
                <div className="project-description">
                <div className="github-container">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img id='github-icon' src="/assets/icons/github-modal.png" alt="Github icon" /> 
                    </a>
                </div>
                    <h3>Année : {year}</h3>
                    <h4>Description :</h4> <p>{description}</p>
                    <h4>Problématiques :</h4> 
                        <ul >{problematic.map((problem, index)=> (
                            <li className="item" key={index}>{problem}</li>
                        ))}</ul>
                    <h4>Solutions apportées</h4>
                    <ul >{solutions.map((solution, index)=> (
                            <li className="item" key={index}>{solution}</li>
                        ))}</ul>
                </div>
                <button type="button" id="close-modal" onClick={closeModal}>Fermer</button>
                
            </div>

        )

}

export default ProjectPage