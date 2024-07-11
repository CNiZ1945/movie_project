import React from 'react';
import {useNavigate} from "react-router-dom";



function ChangePassword() {



    const navigate = useNavigate();









    return (
        <>
            <div className="cp_title">
                <h2>비밀 번호 변경</h2>
            </div>
            {/* <!-- 비밀번호 변경 박스 --> */}
            <div className="password_form_div">
                <form action="" method='post'>
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
                        <input type="submit" name="" id="" value="변경하기" onclick="return checkPW()" />
                    </div>
                </form>
            </div>
            {/* <!-- 돌아가기 박스 --> */}
            <div className="return_button">
                <button onClick={() => navigate(-1)}>돌아가기</button>
            </div>











        </>
    );

}


export default ChangePassword;