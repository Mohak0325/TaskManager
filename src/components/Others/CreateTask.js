import React , {useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {

    const [userData , setUserData] = useContext(AuthContext);

    const [taskData , setTaskData] = useState(
        {
            title:'' ,
            description:'',
            date:'',
            category:'',
            active:false,
            failed:false,
            completed:false,
            newTask:true
        }
    )

    const [assignTo , setAssignTo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const data = userData.employees;

        data.forEach((elem) => {
            if(assignTo === elem.name) {
                elem.tasks.push(taskData);
                elem.taskCount.newTask++;
            }
        });
        
        setUserData({
            ...userData ,
            employees : data
        });
        localStorage.setItem('employees' , JSON.stringify(data))

        setTaskData({
            title:'' ,
            description:'',
            date:'',
            assignTo:'',
            category:'',
        })
        
        setAssignTo('');
    }
    function handleChange(e) {
        setTaskData({
            ...taskData ,
            [e.target.name] : e.target.value
        }) 
    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'> 
                <form
                 onSubmit={handleSubmit}
                 className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                             className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4'
                             type='text' 
                             value={taskData.title}
                             name='title'
                             onChange={handleChange}
                             placeholder='Make a UI Design'></input>
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                             className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4'
                             type='date'
                             value={taskData.date}
                             name='date'
                             onChange={handleChange}
                             />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                            <input 
                             className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4'
                             type='text' 
                             placeholder='Employee Name'
                             value={assignTo}
                             onChange={(e) => {
                                setAssignTo(e.target.value);
                             }}
                             />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input 
                             className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] bg-transparent border-gray-400 mb-4'
                             type='text' 
                             placeholder='Design,Dev etc'
                             value={taskData.category}
                             name='category'
                             onChange={handleChange}
                             />
                        </div>

                       
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                        value={taskData.description}
                        name='description'
                        onChange={handleChange}
                        ></textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>
                </form>
            </div>
    )
}

export default CreateTask;
