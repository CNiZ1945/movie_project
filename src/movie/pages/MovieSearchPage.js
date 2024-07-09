import React from 'react';
import { Link } from 'react-router-dom';




function MovieSearch() {













    return (
        <>
            <div className="search_result">
                <span>&#123;반지의 제왕&#125; 검색 결과</span>
            </div>
            {/* <!-- 검색 결과 영화 --> */}
            <div className="result_movie">
                <Link to="/user/MoviePage">
                    <figure className="movie_figure">
                        <img src="img/dune.jpg" alt="" />
                        <figcaption>&#123;반지의 제왕&#125;</figcaption>
                    </figure>
                </Link>
                <Link to="/user/MoviePage">
                    <figure className="movie_figure">
                        <img src="img/half-life-3-pc-game-cover.jpg" alt="" />
                        <figcaption>&#123;반지의 제왕&#125;</figcaption>
                    </figure>
                </Link>
                <Link to="/user/MoviePage">
                    <figure className="movie_figure">
                        <img src="img/harry.webp" alt="" />
                        <figcaption>&#123;반지의 제왕&#125;</figcaption>
                    </figure>
                </Link>
                <Link to="/user/MoviePage">
                    <figure className="movie_figure">
                        <img src="img/home.png" alt="" />
                        <figcaption>&#123;반지의 제왕&#125;</figcaption>
                    </figure>
                </Link>

            </div>









        </>
    );

}


export default MovieSearch;