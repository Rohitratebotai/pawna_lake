import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iim62qg',
        'template_omn0d7d',

        
        form.current,
        'cvVMnBGuzqW0JXjmW'
      )
      .then(
        () => {
          console.log('Email successfully sent!');
          alert('Message Sent!');
          form.current.reset();
        },
        (error) => {
          console.log('Email send error:', error.text);
          alert('Failed to send message. Try again.');
        }
      );
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full md:w-3/4 lg:w-1/2 text-white">
        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="border-b-2 w-full px-2 py-2 outline-none focus:bg-[#29b497] focus:text-black"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="border-b-2 w-full px-2 py-2 outline-none focus:bg-[#29b497] focus:text-black"
            required
          />
          <input
            type="text"
            name="user_phone"
            placeholder="Mobile No."
            className="border-b-2 w-full px-2 py-2 outline-none focus:bg-[#29b497] focus:text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border-b-2 w-full px-2 py-2 outline-none focus:bg-[#29b497] focus:text-black"
            required
          />
          <button
            type="submit"
            className="bg-nav-fixed text-white py-2 rounded-md w-full hover:bg-[#29b497] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
