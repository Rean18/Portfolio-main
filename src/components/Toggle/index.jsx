import '../../styles/Switch.css'

function ToggleSwitch({ isTeacherSkills, onToggleChange}) {

    const handleToggle = (event) => {
        onToggleChange(event.target.checked)
    }

    return(
        <label className="switch">
            <input type="checkbox" checked={ isTeacherSkills } onChange={ handleToggle }/>
            <span className="slider"></span>
        </label>
    )
    
    };

    export default ToggleSwitch
