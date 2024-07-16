import React from 'react';
import { Link } from 'react-router-dom';

import MyReview from '../component/MyReview';
import BookMark from '../component/BookMark';
import MemberInfo from '../component/MemberInfo';

//css
import '../../common/css/MyPage.css';

function MyPage(){

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return(
        <>

        {BookMark()}
        {MyReview()}
        {MemberInfo()}
    <div className="member_withdrawal">
        <Link to="/user/WithdrawMember" className='Gray'>회원탈퇴</Link>
    </div>
        
        
        
        
        
        
        </>
    );
    
}


export default MyPage;