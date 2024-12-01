import React, { useState, useEffect } from 'react';

const Skill = () => {
  const [skills, setSkills] = useState([
    { skill: 'HTML', progress: 95 },
    { skill: 'CSS', progress: 90 },
    { skill: 'Bootstrap', progress: 85 },
    { skill: 'JavaScript', progress: 92 },
    { skill: 'SCSS', progress: 85 },
    { skill: 'Node.js', progress: 88 },
    { skill: 'Express.js', progress: 87 },
    { skill: 'React.js', progress: 95 },
    { skill: 'React Native', progress: 90 },
    { skill: 'Angular', progress: 80 },
    { skill: 'Python', progress: 90 },
    { skill: 'MySQL', progress: 88 },
    { skill: 'SQLite', progress: 85 },
    { skill: 'Mongo DB', progress: 75 },
    { skill: 'Django', progress: 87 },
    { skill: 'Next.js', progress: 85 },
    { skill: 'GitHub', progress: 90 },
    { skill: 'Tailwind CSS', progress: 93 },
  ]);

  const [progressValues, setProgressValues] = useState([]);

  useEffect(() => {
    const newProgressValues = skills.map(() => 0);
    setProgressValues(newProgressValues);

    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        if (newProgressValues[index] < skill.progress) {
          newProgressValues[index] += 1;
          setProgressValues([...newProgressValues]);
        } else {
          clearInterval(intervals[index]);
        }
      }, 10);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [skills]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl m-10 w-full md:w-[1280px] mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="w-1/2 mr-4">
              <p className="text-cyan-800 font-medium">{skill.skill}</p>
            </div>
            <div className="w-1/2 bg-gray-200 rounded-full h-3 relative overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-400 to-cyan-800 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressValues[index]}%` }}
              />
            </div>
            <p className="text-gray-800 ml-4 font-medium">{progressValues[index]}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
