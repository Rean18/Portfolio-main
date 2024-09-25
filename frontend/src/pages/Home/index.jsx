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
           <br /> Dans l’optique d’aider davantage mes élèves, j’ai suivi une formation de développeur web chez <a  href="https://openclassrooms.com/fr/paths/899-developpeur-web?utm_source%5B0%5D=google&utm_source%5B1%5D=google&utm_medium%5B0%5D=cpc&utm_medium%5B1%5D=cpc&utm_campaign=display_google_fr_fr_b2c_prospecting_perf-max-track-developpement_230117_00_adgroup-is-&gad_source=1&gclid=EAIaIQobChMI6b2lnf3GiAMVjTkGAB3QiwfdEAAYASAAEgIKQ_D_BwE" 
           target='_blank' 
           rel="noopener noreferrer">
            OpenClassrooms</a> afin de pouvoir créer des outils numériques qui leur permettront de progresser plus encore. </p>
        </section>
            <Skills />
            <Project />
            <Form />
        </main>
        
    )
}

export default Home