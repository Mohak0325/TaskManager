import React from 'react'

function TaskList() {
    return (
        <div id='tasklist' className=' flex gap-5 items-center justify-start flex-nowrap h-[55%] w-full overflow-x-auto py-5 mt-10'>
            <div className='h-full w-[300px] flex-shrink-0 p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a video</h2>
                <p className='text-sm mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate iusto obcaecati quaerat, vel accusamus?  
                </p>
            </div>
            <div className='h-full w-[300px] flex-shrink-0 p-5 bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a video</h2>
                <p className='text-sm mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate iusto obcaecati quaerat, vel accusamus?  
                </p>
            </div>
            <div className='h-full w-[300px] flex-shrink-0 p-5 bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a video</h2>
                <p className='text-sm mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate iusto obcaecati quaerat, vel accusamus?  
                </p>
            </div>
            <div className='h-full w-[300px] flex-shrink-0 p-5 bg-pink-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a video</h2>
                <p className='text-sm mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate iusto obcaecati quaerat, vel accusamus?  
                </p>
            </div>
            <div className='h-full w-[300px] flex-shrink-0 p-5 bg-purple-400 rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                    <h4 className='text-sm'>20 Feb 2024</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>Make a video</h2>
                <p className='text-sm mt-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptate iusto obcaecati quaerat, vel accusamus?  
                </p>
            </div>
          
        </div>
    )
}

export default TaskList
