
import './App.css';
import { useState } from 'react';

function App() {
  

  return (
        <div>
        <Movielist/>
        
       </div>
   );
}



function Movielist() {
  const cinema= [
    {
      name: "The Godfather",
      poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg " ,
      rating: 9.2 ,
      description :`The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.`,
    },

    {
     name: "City of God",
     poster: "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg " ,
     rating: 8.6 ,
     description :`In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.`,
   },

   {
     name: "Django unchained",
     poster: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg " ,
     rating: 8.4 ,
     description :`With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.`,
   },

   {
     name: "Good fellas",
     poster: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg " ,
     rating: 8.7 ,
     description :`The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.`,
   },

   {
     name: "The Departed",
     poster: "https://m.media-amazon.com/images/I/81ZOilPKzYL._SL1500_.jpg " ,
     rating: 8.5 ,
     description :`An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.`,
   },

   {
     name: "The Prestige",
     poster: "https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg " ,
     rating: 8.5 ,
     description :`After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.`,
   },

   
   {
    name: "Virumaandi",
    poster: "https://cdn.shopify.com/s/files/1/1002/7150/products/POS-200_2.jpg?v=1623655942 " ,
    rating: 8.3 ,
    description :`A temperamental farmer gets embroiled in a bloody clan feud in a southern Tamil Nadu village.`,
  },

  
  {
    name: "Hey Ram",
    poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f79f35268e21ec2ac547dd7e18adf08fc76e5d21a1f39ecda8bee89af0e5e9f4._RI_V_TTW_.jpg " ,
    rating: 7.9 ,
    description :`Saketh Ram's wife is raped and killed during direct action day riots in Calcutta. He is convinced that Mahatma Gandhi is responsible for all the problems happening in the country and sets out to kill him.`,
  },

  
  {
    name: "The Dark Knight",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg " ,
    rating: 9.0,
    description :`When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
  },

  ];
  return(
    <div className="movie-list"> 
    {cinema.map((mv,index)=>(
     <Movie
     key={index} 
     name={mv.name} 
     poster={mv.poster} 
     rating={mv.rating} 
     description={mv.description} />
      ))}
      </div>
  )
}



function Counter() {
  const [like,setlike]= useState(0);
  const [dislike,setdislike]= useState(0);
  return(
    <div>
      <button className="btn1" onClick={() => setlike(like+1)}> 👍{like} </button>
      <button className="btn2" onClick={() => setdislike(dislike+1)}> 👎{dislike} </button>
        
    </div>
  )
}


function Movie({name,poster,rating,description}) {
  const[show,setshow]= useState(false);
  const styles={display: show? "block":"none"};
  return (
    
    <div className="movie-container">
      <img className="movie-poster" 
       src={poster}
       alt={name}/>
       
       <div className="movie-details">
       <h1 className="movie-name"> {name} </h1> 
      <p className="movie-rating">⭐{rating}</p>
      </div>
      <button 
       onClick={()=>setshow(!show)}
       className="movie-show-button">
      {show? "Hide":"show"} description</button>
       <p style={styles} className="movie-description"> {description} </p>
      
      
       <Counter/>

    </div>
  );
}
  


export default App;
