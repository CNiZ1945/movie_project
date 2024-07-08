import React from 'react';
import { Link } from 'react-router-dom';




// css
import "../../common/css/MainPage.css";
import RankingSlide from '../components/RankingSlide';
import RecommendReview from '../components/RecommendReview';
import RecommendStar from '../components/RecommendStar';
import UpdatedMovie from '../components/UpdatedMovie';



function MainPage() {












    return (
        
        <>
            
            {/* <!-- ============================ 영화 랭킹 ============================= --> */}
            <div className="ranking">
                < RankingSlide />
            </div>

            {/* <!-- ============================ 영화 랭킹 ============================= --> */}
            {/* <!-- ============================ 평점 추천 ============================= --> */}
            <div className="star recommend">
                <div className="head">
                    <h2>영화 별점 추천</h2>
                </div>
                < RecommendReview />
            </div>
            {/* <!-- ============================ 평점 추천 ============================= --> */}
            {/* <!-- ============================ 랭킹(리뷰 -> 평점) ============================= --> */}
            <div className="review recommend">
                <div className="head" >
                    <h2>
                        영화 리뷰 추천
                    </h2>
                </div>
                <RecommendStar />
            </div>
            {/* <!-- ============================ 랭킹(리뷰 -> 평점) ============================= --> */}
            <div className="movie_upload">
                <div className="head" >
                    <h2>
                        최신 업로드된 영화
                    </h2>
                </div>
                <UpdatedMovie />
            </div>







        </>

     




    );
}

























export default MainPage;