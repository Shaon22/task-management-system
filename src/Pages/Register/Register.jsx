import { useContext, useState } from "react";
import { myContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(myContext)
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate()
    const handleRegister=(event)=>{
event.preventDefault()
const form= event.target;
const name=form.name.value
const email=form.email.value
const password=form.password.value
const photoURL=form.photoURL.value
setRegisterError('')
        if(password.length<6){
            setRegisterError('Password must be 6 character or more...')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Please provide at least one uppercase character in your password')
            return;
        }
        else if(!/[!@#$%^&*]/.test(password)){
            setRegisterError('Please provide at least one special character in your password')
            return;
        }
        
            createUser(email, password)
            .then(result => {
                updateProfile(result.user,{
                    displayName:name,
                    photoURL:photoURL
                })
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='flex mb-28 flex-col lg:flex-row h-screen'>
        <div className='w-[80%] mx-auto lg:w-[50%] mt-16 '>
            <h1 className="text-2xl font-bold text-center text-gray-500 my-5">Register your account</h1>
            <div className='w-full lg:w-[50%] mx-auto '>
                <form onSubmit={handleRegister} className='space-y-5'>
                    <input className='block w-full rounded outline-none border-b-2 focus:border-gray-500 p-2' type="text" name="name" id="" placeholder='Name' required />
                    <input className='block w-full rounded outline-none border-b-2 focus:border-gray-500 p-2' type="email" name="email" id="" placeholder='Email' required />
                    <input className='block w-full rounded outline-none border-b-2 focus:border-gray-500 p-2' type="password" name="password" id="" placeholder='Password' required />
                    <input className='block w-full rounded outline-none border-b-2 focus:border-gray-500 p-2' type="text" name="photoURL" id="" placeholder='Profile Picture URL' required />
                    <button className='btn w-full text-white bg-gray-500 '>Register</button>
                </form>
                </div>
                <h1 className="font-medium text-center mt-3">Do not have account ? <Link className="text-blue-500 font-semibold" to={'/login'}>log In</Link> </h1>
                {
                    registerError && <p className="text-center mt-2 text-red-500">{registerError}</p>
                }
        </div>
        <div className='w-[80%] mx-auto lg:w-[50%] mt-10'>
            <img className="lg:pr-5" src="https://i.ibb.co/4Z4Rmc7/User-Registration-1-7-0-New-Field-Icons-Multi-Part-and-Style-Customizer-Add-ons.png" alt="" />
        </div>

    </div>
    );
};

export default Register;