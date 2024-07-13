import React, { useState } from "react";
import axios from 'axios';
import SendIcon from '@mui/icons-material/Send';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStatus('Sending...');

    axios.post('https://formspree.io/f/mzzppywq', formData)
            .then(response => {
                setStatus('Success! Thank you for your submission.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            })
            .catch(error => {
                setStatus('Error. Please try again.');
            });
            console.log(status)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="contact-form">
        <div className="form-left">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="phone">Phone No</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Your Phone Number *"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-right">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Your Message *"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" name="submit" className="btn btn-primary">
        <SendIcon/> Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
