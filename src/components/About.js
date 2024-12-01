import React from 'react';

function About() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full md:w-[1280px] mx-auto my-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
      <div>
    <h2 className="text-2xl font-bold mb-4">About</h2>
    <ul className="list-disc">
        <li class="text-gray-800">Full Stack Developer with expertise in modern web and mobile app technologies with 2.4 years of experience.</li>
        <li class="text-gray-800">Proficient in frontend development with HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Angular, and Next.js.</li>
        <li class="text-gray-800">Skilled in backend development using Node.js, Express.js, Django, and Python.</li>
        <li class="text-gray-800">Experience in database management with MySQL and SQLite and Mongo DB.</li>
        <li class="text-gray-800">Strong capabilities in mobile app development using React Native.</li>
        <li class="text-gray-800">Hands-on experience with version control systems like GitHub and deploying projects using modern practices.</li>
        <li class="text-gray-800">Knowledgeable in creating responsive and user-centric designs, adhering to software design principles and patterns.</li>
        <li class="text-gray-800">Adaptable to agile methodologies and committed to continuous learning and problem-solving.</li>
    </ul>
    <p className="text-gray-800 mt-4">
        Passionate about building scalable and innovative solutions that bridge design and functionality. 
        Seeking opportunities to leverage my expertise and contribute to impactful projects, driving innovation 
        and fostering growth in the tech landscape.
    </p>
</div>

        <div className=" border-gray-300 pl-4">
          <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
          <p className="text-gray-800"><span className='font-bold'>DATE OF BIRTH:</span> May 25, 1996</p>
          <p className="text-gray-800"><span className='font-bold'>EMAIL:</span> kanhu2551996@gmail.com</p>
          <p className="text-gray-800"><span className='font-bold'>PHONE:</span> +91 7735432994</p>
          <p className="text-gray-800"><span className='font-bold'>ADDRESS:</span> Bhubaneswar, India</p>
          <p className="text-gray-800"><span className='font-bold'>LANGUAGE:</span> Hindi, English, Odia</p>
        </div>
      </div>

    </div>
  );
}

export default About;