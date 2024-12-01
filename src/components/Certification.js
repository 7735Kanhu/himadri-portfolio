import React from 'react';

const Certification = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development - Skyy Skill Academy, Bhubaneswar',
      date: '2023-09-15',
      link: 'https://skyyacademy.com/fullstack',
    },
    {
      title: 'Front End Development – HTML by Great Learning Academy',
      date: '2023-08-20',
      link: 'https://greatlearning.com/html-certification',
    },
    {
      title: 'Python for Machine Learning by Great Learning Academy',
      date: '2023-07-10',
      link: 'https://greatlearning.com/python-ml',
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[800px] mx-auto shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Certifications</h2>

      <ul className="list-none space-y-6">
        {certifications.map((cert, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-cyan-500 text-white flex items-center justify-center rounded-full mr-4">
              {index + 1}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm w-full">
              <h3 className="text-lg font-semibold text-cyan-800">{cert.title}</h3>
              <p className="text-sm text-gray-700">Date: {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm mt-2 block"
              >
                View Certificate
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certification;
