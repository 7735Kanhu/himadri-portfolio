import React from 'react';

function Achievement() {
  return (
    <div className="bg-white p-8 ">
      <h2 className="text-2xl font-bold mb-4 text-center">Achievements</h2>

      <div className="flex items-center flex-col mb-4">
        <div className="flex-shrink-0 mr-4">
          <div className="bg-cyan-800 w-12 h-12 rounded-full flex items-center justify-center text-white">
          <i class="fa-solid fa-computer"></i>
          </div>
        </div>
        <div className='bg-white shadow-xl p-10 space-y-6'>
          <p className="text-gray-800">Participated and Completed the challenges of Google Cloud and won the swags/certificate</p>
          <p className="text-gray-800">Completed the Challenges in 30 days of google cloud</p>
          <p className="text-gray-800">5 star at Hackerrank and 2 star at Leetcode in problem solving in DSA.</p>
        </div>
      </div>
    </div>
  );
}

export default Achievement;