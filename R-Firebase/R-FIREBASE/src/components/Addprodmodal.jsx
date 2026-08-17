import React, { useEffect } from 'react'
import { useState } from 'react'
import { collection, addDoc, db, getDocs, doc, updateDoc } from "../database/firebaseconfig";
import axios from 'axios';

const Addprodmodal = ({close, refresh, editdata}) => {
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");
    let [price, setPrice] = useState("");
    let [img, setImg] = useState("");

    useEffect(()=>{
        if (editdata) {
            setTitle(editdata.producttitle  || "");
            setDescription(editdata.Description || "");
            setPrice(editdata.Price || "");
            setImg(editdata.imageurl || "");
        }
    },[editdata])

    let Updatedata = async () =>{
        try{
            const docRef = doc(db, "products", editdata.id);
            await updateDoc(docRef, {
                producttitle: title,
                Description: description,
                Price: price
            });
            close();
            refresh();
        }
        catch(error){
            console.error("Error updating document: ", error);
        }
    }

    let addproducts = async () => {
        try {

            const cloudinary_image = await axios.post("https://api.cloudinary.com/v1_1/uypx9ksr/image/upload", {
                file: img,
                upload_preset: "ml_default"
            })
            let image = cloudinary_image.data.url
            console.log("Successfully get image", image);


            const docRef = await addDoc(collection(db, "products"), {
                producttitle: title,
                Description: description,
                Price: price,
                imageurl: image
            });
            console.log("Document written with ID: ", docRef.id);

            close();
            refresh();


        }
        catch (error) {
            console.log(error);
        }
    }







    return (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center m-2 rounded-2xl items-center z-50 transition-opacity duration-300'>
        <div className='flex flex-col border-2 bg-amber-300 rounded-2xl p-4 w-full max-w-md shadow-2xl transform transition-all duration-300 scale-100'>
            <input type="text" placeholder='Add Product' className='border-2 rounded-2xl m-1 p-2 bg-white cursor-pointer'
                onChange={(e) => { setTitle(e.target.value) }} value={title}/>
            <input type="text" placeholder='Add Description' className='border-2 rounded-2xl m-1 p-2 bg-white cursor-pointer'
                onChange={(e) => { setDescription(e.target.value) }} value={description} />
            <input type="text" placeholder='Add Price' className='border-2 rounded-2xl m-1 p-2 bg-white cursor-pointer'
                onChange={(e) => { setPrice(e.target.value) }} value={price} />
            <input type="file" placeholder='Add Image' className='border-2 rounded-2xl m-1 p-2 bg-white cursor-pointer'
                onChange={(e) => {
                    let file = e.target.files[0];
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                        setImg(reader.result);
                    }
                }}/>
            <button className='border-2 rounded-2xl m-2 px-4 bg-indigo-300 hover:bg-indigo-500' onClick={editdata ? Updatedata : addproducts}>Submit</button>
            <button className='border-2 rounded-2xl m-2 px-4 bg-indigo-300 hover:bg-indigo-500' onClick={close}>Close</button>

        </div>
        </div>
    )
}

export default Addprodmodal
