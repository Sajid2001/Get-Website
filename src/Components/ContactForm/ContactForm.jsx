import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    email: '',
    interests: {
      joiningGet: false,
      studentResource: false
    },
    message: ''
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData(prevState => ({
        ...prevState,
        interests: {
          ...prevState.interests,
          [name]: checked
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};


  return (
    <div className="h-screen flex justify-center items-start pt-10">
    <div className='w-1/2'>
        <div className='font-bold text-4xl'>
            Contact Form
        </div>
     
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
            <div className='mb-2'>
                <label>First Name: </label>
            </div>
            <div>
                <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border-2 border-black rounded p-2 bg-gray-100 hover:border-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none"                />
            </div>
          
        </div>
        
        <div className='mb-4'>
            <div className='mb-2'>
                <label>
                Phone Number:
                
                </label>
            </div>
            <div>
                <input 
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border-2 border-black rounded p-2 bg-gray-100 hover:border-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none"                
                />

                
            </div>
        </div>

        <div className='mb-4'>
            <div className='mb-2'>
                <label>
                Email:
               
                </label>
            </div>
            <div>
                <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-2 border-black rounded p-2 bg-gray-100 hover:border-black focus:border-black focus:ring-1 focus:ring-black focus:outline-none"              

                
                />
            </div>
          
        </div>
        <div className="mb-4">
            Interested In:
            <div className="mt-2">
                <label>
                    <input 
                        type="checkbox"
                        name="joiningGet"
                        checked={formData.interests.joiningGet}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Joining Get
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox"
                        name="studentResource"
                        checked={formData.interests.studentResource}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Student Resource
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox"
                        name="connectwithget"
                        checked={formData.interests.connectwithget}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Connecting with GET
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox"
                        name="gamejams"
                        checked={formData.interests.gamejams}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Game Jams
                </label>
            </div>
            <div>
                <label>
                    <input 
                        type="checkbox"
                        name="Other"
                        checked={formData.interests.Other}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    Other
                </label>
            </div>
        </div>
        <div className="mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                Submit
            </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contact;
