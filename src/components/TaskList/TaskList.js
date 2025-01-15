import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import Failed from './Failed'

function TaskList({data}) {
    return (
        <div id='tasklist' className=' flex gap-5 items-center justify-start flex-nowrap h-[55%] w-full overflow-x-auto py-5 mt-10'>
            {data.tasks.map((elem , index) => {

                if(elem.active) {
                    return <AcceptTask key={index}/>
                }
                if(elem.newTask) {
                    return <NewTask key={index}/>
                }
                if(elem.completed) {
                    return <CompleteTask key={index}/>
                }
                if(elem.failed) {
                    return <Failed key={index}/>
                }
            })}
        </div>
    )
}

export default TaskList
