import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function NewTask({task , data}) {
    const [userData , setUserData] = useContext(AuthContext);

    function handleAcceptTask() {
        
        const employeeData = userData.employees;
        Array.isArray(employeeData) && employeeData.forEach((elem) => {
            if(data.name === elem.name) {
                if(elem.taskCount.newTask > 0){
                    elem.taskCount.newTask--;
                    elem.taskCount.active++;
                }
                elem.tasks.forEach((list) => {
                    if(list.title === task.title) {
                        list.active = true;
                        list.newTask = false;
                    }
                });
            }
            setUserData({
                ...userData ,
                employees : employeeData
            });
            localStorage.setItem('employees' , JSON.stringify(employeeData));
        });
    }
    return (
        <div className='flex-shrink-0 h-full w-[300px] flex-shrink-0 p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
                <h4 className='text-sm'>{task.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
            <p className='text-sm mt-2'>
                {task.description}  
            </p>
            <div className='mt-6'>
                <button 
                onClick={handleAcceptTask}
                className='w-full bg-green-500 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>   
    )
}

export default NewTask
