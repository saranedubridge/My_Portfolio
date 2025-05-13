import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    if (!formData.name) {
      formErrors.name = 'Name is required';
    }

    if (!formData.subject) {
      formErrors.subject = 'Subject is required';
    }

    if (!formData.message) {
      formErrors.message = 'Message is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    emailjs.sendForm('service_dj3w0n8', 'template_0ubilyw', e.target, 'BuE79jbAAYyS3Ctdq')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
      });

    e.target.reset();
    setFormData({
      email: '',
      name: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="bg-black text-white py-12" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities. Let's connect and explore how we can collaborate to create something amazing together!</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:saranraj.webdev@gmail.com" className='hover:underline'>
                    saranraj.webdev@gmail.com
                </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2 rotate-90'></FaPhone>
              <span><a href="tel:+917010910735">+91 7010910735</a></span>
            </div>
            <div className='mb-4'>
              <FaLinkedin className='inline-block text-green-400 mr-2'></FaLinkedin>
              <span><a href="https://www.linkedin.com/in/saran-raj-m/" target="_blank">https://www.linkedin.com/in/saran-raj-m/</a></span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400 ${errors.email ? 'border-red-600' : ''}`}
                      placeholder='Enter Your Email'
                    />
                    {errors.email && <p className="text-red-600">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400 ${errors.name ? 'border-red-600' : ''}`}
                      placeholder='Enter Your Name'
                    />
                    {errors.name && <p className="text-red-600">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="subject" className='block mb-2'>Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400 ${errors.subject ? 'border-red-600' : ''}`}
                      placeholder='Enter Subject'
                    />
                    {errors.subject && <p className="text-red-600">{errors.subject}</p>}
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                      focus:border-green-400 ${errors.message ? 'border-red-600' : ''}`}
                      rows="5"
                      placeholder='Enter Your Message'
                    />
                    {errors.message && <p className="text-red-600">{errors.message}</p>}
                </div>
                <button 
                  type="submit"
                  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                  transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
                >
                  Send
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
