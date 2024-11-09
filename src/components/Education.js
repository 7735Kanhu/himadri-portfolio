import React, { useState, useEffect } from 'react';

const Education = () => {
  const [showEducation, setShowEducation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowEducation(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);

  const education = [
    {
      title: 'Bachelor of Technology (Computer Science & Engineering)',
      class:"Bachelor' Degree",
      institute: 'SETH JAI PARKASH MUKAND LAL INSTITUTE OF ENGINEERING AND TECHNOLOGY',
      duration: '2018-2021',
      points: [
        'Affiliated with Kurukshetra University, Kurukshetra',
        'Completed B.Tech in Computer Science Engineering with 78%',
        'Maintained approx. 70% in every semester of college academic',
      ],
    },
    {
      title: 'Diploma',
      institute: 'GOVERNMENT INSTITUTE',
      class:"Diploma",
      duration: '2015-2018',
      points: [
        'Affiliated with Haryana Technical Education Board (HTER), Haryana',
        'The college was mainly focused on the basics of 10+2 and the engineering subjects',
        'There was also a good base in Mathematics and Data Structures',
        'Completed my Diploma with 70%',
      ],
    },
    {
      title: 'Secondary School',
      class:"Secondary School",
      institute: 'MODERN SCHOOL, FARIDABAD',
      duration: '2013-2014',
      points: [
        'Affiliated with Central Board of Secondary Education (CBSE), New Delhi',
        'The Secondary aims of Maths, English, Science, Social Science, Literature and Languages',
        'Completed my matriculation with 7.8 CGPA',
      ],
    },
  ];

  return (
    <div className="bg-white p-8 w-full md:w-[1280px] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>

      <ul className="list-none my-10">
        {education.map((edu, index) => (
          <li key={index} className={`mb-4 ${showEducation ? 'opacity-100' : 'opacity-0'} shadow-md`}>
            <div className="flex items-start h-full">
              <div className="w-36 mr-4 bg-cyan-800 text-white flex flex-col justify-center items-center h-48 p-4">
                <p className="text-white">{edu.duration}</p>
                <h3 className='text-xl font-semibold text-center'>{edu.class}</h3>
              </div>
              <div className='p-4'>
                <h3 className="text-lg font-bold">{edu.title}</h3>
                <p className="text-gray-800">{edu.institute}</p>
                <ul className="list-disc pl-6 mt-2">
                  {edu.points.map((point, i) => (
                    <li key={i} className="text-gray-800">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;