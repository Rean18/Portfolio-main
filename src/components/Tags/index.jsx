import '../../styles/Tags.css'

function Tags({tagsList}) {

    return (
        <div>
            <ul className="tags-list">
                {tagsList.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    )


}

export default Tags;