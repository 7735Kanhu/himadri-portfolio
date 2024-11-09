import React from 'react';

const Certification = () => {
  const certifications = [
    {
      title: 'Google Cloud Certified: Terraform Associate (202)',
      date: '2023-10-11',
      link: 'https://www.google.com',
    },
    {
      title: 'Google Cloud Certified: Digital Leader',
      date: '2023-09-20',
      link: 'https://www.google.com',
    },
    {
      title: 'Google Cloud Certified: Terraform Associate (202)',
      date: '2023-10-11',
      link: 'https://www.google.com',
    },
    {
      title: 'Google Cloud Certified: Digital Leader',
      date: '2023-09-20',
      link: 'https://www.google.com',
    },
    {
      title: 'Google Cloud Certified: Terraform Associate (202)',
      date: '2023-10-11',
      link: 'https://www.google.com',
    },
    {
      title: 'Google Cloud Certified: Digital Leader',
      date: '2023-09-20',
      link: 'https://www.google.com',
    },
    {
      title: 'Google Cloud Certified: Terraform Associate (202)',
      date: '2023-10-11',
      link: 'https://www.google.com',
    },
    {
      title: 'Google Cloud Certified: Digital Leader',
      date: '2023-09-20',
      link: 'https://www.google.com',
    },
    // Add more certifications here...
  ];

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[1280px] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center my-4">Certifications</h2>

      <ul className="list-none my-10">
        {certifications.map((cert, index) => (
          <li key={index} className="flex items-center mb-4">
            <div className="w-8 h-8 rounded-full bg-red-500 mr-4"></div>
            <div className='bg-gray-200 w-full p-4'>
              <h3 className="text-lg font-bold">{cert.title}</h3>
              <p className="text-gray-800">{cert.date}</p>
              <a href={cert.link} className="text-blue-500 hover:underline">View Certificate</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certification;