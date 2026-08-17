import React from 'react'
import { useState, useEffect } from 'react'
import { collection, addDoc, db, getDocs, doc, updateDoc, deleteDoc } from "../database/firebaseconfig";
import axios from 'axios';
import Itemcard from '../components/Itemcard';
import Skeleton from '../components/Skeleton';
import Addprodmodal from '../components/Addprodmodal';

const Products = () => {
    let [openmodal, setOpenmodal] = useState(false);
    let [getdata, setGetdata] = useState([]);
    let [loading, setLoading] = useState(false);
    let [editid, setEditid] = useState("");

    


    let getProducts = async () => {
        try {
            setLoading(true);
            let dataarr = [];
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                dataarr = [...dataarr, { ...doc.data(), id: doc.id }];
                setGetdata([...dataarr]);
                console.log(dataarr);
            });
        }
        catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    let editdata = async (id) => {
        console.log(id);
        
        let currentdata = getdata.find((data) => data.id == id)
        if(currentdata){
            setEditid(currentdata);
            setOpenmodal(true);
        
        }
    }

    let deleteproduct = async (id) => {
        try {
            await deleteDoc(doc(db, "products", id));
            await getProducts();
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // addproducts();
        getProducts();
    }, []);


    return (
        <>
            <div className='flex justify-between items-center m-2 p-4 rounded-2xl border-2 bg-indigo-300'>
                <h1>Products</h1>
                <button onClick={() => setOpenmodal(true)} className='p-2 bg-amber-200 hover:bg-amber-300 rounded-2xl shadow-md'>+ Add Product</button>
            </div>
            {
                (openmodal) && (<Addprodmodal
                    close={() => setOpenmodal(false)}
                    refresh={getProducts}
                    editdata={editid} />)
            }
            {
                (loading) ?
                    <div className='flex flex-wrap justify-center items-center rounded-2xl m-2 p-2 bg-indigo-500'>
                        {[...Array(3)].map((index) => (
                            <Skeleton key={index} />
                        ))}

                    </div>
                    :
                    <div className='flex flex-wrap justify-center items-center rounded-2xl m-2 p-2  bg-indigo-500'>
                        {
                            (getdata.length > 0) && (
                                getdata.map((data, index) => {
                                    return (
                                        <div key={index}>
                                            <Itemcard
                                                id={data.id}
                                                producttitle={data.producttitle}
                                                Description={data.Description}
                                                Price={data.Price}
                                                imageurl={data.imageurl}
                                                onEdit={editdata}
                                                deleteproduct={deleteproduct}
                                            />
                                        </div>
                                    )

                                }))

                        }
                    </div>
            }
        </>
    )
}

export default Products
