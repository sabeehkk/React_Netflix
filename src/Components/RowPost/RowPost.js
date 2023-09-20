import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'
function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId]=useState('')
    
    useEffect(()=>{
        axios.get(props.url).then((Response)=>{
            console.log(Response.data)
            setMovies(Response.data.results)
        }).catch(err=>{
            alert('network error is occured')
        })
    },  [] )
    const opts= {
        height: '390',
        width:  '100%',
        playerVars: {
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            // console.log(Response.data);
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])

            }else{
                console.log('length empty');
            }
        }).catch((error)=>{
          if(error.response && error.response.status===404){
            console.log('404 error :resourse not found');
          }else{
            console.log('An error is occured:',error);
          }
        })
            // console.log(urlId);
      }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
          <div className='posters '>
            {movies.map((obj)=>
             <div key={obj.id} className='poster-container'>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
            <div className='poster-title'>{obj.title}</div>
            </div>
            )}
          
          </div>
        { urlId && <Youtube opts={opts} videoId={urlId.key}/>} 
    </div>
  )
}

export default RowPost

