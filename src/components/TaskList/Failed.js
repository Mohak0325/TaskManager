import React from 'react'

function Failed() {
    return (
        <div className='h-full w-[300px] flex-shrink-0 p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate iusto obcaecati quaerat, vel accusamus?  
            </p>
            <div className='mt-2'>
                <button className='w-full'>Failed</button>
            </div>
        </div>
    )
}

export default Failed
