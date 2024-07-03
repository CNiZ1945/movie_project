import React from 'react';
import { Link } from 'react-router-dom';


import '../../common/css/MyPage.css';

function MyPage(){

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return(
        <>
            <div class="myreview">
        <div class="myreview_head">
            <span>나의 작성 리뷰</span>
        </div>
        <div class="my_review_list">
            <ul class="my_review_list_ul">
                <li class="movie_name">반지의 제왕</li>
                <li class="movie_review"><Link href="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem harum optio provident rerum, voluptates beatae qui corrupti ea, distinctio</Link></li>
                <li class="review_date">2024.06.30</li>
                <li class="review_star">&#9733;(5)</li>
            </ul>
            <ul class="my_review_list_ul">
                <li class="movie_name">반지의 제왕</li>
                <li class="movie_review"><Link href="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem harum optio provident rerum, voluptates beatae qui corrupti ea, distinctio</Link></li>
                <li class="review_date">2024.06.30</li>
                <li class="review_star">&#9733;(5)</li>
            </ul>
            <ul class="my_review_list_ul">
                <li class="movie_name">반지의 제왕</li>
                <li class="movie_review"><Link href="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem harum optio provident rerum, voluptates beatae qui corrupti ea, distinctio</Link></li>
                <li class="review_date">2024.06.30</li>
                <li class="review_star">&#9733;(5)</li>
            </ul>
            <ul class="my_review_list_ul">
                <li class="movie_name">반지의 제왕</li>
                <li class="movie_review"><Link href="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem harum optio provident rerum, voluptates beatae qui corrupti ea, distinctio</Link></li>
                <li class="review_date">2024.06.30</li>
                <li class="review_star">&#9733;(5)</li>
            </ul>
            <ul class="my_review_list_ul">
                <li class="movie_name">반지의 제왕</li>
                <li class="movie_review"><Link href="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem harum optio provident rerum, voluptates beatae qui corrupti ea, distinctio</Link></li>
                <li class="review_date">2024.06.30</li>
                <li class="review_star">&#9733;(5)</li>
            </ul>

        </div>
        <div class="myreview_page">
            <ul class="myreview_page_ul">
                <li>&lt;</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>&gt;</li>
            </ul>
        </div>
    </div>
    <div class="bookmark">
        <div class="bookmark_head">
            <h2>찜한 컨텐츠</h2>
        </div>
        <div class="bookmark_movie">
            {/* <!-- 리엑트로 넘어갈 시 swiper를 공부해서 적용해볼 것 --> */}
            <ul class="bookmark_movie_ul">
                <li><Link href="movie_page.html"><img src="img/the_ring_poster.webp" alt="" /></Link></li>
                <li><Link href="movie_page.html"><img src="img/the_ring_poster.webp" alt="" /></Link></li>
                <li><Link href="movie_page.html"><img src="img/the_ring_poster.webp" alt="" /></Link></li>
                <li><Link href="movie_page.html"><img src="img/the_ring_poster.webp" alt="" /></Link></li>
                <li><Link href="movie_page.html"><img src="img/the_ring_poster.webp" alt="" /></Link></li>
                
            </ul>
        
        </div>
    </div>
    <div class="member_form">
        {/* <!-- 회원 정보 수정 --> */}
         <div class="member_info_head">
            <span>개인 정보 수정</span>
         </div>
        <div class="member_info">

            <form action="">
                <div class="form_div">
                    <div>
                        <label for="name">이름: </label>
                    </div>
                    <div>
                        <input type="text" name="name" id="" readOnly required />
                    </div>
                </div>
                <div class="form_div">
                    <div>
                        <label for="id">아이디: </label>
                    </div>
                    <div>
                        <input type="text" name="id" id="" readOnly required />
                    </div>
                </div>
                <div class="form_div">
                    <div>
                        <label for="passwordr">비밀번호: </label>
                    </div>
                    <div>
                        <button onclick = "location.href = 'change_password.html'">비밀 번호 변경</button>
                    </div>
                </div>
                <div class="form_div">
                    <div>
                        <label for="email">이메일: </label>
                    </div>
                    <div>
                        <input type="email" name="email" id="" required />
                    </div>
                </div>
                <div class="form_div">
                    <div>
                        <label for="phone">연락처: </label>
                    </div>
                    <div>
                        <input type="text" name="phone" id="" readOnly required />
                    </div>
                </div>
                <div class="form_div">
                    <div>
                        <label for="date">생년월일: </label>
                    </div>
                    <div>
                        <input type="date" name="date" id=""  required />
                    </div>
                </div>
                <div class="submit_div">
                    <input type="submit" name="" id="" value="정보 수정하기" />
                </div>
                    
            </form>
        </div>
    </div>
    <div class="member_withdrawal">
        <Link href="withdraw_member.html">회원탈퇴</Link>
    </div>
        
        
        
        
        
        
        </>
    );
    
}


export default MyPage;