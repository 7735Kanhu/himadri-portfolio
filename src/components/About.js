import React from 'react';

function About() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-[1280px] mx-auto my-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
        <div>
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <ul className=' list-disc'>
            <li class="text-gray-800">DevOps Engineer with 3+ years of experience</li>
            <li class="text-gray-800">Worked with Software Development Life Cycle (SDLC) and agile methodologies</li>
            <li class="text-gray-800">Expertise in Terraform and Configuration files</li>
            <li class="text-gray-800">Also worked with JavaScript, Angular and UI with Responsive Designs</li>
            <li class="text-gray-800">Have good understanding of programming languages like Python, Java, JavaScript and worked on databases like Postgresql, MySQL, MongoDB etc</li>
            <li class="text-gray-800">Knowledge of various software design principles and patterns</li>
            <li class="text-gray-800">Have used various cloud computing services with AWS</li>
            <li class="text-gray-800">Used various tools like Docker, Github, Jenkins etc</li>
            </ul>
            <p className="text-gray-800 mt-4">Results-driven DevOps Engineer with a proven track record of 3 years in supporting, automating, and optimizing mission-critical deployments on AWS. Proficient in leveraging advanced configuration management, CI/CD practices, Terraform, and a strong understanding of DevOps methodologies. Seeking a challenging position where I can contribute my expertise, drive innovation, and adapt to evolving technologies while fostering professional growth.</p>
        </div>

        <div className=" border-gray-300 pl-4">
          <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
          <p className="text-gray-800"><span className='font-bold'>DATE OF BIRTH:</span> February 02, 1999</p>
          <p className="text-gray-800"><span className='font-bold'>EMAIL:</span> mayank2299@gmail.com</p>
          <p className="text-gray-800"><span className='font-bold'>PHONE:</span> +91 9873824766</p>
          <p className="text-gray-800"><span className='font-bold'>ADDRESS:</span> Faridabad, India</p>
          <p className="text-gray-800"><span className='font-bold'>LANGUAGE:</span> Hindi, English, Punjabi</p>
        </div>
      </div>

    </div>
  );
}

export default About;