import React from 'react';
import { Link } from 'react-router-dom';




function MovieSearch() {













    return (
        <>
            <div class="search_result">
                <span>&#123;반지의 제왕&#125; 검색 결과</span>
            </div>
            {/* <!-- 검색 결과 영화 --> */}
            <div class="result_movie">
                <Link href="movie_page.html">
                    <figure class="movie_figure">
                        <img src="img/dune.jpg" alt="" />
                        <figcaption>&#123;반지의 제왕&#125;</figcaption>
                    </figure>
                </Link>
                <Link href="movie_page.html">
                    <figure class="movie_figure">
                        <img src="img/half-life-3-pc-game-cover.jpg" alt="" />
                        <figcaption>&#123;반지의 제왕&#125;</figcaption>
                    </figure>
                </Link>
                <Link href="movie_page.html">
                    <figure class="movie_figure">
                        <img src="img/harry.webp" alt="" />
                        <figcaption>&#123;반지의 제왕&#125;</figcaption>
                    </figure>
                </Link>
                <Link href="movie_page.html">
                    <figure class="movie_figure">
                        <img src="img/home.png" alt="" />
                        <figcaption>&#123;반지의 제왕&#125;</figcaption>
                    </figure>
                </Link>

            </div>









        </>
    );

}


export default MovieSearch;