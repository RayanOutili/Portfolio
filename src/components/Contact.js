import React from 'react';

const Contact = () => {
    return (
        <section className='mt-[15vh]'>
            <h1 className="title-trait text-4xl font-bold text-left ml-14 mt-24 pt-4 mb-2">Contact</h1>

            <div className="block" id="contact">
                <p className="text-center mt-6 text-xl">N'hésitez pas à <a href="mailto:rayan.outili@gmail.com" className='underline'>me contacter</a> pour plus d'informations !</p>
                <form action="https://formsubmit.co/rayan.outili@gmail.com" method='POST' id="contact-block">
                    <input type="hidden" name="_subject" value="Nouveau message depuis rayan-outili.fr" />
                    <input type="hidden" name="_template" value="table" />
                    <div className="contact-input">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="contact-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="contact-input">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" required></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
