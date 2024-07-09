import React from 'react';
import { Link } from 'react-router-dom';





function RecommendReview() {

    const ListImg = {
        img: "https://i.namu.wiki/i/ujKCepiZhTfifp6mKkxl22OzteM2rwUrcnHNlZtI_pB-KJfb7q4pD4W2Q_6brVHwODPaBWZbySF7-wpIaTwezo4L4EUgDBbk8b2DYr8evz7IHZmcaKHQ1ajfphk7i6Ag8Ai0Qb-2CGDPdUl1zipDiA.webp",
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
















export default RecommendReview;