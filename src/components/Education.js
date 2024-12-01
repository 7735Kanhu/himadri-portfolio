import React, { useState, useEffect } from 'react';

const Education = () => {
  const [showEducation, setShowEducation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowEducation(true);
    }, 500); // Adds a delay before showing the education details

    return () => clearTimeout(timeoutId);
  }, []);

  const education = [
    {
      title: 'Full Stack Web Development',
      class: 'Certification',
      institute: 'Skyy Skill Academy, Bhubaneswar',
      duration: '02/2023',
      points: [],
    },
    {
      title: 'Master of Computer Science',
      class: "Master's Degree",
      institute: 'Prananath Autonomous College, Utkal University',
      duration: '08/2019',
      points: [],
    },
    {
      title: 'Bachelor of Science in Biology',
      class: "Bachelor's Degree",
      institute: 'Utkal University',
      duration: '05/2016',
      points: [],
    },
    {
      title: '+2 Science',
      class: 'Higher Secondary',
      institute: 'Bauri Bandhu Higher Secondary School',
      duration: '03/2013',
      points: [],
    },
  ];

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[800px] mx-auto shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-cyan-800">Education</h2>

      <ul className="space-y-6">
        {education.map((edu, index) => (
          <li
            key={index}
            className={`transition-opacity duration-500 ${
              showEducation ? 'opacity-100' : 'opacity-0'
            } flex bg-gray-100 shadow-md rounded-lg overflow-hidden`}
          >
            {/* Left Section for Date & Class */}
            <div className="w-36 bg-cyan-700 text-white flex flex-col items-center justify-center p-4">
              <p className="text-sm font-semibold">{edu.duration}</p>
              <p className="text-base font-bold mt-2 text-center">{edu.class}</p>
            </div>

            {/* Right Section for Details */}
            <div className="flex-1 p-4">
              <h3 className="text-lg font-bold text-cyan-800">{edu.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{edu.institute}</p>
              {edu.points.length > 0 && (
                <ul className="list-disc pl-6 mt-2 text-sm text-gray-700">
                  {edu.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
