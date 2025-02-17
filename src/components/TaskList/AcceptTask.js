import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';


function AcceptTask({task , data}) {

    const [userData , setUserData] = useContext(AuthContext);
    const employeeData = userData.employees;

    function handleCompleteTask() {
        Array.isArray(employeeData) && employeeData.forEach((elem) => {
            if(data.name === elem.name) {
                if(elem.taskCount.active > 0) {
                    elem.taskCount.active--;
                    elem.taskCount.completed++;
                }
                elem.tasks.forEach((list) => {
                    if(list.title === task.title) {
                        list.active = false;
                        list.completed = true;
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
    function handleFailedTask() {
        Array.isArray(employeeData) && employeeData.forEach((elem) => {
            if(data.name === elem.name) {
                if(elem.taskCount.active > 0){
                    elem.taskCount.active--;
                    elem.taskCount.failed++;
                }
                elem.tasks.forEach((list) => {
                    if(list.title === task.title) {
                        list.active = false;
                        list.failed = true;
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
        <div className='flex-shrink-0 h-full w-[300px] flex-shrink-0 p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category}</h3>
                <h4 className='text-sm'>{task.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{task.title}</h2>
            <p className='text-sm mt-2'>{task.description} 
            </p>
            <div className='flex justify-between mt-4'>
                <button 
                 onClick={handleCompleteTask}
                 className='bg-blue-500 text-sm py-1 px-2'>Mark as Comleted</button>
                <button
                 onClick={handleFailedTask}
                 className='bg-yellow-500 text-sm py-1 px-2'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask
