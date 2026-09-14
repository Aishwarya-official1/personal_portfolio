import ContactForm from '../components/ContactForm.jsx';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <div className="group">
        <div className="text">
          I'm always open to discussing new opportunities, collaborating on
          interesting projects, or simply connecting with fellow developers.
          Feel free to reach out, and I'll get back to you as soon as possible.
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
