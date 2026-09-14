import { useState } from 'react';
import './ContactForm.css';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
}

function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    const nextValues = {
      ...values,
      [name]: value,
    };

    setValues(nextValues);
    setErrors(validate(nextValues));
    setSubmitted(false);
    setServerError('');
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitted(false);
    setServerError('');

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5050/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact form');
      }

      setSubmitted(true);
      setValues({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setServerError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const hasErrors = Object.keys(validate(values)).length > 0;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <span className="field-error">{errors.name}</span>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <span className="field-error">{errors.email}</span>}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={values.message}
        onChange={handleChange}
      />
      {errors.message && (
        <span className="field-error">{errors.message}</span>
      )}

      <button type="submit" disabled={hasErrors || loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {submitted && (
        <p className="success-message">
          Thanks! Your message has been recorded.
        </p>
      )}

      {serverError && <p className="field-error">{serverError}</p>}
    </form>
  );
}

export default ContactForm;