import React from 'react';




function ChangePassword() {













    return (
        <>
            <div class="cp_title">
                <h2>비밀 번호 변경</h2>
            </div>
            {/* <!-- 비밀번호 변경 박스 --> */}
            <div class="password_form_div">
                <form action="">
                    <div class="change_password">
                        <div>
                            비밀번호 변경:
                        </div>
                        <div>
                            <input type="password" name="" id="" class="new_password" />
                        </div>
                    </div>
                    <div class="change_password">
                        <div>
                            비밀번호 재확인:
                        </div>
                        <div>
                            <input type="password" name="" id="" class="confirm_password" />
                        </div>
                    </div>
                    <div class="submit_button">
                        <input type="submit" name="" id="" value="변경하기" onclick="return checkPW()" />
                    </div>
                </form>
            </div>
            {/* <!-- 돌아가기 박스 --> */}
            <div class="return_button">
                <button>돌아가기</button>
            </div>











        </>
    );

}


export default ChangePassword;