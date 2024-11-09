import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send an email or display a success message
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      className="w-full bg-fixed bg-cover bg-center p-10"
      style={{ backgroundImage: `url('/contact.jpg')` }}
    >
    <div className="bg-white p-8 rounded-lg shadow-md w-1/2 mx-auto " >
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

      <div className='grid md:grid-cols-2 justify-between gap-8'>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full h-24"
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </form>

      <div className="mt-4">
        <p className="text-gray-800">Feel free to contact me:</p>
        <p className="text-gray-800">Phone: +91 9873824766</p>
        <p className="text-gray-800">Email: mayank2299@gmail.com</p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;