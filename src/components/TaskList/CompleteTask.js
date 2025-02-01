import React from 'react'

function CompleteTask({task , data}) {
    return (
        <div className='h-full w-[300px] flex-shrink-0 p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
                <h4 className='text-sm'>{task.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
            <p className='text-sm mt-2'>
                {task.description} 
            </p>
            <div className='mt-2'>
                <button className='w-fullbg-purple-500 rounded font-medium py-1 px-2 text-xs'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask
