import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, createUserWithEmailAndPassword } from "../../../database/firebaseconfig";
import { collection, addDoc, db, doc, } from "../../../database/firebaseconfig";
import { useNavigate } from 'react-router';

const Register = () => {

  let nevigate = useNavigate();

  let schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required("Email is required").email(),
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character."),
  })

  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let credentials = async (data) => {
    console.log(data);
    let getuser = await userRegister(data);

  }

  // Firebase Implementation
  let userRegister = async (usersdata) => {
    try {
      let { name, email, password } = usersdata;
      let userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      console.log(user);

      await adddata({
        name: name,
        email: email,
        uid: user.uid
      })
      nevigate("/Landing");
    }
    catch (error) {
      console.log(error);
    }

    console.log(usersdata)
  }

  let adddata = async (usersdata) => {
    try {
      console.log(usersdata);
      const docRef = await addDoc(collection(db, "credentials"), usersdata);
      console.log("Document written with ID: ", docRef.id);
    }
    catch (error) {
      console.log(error);
    }
  }



  return (
    <div className='flex justify-center items-center bg-amber-300 m-2 p-4 rounded-2xl'>
      <form onSubmit={handleSubmit(credentials)}
        className='flex flex-col rounded-2xl gap-2 m-2 p-4 shadow-lg bg-amber-400 w-90'>
        <h1 className='text-2xl font-bold text-center m-2 p-2'>Register</h1>

        <label htmlFor="name" className='font-bold'>Name</label>
        <input   {...register("name", { required: true })}
          type="text" id="name" placeholder='Enter Your Name' className='p-2 m-2 rounded-2xl bg-white'
        />

        <p className='text-red-600'>{errors.name?.message}</p>



        <label htmlFor="email" className='font-bold'>Email</label>
        <input {...register("email", { required: true })}
          type="email" id="email" placeholder='Enter Your Email' className='p-2 m-2 rounded-2xl bg-white' />

        <p className='text-red-600'>{errors.email?.message}</p>


        <label htmlFor="password" className='font-bold'>Password</label>
        <input {...register("password", { required: true })}
          type="password" id="password" placeholder='Enter Your Password' className='p-2 m-2 rounded-2xl bg-white' />

        <p className='text-red-600'>{errors.password?.message}</p>



        <button className='bg-indigo-500 p-2 m-2 rounded-2xl text-white cursor-pointer'> Register </button>
      </form>
    </div>
  )
}

export default Register
