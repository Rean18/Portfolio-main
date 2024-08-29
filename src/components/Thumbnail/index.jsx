function Thumbnail({title, image, openModal}) {


        return (
            <div>
                <button id="btn-thumbnail" onClick={openModal}>
                    <img src={image} alt={`Projet ${title}`}/>
                    <div className="thumbnail-title">
                        <h3>{title}</h3>
                    </div>
                </button>
                
            </div>
        )
}

export default Thumbnail