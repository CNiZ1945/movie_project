import React from 'react';
import { Link } from 'react-router-dom';





function RecommendStar() {

    const ListImg = {
        img: "https://i.namu.wiki/i/lXB7PuzOZOHy06yKy9vN5ZksQloiZTp2Pq0qmq7snAB2vTA7dsXAwIAMCEAnXYKKYV6liOe1vZjyJtElv60SSrqeYYGMfNpZS3p7UjzFphFeWiUOYgPU3qN7RVwLFB4DaZW3KvGf9J4WWq5foV8f1Q.webp",
    }


    return (

        <>

            <div className="movie_img">
                <ul className="movie_list">
                <li className="movie_list_poster" ><Link to="/user/MoviePage"><img src={ListImg.img} alt="" className='MainMoviePoster' /></Link></li>
                <li className="movie_list_poster" ><Link to="/user/MoviePage"><img src={ListImg.img} alt="" className='MainMoviePoster' /></Link></li>
                <li className="movie_list_poster" ><Link to="/user/MoviePage"><img src={ListImg.img} alt="" className='MainMoviePoster' /></Link></li>
                <li className="movie_list_poster" ><Link to="/user/MoviePage"><img src={ListImg.img} alt="" className='MainMoviePoster' /></Link></li>
                <li className="movie_list_poster" ><Link to="/user/MoviePage"><img src={ListImg.img} alt="" className='MainMoviePoster' /></Link></li>
                </ul>

            </div>


        </>



    );



}
















export default RecommendStar;