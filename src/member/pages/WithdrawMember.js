import React from 'react';
import { Link } from 'react-router-dom';
import "../../common/css/WithdrawMember.css"



function WithdrawMember() {















    return (

        <>

            <div class="withdraw_title">
                <h2>탈퇴하기</h2>
            </div>
            <div class="password_form_div">
                <form action="">
                    <div class="password_div">
                        <div>
                            비밀번호 입력:
                        </div>
                        <div>
                            <input type="password" class="check_password" />
                        </div>
                    </div>
                    <div class="withdraw">
                        <button type="submit" class="withdraw_btn" onclick="return withdrawPassword()">탈퇴하기</button>
                    </div>
                </form>
            </div>
            <div class="main_page">
                <button>돌아가기</button>
            </div>


            {/* 모달 페이지 */}
            <div class="modal_page">
                <div class="modal_page_box">
                    <div class="withdraw_announce">
                        정말로 탈퇴하시겠습니까?
                    </div>
                    <br />
                        <div>
                            <button class="withdraw_yes">탈퇴하겠습니다</button>
                        </div>
                        <div class="withdraw_exit">
                            X
                        </div>

                </div>
            </div>





        </>

    );

}

export default WithdrawMember;