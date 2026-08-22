import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from "../../../database/firebaseconfig";
import { useNavigate } from 'react-router';

const Login = () => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("User is signed in:", user);
            nevigate("/Landing");
        }
    });

    let nevigate = useNavigate();

    let loginschema = yup.object({
        email: yup.string().required( "Email is required").email(),
        password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ,"Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character."),
    })

    let {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginschema),
    })

    let logincredientials = async (data) => {
        let existuser = await userlogin(data);
        console.log(data);

    }

    let userlogin = async (userdata) => {
        try {
            let { email, password } = userdata;
            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                }) 
                nevigate("/Landing");
        }
        catch (error) {
        console.log(error);
    }
}

return (
    <div className='flex justify-center items-center bg-amber-300 m-2 p-4 rounded-2xl'>
        <form onSubmit={handleSubmit(logincredientials)}
            className='flex flex-col rounded-2xl gap-2 m-2 p-4 shadow-lg bg-amber-400 w-90'>
            <h1 className='text-2xl font-bold text-center m-2 p-2'>Login</h1>

            {/* <label htmlfor="name" className='font-bold'>Name</label>
                <input type="text" id="name" placeholder='Enter Your Name' className='p-2 m-2 rounded-2xl bg-white' /> */}

            <label htmlFor="email" className='font-bold'>Email</label>
            <input {...register("email")}
                type="email" id="email" placeholder='Enter Your Email' className='p-2 m-2 rounded-2xl bg-white' />

            <p className='text-red-600'>{errors.email?.message}</p>

            <label htmlFor="password" className='font-bold'>Password</label>
            <input {...register("password")}
                type="password" id="password" placeholder='Enter Your Password' className='p-2 m-2 rounded-2xl bg-white' />

            <p className='text-red-600'>{errors.password?.message}</p>  

            <button className='bg-indigo-500 p-2 m-2 rounded-2xl text-white cursor-pointer'> Login </button>
        </form>
    </div>
)
}

export default Login
