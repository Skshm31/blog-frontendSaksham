import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar';
import './design.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function More(){
    let [movies, setMovies] = useState([]);
    let [showmovies,setshowmovies]=useState({});
    let [iterator,setiterator]=useState(0);
    const [countPrevDisabled, setCountPrevDisabled] = useState(false);
    const [countNextDisabled, setCountNextDisabled] = useState(false);
    let params=useParams();
    useEffect(()=>{
        getMovies()
        }, [])
    useEffect(()=>{
        if (typeof movies[iterator]!=='undefined'){
            setshowmovies(movies[iterator])
        }
        //setshowmovies(movies[iterator])
       }
    ,[iterator])
    useEffect(()=>{
        for(let i=0;i<movies.length;i++){
            if (movies[i].Title===params.id){
                setshowmovies(movies[i])
                setiterator(i)
            }
        }
    },[movies])
    const getMovies = async () => {
        const moviesData = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=86479a88&s=batman`)
        setMovies(moviesData.data.Search);
    }
    const handlenext=(event)=>{
        if (iterator>=movies.length-1){
            window.alert('No more blogs to show')
            setCountNextDisabled(true);
            event.preventDefault();
            return
        }
        setiterator(iterator+1)
        setCountPrevDisabled(false)
    }
    const handleprev=(event)=>{
        if (iterator<=0){
            window.alert('No more blogs to show')
            setCountPrevDisabled(true);
            event.preventDefault();
            return
        }
        setiterator(iterator-1)
        setCountNextDisabled(false)
        //setMovies(movies[iterator])
    }
return(
    <div className="container-fluid">
          <div className="row">
          <Navbar/>
        </div>
        <div className='row'>
            <div className="col-12">
        <div className="col-3 btn btn-primary btdesign direction" onClick={countPrevDisabled ? () => {} : handleprev}><span className="buttonsize">Previous</span></div>
        <div className="col-3 btn btn-primary btdesign direction2" onClick={countNextDisabled ? () => {} : handlenext}><span className="buttonsize">Next</span></div>         
        </div>
        </div>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10 carddesign">
            <div className="card shadow code2">
                <div className="inner">
                  <img src={showmovies.Poster} alt="" className="card-img-top"/>
                  </div>
                <div className="card-body text-center">
                  <h1 className="card-title">{showmovies.Title}</h1>
                  <p className="card-text">
                    {showmovies.Title}
                  </p>
                  </div>
            </div>
            </div>
            <div className="col-1"></div>
        </div>
        <div className="row">
        <Link to={{pathname:`/blogs`}}><div className="col-3 btn btn-primary btdesign"><span className="buttonsize">Back to list of blogs</span></div></Link>

        </div>
    </div>
)
}
export default More