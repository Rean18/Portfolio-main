import { useForm } from "react-hook-form";
import '../../styles/Form.css';

function Form() {

 const { register, handleSubmit, formState: { errors } } = useForm();

 const sendEmail = async (data) => {
    try {
        const response = await fetch('http://localhost:3000/send-email', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        console.log(data);

        if (response.ok) {
            alert('Message envoyé avec succès !');
        } else {
            alert('Erreur lors de l\'envoi du message');
        }
    } catch (error) {
        console.error('Erreur: ', error);
        alert('Erreur lors de l\'envoi du message');
    }
 }

 return (
    <section className="white-section" id="contact">
        <h2>Contact</h2>
        <form id='contact-form' onSubmit={handleSubmit(sendEmail)}>
            <label htmlFor="lastName">Nom</label>
            <input 
                {...register('lastName', 
                { 
                    required: "Nom est requis", 
                    maxLength: {
                        value: 20,
                        message: "Le nom ne doit pas dépasser 20 caractères"
                    },
                    pattern: { 
                        value: /^[a-zA-Z\s-]+$/, 
                        message: 'Entrez un nom valide' 
                    } 
                })} 
            />
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}

            <label htmlFor="firstName">Prénom</label>
            <input 
                {...register('firstName', 
                { 
                    required: "Prénom est requis", 
                    maxLength: {
                        value: 20,
                        message: "Le prénom ne doit pas dépasser 20 caractères"
                    },
                    pattern: { 
                        value: /^[a-zA-Z\s-]+$/, 
                        message: 'Entrez un prénom valide' 
                    } 
                })} 
            />
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}

            <label htmlFor="subject">Objet</label>
            <input 
                {...register('subject', 
                { 
                    required: "Objet est requis", 
                    maxLength: {
                        value: 30,
                        message: "L'objet ne doit pas dépasser 30 caractères"
                    },
                    pattern: { 
                        value: /^[a-zA-Z\s-.]+$/, 
                        message: "Entrez un objet valide" 
                    } 
                })} 
            />
            {errors.subject && <p className="error">{errors.subject.message}</p>}

            <label htmlFor="message">Votre message</label>
            <textarea 
                id='form-message' 
                {...register('message', 
                { 
                    required: "Le message est requis", 
                    maxLength: {
                        value: 500,
                        message: "Le message ne doit pas dépasser 500 caractères"
                    },
                    pattern: { 
                        value: /^[a-zA-Z0-9\s-.?!_]+$/, 
                        message: "Entrez un message valide" 
                    } 
                })} 
            />
            {errors.message && <p className="error">{errors.message.message}</p>}

            <input type="submit" id="form-submit" />
        </form>
    </section>
 );
}

export default Form;