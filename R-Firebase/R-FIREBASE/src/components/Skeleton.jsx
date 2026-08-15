import React from 'react'

const Skeleton = () => {
  return (
    <div>
      <div className='flex flex-col gap-2 m-2 p-4 rounded-2xl bg-indigo-300 w-72 shadow-md animate-pulse'>
            {/* for Thumbnail */}
            <div className="h-48 bg-gray-300  rounded-md mb-4"></div>

            {/* for title */}
            <div className="h-3 bg-gray-300  rounded w-1/4 mb-2"></div>

            {/* for description */}
            <div className="h-3 bg-gray-300  rounded w-full mb-2"></div>

            {/* for price */}
            <div className="h-3 bg-gray-300  rounded w-5/6"></div>

        </div>
    </div>
  )
}

export default Skeleton
