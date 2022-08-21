import React, { useEffect, useState } from "react";
import './design.css';
function UploadImages(){
    const [images, setImages]=useState([]);
    const [imageURLs, setImageURLs]=useState([]);
    useEffect(()=>
    {
        if (images.length<1) return;
        const newImageUrls=[];
        images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    },[images]);
    function onImageChange(e){
        setImages([...e.target.files]);
    }
    return (
        <div>
        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
        {imageURLs.map(imageSrc=><img className="uploadimage" src={imageSrc} alt=""/>)}
        </div>
    );
}
export default UploadImages;