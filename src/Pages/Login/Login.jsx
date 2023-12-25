import { Link, useNavigate} from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { useContext, useState } from 'react';
import { myContext } from '../../AuthProvider/AuthProvider';


const Login = () => {
    const { signIn, googleLogIn } = useContext(myContext)
    const [loginError, setLoginError] = useState('')
    const Navigate=useNavigate()
    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                form.reset()
                Navigate('/')
            })
            .catch(error => {
                setLoginError('Email or password not matched !')
            })
    }
    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user)
                Navigate('/')

            })
            .catch(error => {
                console.error(error)

            })
    }
    return (
        <div className='flex mb-52  h-screen'>
            <div className='w-[80%] mx-auto lg:w-[50%] mt-16 '>
                <h1 className="text-2xl font-bold text-center text-gray-500 my-5">Log in to your account</h1>
                <div className='w-full lg:w-[50%] mx-auto '>
                    <form onSubmit={handleLogin} className='space-y-10'>
                        <input className='block w-full rounded outline-none border-b-2 focus:border-gray-500 p-2' type="email" name="email" id="" placeholder='Email' />
                        <input className='block w-full rounded outline-none border-b-2 focus:border-gray-500 p-2' type="password" name="password" id="" placeholder='Password' />
                        <button className='btn w-full text-white bg-gray-500 '>Log in <FiLogIn className='text-xl'></FiLogIn></button>
                    </form>
                    < hr className='my-5' />
                    <button onClick={handleGoogle} className='btn w-full text-white bg-gray-500 '>Log in with <FcGoogle className='text-xl'></FcGoogle></button>
                    <h1 className="font-medium text-center mt-3">Do not have account ? <Link className="text-blue-500 font-semibold" to={'/register'}>Register</Link> </h1>
                    {
                        loginError && <p className="text-center mt-2 text-red-500">{loginError}</p>
                    }

                </div>
            </div>
            
        </div>
    );
};

export default Login;