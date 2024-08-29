import { useState } from "react";
import Chart from "../Chart";
import ToggleSwitch from "../Toggle";
import '../../styles/Skills.css'



function Skills() {

    const [ isTeacherSkills, setIsTeacherSkills ] = useState(false)

    const handleToggleChange = (checked) => {
        setIsTeacherSkills(checked)
    }

    const dataTeacherSkills = [
        { label: "Pédagogie",  y: 80, color:'#2E9191' },
        { label: "Créativité", y: 90, color:'#2E9191'  },
        { label: "Gestion de Projet", y: 70, color:'#2E9191'  },
        { label: "Organisation",  y: 70, color:'#2E9191'  },
        { label: "Persévérance",  y: 90, color:'#2E9191'  }
      ];

      const dataDevSkills = [
        { label: "HTML & CSS",  y: 80, color:'#095252' },
        { label: "GitHub", y: 90, color:'#095252'  },
        { label: "React & JS", y: 70, color:'#095252'  },
        { label: "Figma",  y: 70, color:'#095252'  },
        { label: "express",  y: 90, color:'#095252'  }
      ];


    return(
        <section id="skills" className='white-section'>
        <h2>Compétences</h2>
            <Chart data = { isTeacherSkills ? dataTeacherSkills : dataDevSkills } />
            <div className="toggle-container">
                <img src="/assets/images/laptop.png" alt="ordinateur portable" />
                <ToggleSwitch  isTeacherSkills={ isTeacherSkills } onToggleChange={ handleToggleChange }/>
                <img src =  '/assets/images/foot.png' alt="ballon de football" />


            </div>

            </section>
        
    )
}

export default Skills