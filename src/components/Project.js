import React from 'react';

const Project = () => {
  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[1280px] mx-auto my-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Project 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img src="https://www.mayankdevops.com/assets/images/terraform.png" alt="Terraform Logo" className="w-full h-48 object-cover rounded-t-lg" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Terraform-aws-s3 Module</h3>
          <p className="text-gray-800"><span className='font-bold'>Technology:</span> Terraform and github Actions</p>
          <div className="flex mt-4">
            <button className="bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-4 mr-2 text-sm">Live Demo</button>
            <button className="bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-4 text-sm">Github Link</button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://www.mayankdevops.com/assets/images/birthday.jpeg" alt="Birthday Cake" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-lg font-semibold mb-2">Birthday Application</h3>
          <p className="text-gray-800"><span className='font-bold'>Technology:</span> HTML AND CSS</p>
          <div className="flex mt-4">
            <button className="bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-4 mr-2 text-sm">Live Demo</button>
            <button className="bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-4 text-sm">Github Link</button>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://www.mayankdevops.com/assets/images/gif.gif" alt="Loading Spinner" className="w-full h-48 object-cover rounded-t-lg" />
          <h3 className="text-lg font-semibold mb-2">CRUD operation using PEAN stack</h3>
          <p className="text-gray-800"><span className='font-bold'>Technology: </span>Angular 10, Node, PostgreSQL, Express</p>
          <div className="flex mt-4">
          <button className="bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-4 mr-2 text-sm">Live Demo</button>
          <button className="bg-cyan-800 hover:bg-cyan-700 text-white py-2 px-4 text-sm">Github Link</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2">Previous</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">1</button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4">Next</button>
      </div>
    </div>
  );
};

export default Project;