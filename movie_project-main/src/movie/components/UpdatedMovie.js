import React from 'react';
import { Link } from 'react-router-dom';





function UpdatedMovie() {

    const ListImg = {
        img: "https://img7.yna.co.kr/etc/inner/KR/2017/05/03/AKR20170503021500005_01_i_P2.jpg",
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
















export default UpdatedMovie;