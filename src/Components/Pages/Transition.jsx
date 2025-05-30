import React from 'react'

const Transition = () => {
  return (
    <>
    <div className="max-w-sm p-6 bg-white rounded-2xl shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl">
  <h3 className="text-xl font-semibold text-gray-800 mb-2">Restaurant Name</h3>
  <p className="text-gray-600 mb-4">Delicious meals delivered fast at your doorstep.</p>
  <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
    View More
  </button>
</div>
    </>
  )
}

export default Transition