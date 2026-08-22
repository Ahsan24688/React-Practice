import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router'
import img from '../image/storepic.png'
import { auth, deleteDoc, signOut, deleteUser,doc,db, query, where, getDocs, collection } from '../database/firebaseconfig'
import { useNavigate } from 'react-router'

const Landing = () => {
  let nevigate = useNavigate();
  let usersignout = async () => {
    try{
      await signOut(auth);
      console.log("User signed out successfully");
      nevigate("/Login");
    }
    catch(error){
      console.log(error);
    }
  }

  let deleteaccount = async () =>{
    try{
      const user = auth.currentUser;
      if(user){
        const uid = user.uid;

        const q = query (collection(db, "credentials"), where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach( async (docitem) => {
          await deleteDoc(doc(db, "credentials", docitem.id));
        })
        await deleteUser(user);
        console.log("User deleted successfully");
        nevigate("/");
      }
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <>
      <Navbar Signout={usersignout} Delete={deleteaccount}/>
      <div className='bg-indigo-500 rounded-2xl m-4 p-10 flex justify-between'>
        <div className='flex flex-col gap-4 justify-start  m-8 w-1/2'>
          <h1 className='text-2xl text-white font-bold'>Welcome to Urban Unique Store 🛍️</h1>
          <p className='text-1xl text-white font-bold'>Discover the latest and unique products handpicked just for you. Quality and style delivered to your doorstep..</p>
          <h3 className='text-xl text-white font-bold mt-4'>Best Deals Everyday</h3>
          <p className='text-sm  text-white mt-1'>Up to 50% off on new arrivals</p>
          <Link to="/Products" className='bg-amber-200 p-3 rounded-2xl hover:bg-amber-300 w:md-w-1/2'>Explore Products</Link>
        </div>
        <div className='flex gap-4 justify-center items-center m-8 w-1/2'>
          <img src={img} alt="img" className='rounded-2xl' />
        </div>
      </div>
      <div className='bg-indigo-500 m-8 p-10 flex flex-col justify-center rounded-2xl'>
        <h2 className='text-2xl text-white font-bold m-4 text-center'>Why Shop With Us</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center'>
            <div className='text-3xl mb-2'>🚚</div>
            <h3 className='font-bold text-lg mb-1'>Fast Delivery</h3>
            <p className='text-sm text-slate-600'>Get your orders delivered quickly right at your home.</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center'>
            <div className='text-3xl mb-2'>⭐</div>
            <h3 className='font-bold text-lg mb-1'>Best Quality</h3>
            <p className='text-sm text-slate-600'>100% verified products with top-notch quality standards.</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center'>
            <div className='text-3xl mb-2'>💬</div>
            <h3 className='font-bold text-lg mb-1'>24/7 Support</h3>
            <p className='text-sm text-slate-600'>We are always here to help you with your queries.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
