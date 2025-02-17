import React , {useState} from 'react'

function Login({handleLogin}) {
    const [formData , setFormData] = useState(
        {
            email:"" ,
            password: ""
        }
    )

    function handleChange(e) {
        setFormData({
            ...formData ,
            [e.target.name] : e.target.value
        }) 
    }
    function handleSubmit(event) {
        event.preventDefault();
        
        handleLogin(formData.email , formData.password);
        setFormData({
            email:'' ,
            password:''
        })
    }
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form
                 onSubmit={handleSubmit}
                 className='flex flex-col items-center justify-center'>
                    <input
                     className='outline-none bg-transparent border-2 border-emerald-600 text-lg py-2 px-6 rounded-full
                     placeholde:text-grey-350 font-medium'
                     type='email'
                     placeholder='Enter Your Email'
                     name='email'
                     value={formData.email}
                     required
                     onChange={handleChange}
                     >
                    </input>
                    <input
                     className='outline-none bg-transparent border-2 border-emerald-600 text-lg py-2 px-6 mt-3 rounded-full placeholde:text-grey-350 font-medium'
                     type='password' 
                     placeholder='Enter Password'
                     name='password'
                     value={formData.password}
                     required
                     onChange={handleChange}
                     >
                    </input>
                    <button
                     className='text-white outline-none border-none hover:bg-emerald-700 font-semibold bg-emerald-600  text-lg py-2 px-8 mt-7 w-full rounded-full cursor-pointer'
                    >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
