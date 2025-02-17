import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import Failed from './Failed'

function TaskList({data}) {
    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem , index) => {

                if(elem.active) {
                    return <AcceptTask key={index} task={elem} data={data}/>
                }
                if(elem.newTask) {
                    return <NewTask key={index} task={elem} data={data}/>
                }
                if(elem.completed) {
                    return <CompleteTask key={index} task={elem} data={data}/>
                }
                if(elem.failed) {
                    return <Failed key={index} task={elem} data={data}/>
                }
            })}
        </div>
    )
}

export default TaskList

