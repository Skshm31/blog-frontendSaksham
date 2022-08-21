import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';
import { Link, useParams } from "react-router-dom";
import Navbar from './navbar';
import axios from 'axios'
function Edit(){
    let [movies, setMovies] = useState([]);
    let editmovie={};
    useEffect(() => {
        getMovies()
        }, [])
    const getMovies = async () => {
        const moviesData = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=86479a88&s=batman`)
        setMovies(moviesData.data.Search);
    }
    let params=useParams()
    for(let i=0;i<movies.length;i++){
        if (movies[i].Title===params.id){
            editmovie=movies[i]
        }
    }
    
    const [title,changetitle]=useState('')
    const [summarydata,changesummarydata]=useState('')
    const [images, setImages]=useState([]);
    const [imageURLs, setImageURLs]=useState([]);
    const [description,changedescription]=useState('')
    const titlechange=(event)=>{
        changetitle(event.target.value)
    }
    const summarychange=(event)=>{
        changesummarydata(event.target.value)
    }
    const addsubmit=(event)=>{
        changetitle('')
        changesummarydata('')
        setImages('')
        setImageURLs('')
        window.alert('Blog edited successfully')
    }
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
    return(<div className="container-fluid">
            <div className="row bg">
                <Navbar />
                <div className="col-10">
                    <h1 className="text-center">Edit Blog</h1>
                    
                <form>
                    <div className="container-fluid">
                    <div className="row">
                        <span>Title of the Blog</span>
                      </div>
                      <div className="row">
                        <textarea value={title} onChange={titlechange}  maxLength={1000} placeholder={editmovie.Title}></textarea></div>
                        <div className="row">
                        <span>The description of the blog</span>
                      </div>
                      <div className="row">
                        <textarea value={description} onChange={(event)=>{changedescription(event.target.value)}} placeholder={editmovie.Title} maxLength={1000}></textarea></div>
                    <div className="row">
                        <span>Body of the blog</span>
                      </div>
                      <div className="row">
                        <textarea value={summarydata} onChange={summarychange}rows="15" placeholder={editmovie.Title}></textarea>
                        </div>
                        <div className="row">
                        <span>URL for the image of the Blog</span>
                      </div>
                      <div className="row">
                        <textarea value={description} onChange={(event)=>{changedescription(event.target.value)}} placeholder={editmovie.Title} maxLength={1000}></textarea></div>
                        <div className="row">    
                        <Link to={{pathname:'/blogs'}}><button onClick={addsubmit}>Submit</button></Link></div>
                        <div class="row">
                        <span>Upload Image: </span>
                        <div>
                         <input type="file" multiple accept="image/*" onChange={onImageChange}/>
                        {imageURLs.map(imageSrc=><img className="uploadimage" src={imageSrc} alt=""/>)}
                    </div>
                        </div>
                        </div>
                  </form>
                </div>
            </div>
        </div>)
}
export default Edit;
