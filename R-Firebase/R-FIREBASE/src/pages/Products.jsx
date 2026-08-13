import React from 'react'
import { useState, useEffect } from 'react'
import { collection, addDoc, db, getDocs, doc } from "../database/firebaseconfig";
import axios from 'axios';
import Itemcard from '../components/Itemcard';

const Products = () => {
    let [products, setProducts] = useState("");
    let [description, setDescription] = useState("");
    let [price, setPrice] = useState("");
    let [img, setImg] = useState("");
    let [getdata, setGetdata] = useState([]);

    let addproducts = async () => {
        try {

            const cloudinary_image = await axios.post("https://api.cloudinary.com/v1_1/uypx9ksr/image/upload", {
                file: img,
                upload_preset: "ml_default"
            })
            let image = cloudinary_image.data.url
            console.log("Successfully get image", image);


            const docRef = await addDoc(collection(db, "products"), {
                producttitle: products,
                Description: description,
                Price: price,
                imageurl: image
            });
            console.log("Document written with ID: ", docRef.id);
        }
        catch (error) {
            console.log(error);
        }
    }


    let getProducts = async () =>{
        try{
            let dataarr = [];
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                dataarr = [...dataarr, {...doc.data(), id: doc.id}];
                setGetdata([...dataarr]);
                console.log(dataarr);
            });
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        // addproducts();
        getProducts();
    }, []);

    return (
        <>
        <div className='flex flex-wrap border-2 bg-amber-300 rounded-2xl m-2 p-2'>
            <input type="text" placeholder='Add Product' className='border-2 rounded-2xl m-2 p-2 bg-white cursor-pointer'
                onChange={(e) => { setProducts(e.target.value) }} />
            <input type="text" placeholder='Add Description' className='border-2 rounded-2xl m-2 p-2 bg-white cursor-pointer'
                onChange={(e) => { setDescription(e.target.value) }} />
            <input type="text" placeholder='Add Price' className='border-2 rounded-2xl m-2 p-2 bg-white cursor-pointer'
                onChange={(e) => { setPrice(e.target.value) }} />
            <input type="file" placeholder='Add Image' className='border-2 rounded-2xl m-2 p-2 bg-white cursor-pointer'
                onChange={(e) => {
                    let file = e.target.files[0];
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        setImg(reader.result);
                    }
                }} />
            <button className='border-2 rounded-2xl m-2 p-2 bg-white' onClick={addproducts}>Add</button>
        </div>
        <div className='flex flex-wrap justify-center items-center rounded-2xl m-2 p-2  bg-indigo-500'>
                {
                    (getdata.length > 0) && (
                        getdata.map((data, index) => {
                            return(
                                <div key={index}>
                                    <Itemcard 
                                    id = {data.id}
                                    producttitle = {data.producttitle}
                                    Description = {data.Description}
                                    Price = {data.Price}
                                    imageurl = {data.imageurl}
                                    />
                                </div>
                            )
                        
                    }))

                }
        </div>
        </>
    )
}

export default Products
