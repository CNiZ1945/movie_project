import React from 'react';

import MovieTab from '../components/MovieTab';
import {useNavigate} from "react-router-dom";


// css
import '../../common/css/MoviePage.css';


function MoviePage() {

    const navigate = useNavigate();





    return (
        <>
            <div className="movie">
                <img src={"https://upload.wikimedia.org/wikipedia/ko/9/90/%EB%B0%98%EC%A7%80%EC%9D%98%EC%A0%9C%EC%99%95%EC%99%95%EC%9D%98%EA%B7%80%ED%99%98_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"} alt="" className="movie_bg" />
                <div className="movie_explain">
                    {/* <!-- 영화 상세 설명 --> */}

                    <div className="book_mark">
                        <button>&#10084;</button>
                    </div>
                    <div className="explainDiv">

                        <div className="explain">
                            <ul className='explainUl'>
                                <li className="movieTitle">반지의 제왕</li>
                                <li className="movieDirector">영화 감독
                                    <ul>
                                        <li>
                                            <img src='https://i.namu.wiki/i/uFwTdPAObYZAyKtVHdPu8RisCLkQI0YYkWR4hRMV_lu_1-d_UmEPnn-lHdYoY-xf10I9ZvbatXFcPkO-ROoLplvyw0_R-B4QVzNFaJixGPvwrCRkx9RkKm8CJKl5vvl98YlKACeYUx0qzTvLkS6AdQ.webp' className='MovieDirectorImg' />
                                        </li>
                                    </ul>
                                </li>
                                <li className="movie_actor">영화 배우
                                    <ul>
                                        <li><img src='https://i.namu.wiki/i/yGYwqKnUsr2rIYRo1-mqPvKtL5BKLx9JQx_dM4AlMVQSaJdilOVJCsNX3AzujLfLAnJO2qVNMGE5TgpRy4ZlpeNXZtMeffv-xVwGGL7vGYgnkN8ZRDP3jfgnv6QlVEmcIVzcUs1mTCmbXcKGVoRwpA.webp' className='MovieActorImg' /></li>
                                        <li><img src='https://i.namu.wiki/i/JogEPqD4IJ-y4grzUjUnIeU1PZFKe9yHeOeJgQ5qsT1DbJnukIn6iQNRZp9qegdKcZXY503_Va08dpITUY_ofw-1Zm_G5w5T-MbHiC85RXyPlrJlt7jB4giPd6mUE2OOV4eep2aAWmlY27bEvY1LcA.webp' className='MovieActorImg' /></li>
                                        <li><img src='https://i.namu.wiki/i/3fDHRKbvKW6sn3swaoQ3Gj670M9MC3upIL_TqCIsL-_D1o77opQ9DbvY-IvnF4ZfUxQ3iz-c__Rfls-LjQhyvW3GyTKw_TTYyu_pRbWwfTl2ph4XLpVVX7FQ9hV_Q6vdvvcVUoqeU3Dow2WIdXn-2A.webp' className='MovieActorImg' /></li>
                                        <li><img src='https://i.namu.wiki/i/MH8lea6rAYQH3aJuG78Alcin8BuKksl7_J-as32jHisxP0tMhDzsHAWnY-CqBJJnRzyNHbrtvdXO2PWPdtj_UgSv0jy_AR93Kby51KBWAbv7BfYbRfxONZi3PKtnpVw9r5pbkxCajfgqc6DVU7xLjQ.webp' className='MovieActorImg' /></li>
                                        <li><img src='https://i.namu.wiki/i/6bVvkMsD2mwAQCav0wp-OljQCc1AhwxklUT83xs2hiOy7DdEF8126qORns-Hig58azrXJ2zvEvZyXDovNOTMeoTele6Aj18dWA2M9NDoXUakIrBQ1djvppxfg8bLj0aUUMltmY346sf9Pc-4OhOvlQ.webp' className='MovieActorImg' /></li>
                                    </ul>
                                </li>
                                <li className="movie_genre">영화 장르: 판타지</li>
                                <li className="movie_time">영화 시간: 120분</li>
                                <li className="movie_year">개봉 년도: 2001년</li>
                                <li className="movie_age">연령 제한: 12세 이상 관람가</li>
                                <li className="movie_content">영화 내용: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ea, iusto eligendi earum amet incidunt vitae odit enim assumenda sit, nesciunt est nam ut neque? Hic, similique eaque? Deserunt, harum.</li>
                            </ul>
                        </div>
                        {/* <!-- 탭 목차 영역 --> */}
                     
                            {MovieTab()}

                        
                    </div>
                </div>
                <div className="bg">
                    {/* <!-- 배경을 위한 빈 공간 --> */}
                </div>
                {/* <!-- 영화 재생 버튼 --> */}
                <div className="button">
                    <button className="watch_movie_btn" onClick={() => navigate("/user/MoviePlay")} >영화 보러 가기</button>

                </div>
            </div>
        </>






    );

}






export default MoviePage;