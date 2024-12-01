import React from 'react';

function WorkExperience() {
  return (
    <div className="bg-gray-200 w-full md:w-[1280px] mx-auto p-8 rounded-lg shadow-md my-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Work Experience</h2>
      
      <ul className="list-disc px-8 space-y-6">
        <li>
          <h3 className="text-xl font-bold text-gray-800">Human Resource Management System</h3>
          <p className="text-gray-700">ABACUS SYSTEM & SOLUTION (P) LTD, Bhubaneswar (05/2019 – 08/2019)</p>
          <p className="text-gray-600">Developed a comprehensive HR management system to streamline employee management and automate administrative tasks.</p>
        </li>

        <li>
          <h3 className="text-xl font-bold text-gray-800">Food Ordering App</h3>
          <p className="text-gray-700">Live Project using React.js & React Native</p>
          <p className="text-gray-600">
            Project Link: <a href="https://pickup.ninja" className="text-blue-500 underline">https://pickup.ninja</a>
          </p>
          <p className="text-gray-600">Built a live food ordering platform with an intuitive user interface for web and mobile users.</p>
        </li>

        <li>
          <h3 className="text-xl font-bold text-gray-800">IoT Dashboard</h3>
          <p className="text-gray-700">React.js & Python</p>
          <p className="text-gray-600">Created a dashboard to control machines and visualize real-time machine and water data.</p>
        </li>

        <li>
          <h3 className="text-xl font-bold text-gray-800">Attendance Management System App</h3>
          <p className="text-gray-700">React Native Mobile Application</p>
          <p className="text-gray-600">Developed a mobile app for managing and tracking employee attendance efficiently.</p>
        </li>

        <li>
          <h3 className="text-xl font-bold text-gray-800">Ludo Game</h3>
          <p className="text-gray-700">React.js Web Application</p>
          <p className="text-gray-600">Implemented a web-based Ludo game with an engaging user interface.</p>
        </li>

        <li>
          <h3 className="text-xl font-bold text-gray-800">Aviator Game</h3>
          <p className="text-gray-700">React.js & React Native</p>
          <p className="text-gray-600">Developed a gaming application for web and mobile platforms with interactive features.</p>
        </li>

        <li>
          <h3 className="text-xl font-bold text-gray-800">CRM App</h3>
          <p className="text-gray-700">React Native Mobile Application</p>
          <p className="text-gray-600">Built a CRM mobile app to streamline customer relationship management processes.</p>
        </li>

        <li>
          <h3 className="text-xl font-bold text-gray-800">Logistic App</h3>
          <p className="text-gray-700">React Native Mobile Application</p>
          <p className="text-gray-600">Designed a mobile application to optimize logistics operations and tracking.</p>
        </li>

        <li>
          <h3 className="text-xl font-bold text-gray-800">P2 Civil Material Supplier</h3>
          <p className="text-gray-700">Live Project using React.js</p>
          <p className="text-gray-600">
            Project Link: <a href="https://p2civilmaterial.netlify.app" className="text-blue-500 underline">https://p2civilmaterial.netlify.app</a>
          </p>
          <p className="text-gray-600">Developed a fully responsive landing page for desktop and mobile users.</p>
        </li>
      </ul>
    </div>
  );
}

export default WorkExperience;
