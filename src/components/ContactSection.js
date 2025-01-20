import React from 'react';
import _ from 'lodash';

export default class ContactSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const title = _.get(section, 'title');
        
        return (
            <section className="section">
                <div className="container container--md">
                    {title && <h2 className="section__title align-center">{title}</h2>}
                    <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <div className="sr-only">
                            <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                            <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                        </div>
                        <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                        <div className="form-group">
                            <label id="name-label" htmlFor="name">Name</label>
                            <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <label id="email-label" htmlFor="email">Email</label>
                            <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <label id="subject-label" htmlFor="subject">Subject</label>
                            <input aria-labelledby="subject-label" type="text" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <label id="message-label" htmlFor="message">Message</label>
                            <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Message..." />
                        </div>
                        <div className="form-submit">
                            <center><button type="submit" class="btn--blue" id="enviar_correo">Send mail</button></center>
                        </div>
                    </form>
                </div>  
                <script dangerouslySetInnerHTML={{
                    __html: "const btn_envio = document.getElementById(\"enviar_correo\"); btn_envio.addEventListener(\"click\", function(e){ e.preventDefault(); const email = document.getElementById(\"email\").value; const nombre = document.getElementById(\"name\").value; const subject = document.getElementById(\"subject\").value; const message = document.getElementById(\"message\").value; window.location.href = `mailto:christopher.erazo.herrera@gmail.com?subject=${subject}&body=Name%3A${nombre}%0AEmail%3A${email}%0AMessage%3A${message}`; window.location.href = \"https://christopherdavideh.com/contact/\";});"
                }}/>              
            </section>            
        );        
    }
    
}
