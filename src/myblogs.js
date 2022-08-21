import {useState,useEffect} from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom"
import './design.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
function Myblogs() {
    let [movies, setMovies] = useState([]);
    const [search,setSearch]=useState("");
    let inputHandler = (e) => {
    //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setSearch(lowerCase);
    };
    useEffect(() => {
        getMovies()
        }, [])
    const getMovies = async () => {
        const moviesData = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=86479a88&s=batman`)
        setMovies(moviesData.data.Search);
    }
    function handleDelete(event , title){
         setMovies((prevblog)=>{
            return  prevblog.filter((blog)=>{
              if(blog.Title !== title){
               return blog;
            }
            return false
             })
           });        
    } 
    // function handledit(event,title,description){
    //   console.log(title)
    //   console.log(description)
      
    // }     
    const filteredData = movies.filter((el) => {
        //if no input the return the original
        if (search === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.Title.toLowerCase().includes(search)
        }
    })
    return (
        <div className="container-fluid">
          <div className="row">
            <Navbar/>
          </div>
        <div className="container-fluid">
        <div className="row"><label className="searchfield"> 
          <input value={search} onChange={inputHandler} placeholder="search the blog"></input>
        </label></div>
        </div>
            <div className="moviedisplay">
            {
              filteredData.map(movie => {return (<div className="col-4 carddesign"><div className="card shadow code2">
                <div className="inner">
                  <img src={movie.Poster} alt=""className="card-img-top"/>
                  </div>
                <div className="card-body text-center design">
                  <h3 className="card-title">{movie.Title}</h3>
                  <p className="card-text">
                    description
                  </p>
                  <Link to={{pathname:`/blogs/myblogs/edit/${movie.Title}`}}><div className="col-3 btn btn-primary btdesign"><span className="buttonsize">Edit Details...</span></div></Link>
                  <Link to={{pathname:`/blogs/${movie.Title}/moredetails`}}><div className="col-3 btn btn-primary btdesign" ><span className="buttonsize">More Details...</span></div></Link>
                  <div className="col-3 btn btn-primary btdesign" onClick={event => handleDelete(event,movie.Title)}><span className="buttonsize">Delete Details...</span></div>
                </div>
            </div></div>)})
            }</div>
            </div>
      )
}

export default Myblogs