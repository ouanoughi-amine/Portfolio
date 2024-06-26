import { useState } from 'react';
import "./SectionContact.css";

const SectionContact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('message', message);

        // Envoyer les données du formulaire à Formspree
        const response = await fetch('https://formspree.io/f/xzbnargb', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            setSubmitMessage('Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.');
            setEmail('');
            setMessage('');
             // Effacer le message après 6 secondes (6000 millisecondes)
            setTimeout(() => {
              setSubmitMessage('');
            }, 6000);
        } else {
            setSubmitMessage('Une erreur s\'est produite. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div className='contact' id='contact'>
            <form onSubmit={handleSubmit} className='formContact'>
                <h2 className='titreContact'>Me contacter</h2>
                <label htmlFor="email" className='label'>Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="message" className='label'>Message</label>
                <textarea
                    id="message"
                    value={message}
                    placeholder='Votre message'
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                {submitMessage && <p className='submitMessage'>{submitMessage}</p>}
                <button type="submit" className='buttonForm'>Envoyer</button>
            </form>
        </div>
    );
}

export default SectionContact;
