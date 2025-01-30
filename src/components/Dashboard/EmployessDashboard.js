import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployessDashboard({loggedInData , changeUser}) {
    return (
        <>
         <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header data={loggedInData} changeUser={changeUser}/>
            <TaskListNumber data={loggedInData}/>
            <TaskList data={loggedInData}/>
         </div>
        </>
    )
}

export default EmployessDashboard
