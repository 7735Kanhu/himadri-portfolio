import React, { useState, useEffect } from 'react';

const Skill = () => {
  const [skills, setSkills] = useState([
    {
      skill: 'TERRAFORM',
      progress: 90,
    },
    {
      skill: 'PYTHON & SHELL SCRIPTING',
      progress: 70,
    },
    {
      skill: 'DOCKER',
      progress: 85,
    },
    {
      skill: 'JENKINS',
      progress: 70,
    },
    {
      skill: 'RENDER',
      progress: 0,
    },
    {
      skill: 'AWS SERVICES',
      progress: 80,
    },
    {
      skill: 'POSTGRESQL, MYSQL, MONGO',
      progress: 70,
    },
    {
      skill: 'KUBERNETES',
      progress: 70,
    },
    {
      skill: 'PULUM',
      progress: 80,
    },
    {
      skill: 'AWS LEX',
      progress: 80,
    },
  ]);

  const [progressValues, setProgressValues] = useState([]);

  useEffect(() => {
    const newProgressValues = skills.map((skill) => 0);
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
      <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="w-1/2 mr-4">
              <p className="text-cyan-800">{skill.skill}</p>
            </div>
            <div className="w-1/2 bg-gray-200 rounded-full h-2">
              <div className="bg-cyan-800 h-2 rounded-full" style={{ width: `${progressValues[index]}%` }} />
            </div>
            <p className="text-cyan-800 ml-4">{skill.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;