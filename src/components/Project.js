import React, { useState } from 'react';
import Slider from 'react-slick';
import img1 from './../assets/Aviator/log-in-1.png'
import img2 from './../assets/Aviator/welcome.png'
import img3 from './../assets/Aviator/game-play.png'
import img4 from './../assets/Aviator/game-play-2.png'
import img5 from './../assets/Aviator/rewards.png'
import img6 from './../assets/Aviator/transaction-history.png'
import att1 from './../assets/attendance/attedance1.jpg'
import att2 from './../assets/attendance/attendance2.jpg'
import att3 from './../assets/attendance/attendance3.jpg'
import att4 from './../assets/attendance/attendance4.jpg'
import att5 from './../assets/attendance/attendance5.jpg'
import att6 from './../assets/attendance/attendance6.jpg'
import att7 from './../assets/attendance/attendance7.jpg'
import att8 from './../assets/attendance/attendance8.jpg'
import att9 from './../assets/attendance/attendance9.jpg'
import att10 from './../assets/attendance/attendance10.jpg'
import ludo1 from './../assets/ludo/ludo1.png'
import ludo2 from './../assets/ludo/ludo2.png'
import crm1 from './../assets/crm/crm1.jpg'
import crm2 from './../assets/crm/crm2.jpg'
import crm3 from './../assets/crm/crm3.jpg'
import crm4 from './../assets/crm/crm4.jpg'
import crm5 from './../assets/crm/crm5.jpg'
import crm6 from './../assets/crm/crm6.jpg'
import crm7 from './../assets/crm/crm7.jpg'
import crm9 from './../assets/crm/crm9.jpg'
import log1 from './../assets/logistic/log1.jpg'
import log2 from './../assets/logistic/log2.jpg'
import log3 from './../assets/logistic/log3.jpg'
import log4 from './../assets/logistic/log4.jpg'
import log5 from './../assets/logistic/log5.jpg'
import log6 from './../assets/logistic/log6.jpg'
import log7 from './../assets/logistic/log7.jpg'
import log8 from './../assets/logistic/log8.jpg'
import Inve from './../assets/Inventory.png'

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const projects = [
    {
      title: 'Aviator Game',
      technology: 'React Native, Node.js',
      images: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6
      ],
    },
    {
      title: 'Attendance Management System App',
      technology: 'React Native, Python, Django',
      images: [
        att1,att4,att2,att3,att5,att6,att7,att8,att9,att10
      ],
    },
    {
      title: 'Ludo Game',
      technology: 'React Js, Node, PostgreSQL, Express',
      images: [ludo1,ludo2],
    },
    {
      title: 'CRM Mobile App',
      technology: 'React Native, Node, Mongo DB, Express',
      images: [crm1,crm2,crm3,crm4,crm5,crm6,crm7,crm9],
    },
    {
      title: 'Logistic Mobile App',
      technology: 'React Native, Node, Mongo DB, Express',
      images: [log1,log2,log3,log4,log5,log6,log7,log8],
    },
    {
      title: 'Inventory Management System',
      technology: 'React Js, Django, Python',
      images: [Inve,Inve],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const openSlider = (project) => {
    setSelectedProject(project);
    setIsSliderOpen(true);
  };

  const closeSlider = () => {
    setIsSliderOpen(false);
    setSelectedProject(null);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      closeSlider();
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[1280px] mx-auto my-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            onClick={() => openSlider(project)}
          >
            <img
              src={project.images[1]}
              alt={`${project.title} Thumbnail`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-800">
              <span className="font-bold">Technology:</span> {project.technology}
            </p>
          </div>
        ))}
      </div>

      {/* Slider Modal */}
      {isSliderOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        >
          <div
            className="bg-white p-4 rounded-lg w-full max-w-md max-h-[100%]"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <Slider {...settings}>
              {selectedProject.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[100%] rounded-lg"
                  />
                </div>
              ))}
            </Slider>
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              onClick={closeSlider}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
