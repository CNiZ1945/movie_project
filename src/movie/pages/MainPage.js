import React from 'react';
import { Link } from 'react-router-dom';

// css
import "../../common/css/MainPage.css";



function MainPage() {












    return (
        <>

            {/* <!-- ============================ 영화 랭킹 ============================= --> */}
            <div className="ranking">
                <div className="slide">
                    <div className="slide_page">

                        <ul className="slide_ul">
                            <li>
                                <Link to="MoviePage">
                                    <figure>
                                        <img src="img/dune.jpg" alt="" className="img_slide" />
                                        <figcaption>
                                            <p className="movie_title">듄</p>
                                            <p className="movie_content" >Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!</p>
                                            <p className="movie_genre">장르: sf</p>
                                            <p className="movie_time">시간: 120분</p>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </li>
                            <li>
                                <Link to="MoviePage">
                                    <figure>
                                        <img src="img/half-life-3-pc-game-cover.jpg" alt="" className="img_slide" />
                                        <figcaption>
                                            <p className="movie_title">하프라이프 3</p>
                                            <p className="movie_content" >Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!</p>
                                            <p className="movie_genre">장르: sf</p>
                                            <p className="movie_time">시간: 2034년</p>
                                        </figcaption>
                                    </figure>

                                </Link>

                            </li>
                            <li>
                                <Link to="MoviePage">
                                    <figure>
                                        <img src="img/harry.webp" alt="" className="img_slide" />
                                        <figcaption>
                                            <p className="movie_title">해리포터</p>
                                            <p className="movie_content" >Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!</p>
                                            <p className="movie_genre">장르: 마법 판타지</p>
                                            <p className="movie_time">시간: 120분</p>
                                        </figcaption>
                                    </figure>

                                </Link>
                            </li>
                            <li>
                                <Link to="MoviePage">
                                    <figure>
                                        <img src="img/home.png" alt="" className="img_slide" />
                                        <figcaption>
                                            <p className="movie_title">나홀로 집에</p>
                                            <p className="movie_content" >Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!</p>
                                            <p className="movie_genre">장르: 공포</p>
                                            <p className="movie_time">시간: 120분</p>
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
            </div>

            {/* <!-- ============================ 영화 랭킹 ============================= --> */}
            {/* <!-- ============================ 평점 추천 ============================= --> */}
            <div className="star recommend">
                <div className="head">
                    <h2>영화 별점 추천</h2>
                </div>
                <div className="movie_img">
                    <ul className="movie_list">
                        <li className="movie_list_poster" ><Link to="/MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                        <li className="movie_list_poster"><Link to="/MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                        <li className="movie_list_poster"><Link to="/MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                        <li className="movie_list_poster"><Link to="/MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                        <li className="movie_list_poster"><Link to="/MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                    </ul>

                </div>
            </div>
            {/* <!-- ============================ 평점 추천 ============================= --> */}
            {/* <!-- ============================ 시간대별 추천 ============================= --> */}
            <div className="time recommend">
                <div className="head" >
                    <h2>
                        시간대별 영화 추천
                    </h2>
                </div>
                <div className="movie_img">
                    <ul className="movie_list">
                        <li className="movie_list_poster"><Link to="MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                        <li className="movie_list_poster"><Link to="MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                        <li className="movie_list_poster"><Link to="MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                        <li className="movie_list_poster"><Link to="MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>
                        <li className="movie_list_poster"><Link to="MoviePage"><img src="http://placehold.it/200X300" alt="" /></Link></li>

                    </ul>

                </div>
            </div>








        </>




    );
}

























export default MainPage;