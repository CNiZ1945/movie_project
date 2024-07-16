import React from 'react';
import {useNavigate} from "react-router-dom";

// css
import "../../common/css/ChangePassword.css"


function ChangePassword() {



    const navigate = useNavigate();









    return (
        <>
            <div className="cp_title">
                <h2>비밀 번호 변경</h2>
            </div>
            {/* <!-- 비밀번호 변경 박스 --> */}
            <div className="password_form_div">
                <form className='ChangePasswordForm'>
                    <div className="change_password">
                        <div>
                            비밀번호 변경:
                        </div>
                        <div>
                            <input type="password" name="" id="" className="new_password" />
                        </div>
                    </div>
                    <div className="change_password">
                        <div>
                            비밀번호 재확인:
                        </div>
                        <div>
                            <input type="password" name="" id="" className="confirm_password" />
                        </div>
                    </div>
                    <div className="submit_button">
                        <input type="submit" name="" id="" className="ChangePwBtn" value="변경하기" />
                    </div>
                </form>
            </div>
            {/* <!-- 돌아가기 박스 --> */}
            <div className="return_button">
                <button className="ReturnBtn"  onClick={() => navigate(-1)}>돌아가기</button>
            </div>











        </>
    );

}


export default ChangePassword;