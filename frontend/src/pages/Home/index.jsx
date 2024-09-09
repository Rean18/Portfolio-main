import '../../styles/Home.css'
import '../../styles/About.css'
import Skills from '../../components/Skills'
import Project from '../../components/ProjectGallery'
import Form from '../../components/Form'



function Home() {
   

    return(
        <main>
        <section id='section-presentation'>
            <div className="presentation-title">
                <h1>Rémi Pinheiro</h1>
                <h2>Professeur d'EPS <br />
                    et Développeur front-end</h2>
            </div>
            <div className="presentation-img">
                <img src= '/assets/images/illustration-rémi.webp' alt="" />
            </div>
            
        </section>
        <section id='about' className='blue-section'>
            <h2>A propos</h2>
            <p>Professeur d’EPS depuis 2015, j’ai une solide expérience dans l’enseignement d’activités physiques et sportives et dans l’accompagnement des élèves dans leur parcours scolaire.
           <br /> Dans l’optique d’aider davantage mes élèves, je me suis formé dans le développement d’applications numériques afin d’être en capacités de créer des outils qui leurs permettront de progresser plus encore. </p>
        </section>
            <Skills />
            <Project />
            <Form />
        </main>
        
    )
}

export default Home