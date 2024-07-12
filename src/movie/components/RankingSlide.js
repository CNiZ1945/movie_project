import React from 'react';
import { Link } from 'react-router-dom';



export function RankingSlide() {


    const movieSlide = {
        MovieTitle: "반지의 제왕",
        MovieContent: "Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!",
        MovieGenre: "판타지",
        MovieTime: "120분",
        // MovieImg: {추후에 추가할 것}

    };






    return (




        <>
            <div className="slide">
                <div className="slide_page">

                    <ul className="slide_ul">
                        <li>
                            <Link to="MoviePage">
                                <figure>
                                    <img src={"https://www.dune2.co.kr/assets/images/desktopbanner.jpg"} alt="" className="img_slide" />
                                    <figcaption>
                                        <p className="movie_title">{movieSlide.MovieTitle}</p>
                                        <p className="movie_content" >{movieSlide.MovieContent}</p>
                                        <p className="movie_genre" >{movieSlide.MovieGenre}</p>
                                        <p className="movie_time" >{movieSlide.MovieTime}</p>
                                    </figcaption>
                                </figure>
                            </Link>
                        </li>
                        <li>
                            <Link to="MoviePage">
                                <figure>
                                    <img src={"https://gaming-cdn.com/images/products/6694/616x353/half-life-3-pc-game-cover.jpg?v=1707324174"} alt="" className="img_slide" />
                                    <figcaption>
                                        <p className="movie_title">{movieSlide.MovieTitle}</p>
                                        <p className="movie_content" >{movieSlide.MovieContent}</p>
                                        <p className="movie_genre" >{movieSlide.MovieGenre}</p>
                                        <p className="movie_time" >{movieSlide.MovieTime}</p>
                                    </figcaption>
                                </figure>
                            </Link>
                        </li>
                        <li>
                            <Link to="MoviePage">
                                <figure>
                                    <img src={"https://deadline.com/wp-content/uploads/2023/04/harry-potter.jpg"} alt="" className="img_slide" />
                                    <figcaption>
                                        <p className="movie_title">{movieSlide.MovieTitle}</p>
                                        <p className="movie_content" >{movieSlide.MovieContent}</p>
                                        <p className="movie_genre" >{movieSlide.MovieGenre}</p>
                                        <p className="movie_time" >{movieSlide.MovieTime}</p>
                                    </figcaption>
                                </figure>
                            </Link>
                        </li>
                        <li>
                            <Link to="MoviePage">
                                <figure>
                                    <img src={"https://image.cine21.com/resize/IMGDB/article/2004/1228/medium/154347_pl483[W578-].jpg"} alt="" className="img_slide" />
                                    <figcaption>
                                        <p className="movie_title">{movieSlide.MovieTitle}</p>
                                        <p className="movie_content" >{movieSlide.MovieContent}</p>
                                        <p className="movie_genre" >{movieSlide.MovieGenre}</p>
                                        <p className="movie_time" >{movieSlide.MovieTime}</p>
                                    </figcaption>
                                </figure>
                            </Link>
                        </li>
                        <li>
                            <Link to="MoviePage">
                                <figure>
                                    <img src={"https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/cmLZ/image/2IUI0A_hLxCZXtOiMdQAfuIVKaY.jpg"} alt="" className="img_slide" />
                                    <figcaption>
                                        <p className="movie_title">{movieSlide.MovieTitle}</p>
                                        <p className="movie_content" >{movieSlide.MovieContent}</p>
                                        <p className="movie_genre" >{movieSlide.MovieGenre}</p>
                                        <p className="movie_time" >{movieSlide.MovieTime}</p>
                                    </figcaption>
                                </figure>
                            </Link>
                        </li>
                    </ul>


                </div>
                <div className="btn prev">
                    <button className="prev">prev</button>
                </div>
                <div className="btn next">
                    <button className="next">next</button>
                </div>

                <div className="ranking_no">
                    {/* <!-- 순위 등급 표시 태그 --> */}
                </div>
            </div>




        </>
    );










}























export default RankingSlide;