function Thumbnail({title, image, openModal, subtitle}) {


        return (
            <div className="thumbnail-container">
                <button id="btn-thumbnail" onClick={openModal}>
                    <div className="thumbnail-image-container">
                        <img src={image} alt={`Projet ${title}`}/>
                    </div>
                    
                    <div className="thumbnail-title">
                        <div>
                            <h3>{title}</h3>
                        </div>
                        <div>
                            <h4>-</h4>
                        </div>
                        <div>
                            <h4>{subtitle}</h4>
                        </div> 
                    </div>
                </button>
                
            </div>
        )
}

export default Thumbnail