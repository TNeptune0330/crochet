import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm('service_f9u1p89', 'template_koaeu38', e.target, 'vFqgzLa1BWGzC5eLF')
      .then((result) => {
        setResponseMessage('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setResponseMessage('Failed to send email.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSending}>
          {isSending ? 'Order Processing...' : 'Order'}
        </button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
};

export default ContactForm;
