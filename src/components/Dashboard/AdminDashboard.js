import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

function AdminDashboard({loggedInData , changeUser}) {
    return (
        <div className='h-screen w-full px-10 py-4'>
            <Header data={loggedInData} changeUser={changeUser}/>
            <CreateTask/>
            <AllTask/>
            
        </div>
    )
}

export default AdminDashboard
