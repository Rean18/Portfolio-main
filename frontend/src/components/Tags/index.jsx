import '../../styles/Tags.css'

function Tags({tagsList}) {

    return (
        
            <ul className="tags-list">
                {tagsList.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
       
    )


}

export default Tags;