import React from 'react';
import { Link } from 'react-router-dom';

import MyReview from '../component/MyReview';
import BookMark from '../component/BookMark';

//css
import '../../common/css/MyPage.css';

function MyPage(){

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return(
        <>

        {BookMark()}
        {MyReview()}
    <div className="member_form">
        {/* <!-- 회원 정보 수정 --> */}
         <div className="member_info_head">
            <span>개인 정보 수정</span>
         </div>
        <div className="member_info">

            <form action="" method='post'>
                <div className="form_div">
                    <div>
                        <label for="name">이름: </label>
                    </div>
                    <div>
                        <input type="text" name="name" id="" readOnly required />
                    </div>
                </div>
                <div className="form_div">
                    <div>
                        <label for="id">아이디: </label>
                    </div>
                    <div>
                        <input type="text" name="id" id="" readOnly required />
                    </div>
                </div>
                <div className="form_div">
                    <div>
                        <label for="passwordr">비밀번호: </label>
                    </div>
                    <div>
                        <button onclick = "location.to = 'change_password.html'">비밀 번호 변경</button>
                    </div>
                </div>
                <div className="form_div">
                    <div>
                        <label for="email">이메일: </label>
                    </div>
                    <div>
                        <input type="email" name="email" id="" required />
                    </div>
                </div>
                <div className="form_div">
                    <div>
                        <label for="phone">연락처: </label>
                    </div>
                    <div>
                        <input type="text" name="phone" id="" readOnly required />
                    </div>
                </div>
                <div className="form_div">
                    <div>
                        <label for="date">생년월일: </label>
                    </div>
                    <div>
                        <input type="date" name="date" id=""  required />
                    </div>
                </div>
                <div className="submit_div">
                    <input type="submit" name="" id="" value="정보 수정하기" />
                </div>
                    
            </form>
        </div>
    </div>
    <div className="member_withdrawal">
        <Link to="/user/WithdrawMember">회원탈퇴</Link>
    </div>
        
        
        
        
        
        
        </>
    );
    
}


export default MyPage;