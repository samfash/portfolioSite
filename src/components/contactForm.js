import React, { useState } from "react";
import axios from 'axios';
import { Button, CircularProgress} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';


const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState('');
  const formspree = 'https://formspree.io/f/mzzppywq'
  // const serverBackend = 'http://localhost:5000/send'
    // const server = 'https://portfoliobackend-yokf.onrender.com/send'


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
    setLoading(true);

    axios.post(formspree, formData)
            .then(response => {
                setStatus('Success! Thank you for your submission, I will get back to you shortly.');
                setLoading(false);
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
    <div>
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
              placeholder="Your Phone Number"
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
        <Button type="submit" 
          name="submit" 
          className="btn btn-primary" 
          variant="contained"
          color="primary"
          disabled={loading}
          startIcon={loading ? <CircularProgress /> : <SendIcon />}
        >
         {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
    {status!== ""&&<Alert severity={loading? "error": "success"}
     onClose={() => {setStatus(""); setLoading(false)}}
     >{status}</Alert>}
    </div>
  );
};

export default ContactForm;
