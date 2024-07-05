import React from 'react';
import { Link } from 'react-router-dom';
import "../../common/css/WithdrawMember.css"



function WithdrawMember() {















    return (

        <>

            <div className="withdraw_title">
                <h2>탈퇴하기</h2>
            </div>
            <div className="password_form_div">
                <form action="" method='post'>
                    <div className="password_div">
                        <div>
                            비밀번호 입력:
                        </div>
                        <div>
                            <input type="password" className="check_password" />
                        </div>
                    </div>
                    <div className="withdraw">
                        <button type="submit" className="withdraw_btn" onclick="return withdrawPassword()">탈퇴하기</button>
                    </div>
                </form>
            </div>
            <div className="main_page">
                <button>돌아가기</button>
            </div>


            {/* 모달 페이지 */}
            <div className="modal_page">
                <div className="modal_page_box">
                    <div className="withdraw_announce">
                        정말로 탈퇴하시겠습니까?
                    </div>
                    <br />
                        <div>
                            <button className="withdraw_yes">탈퇴하겠습니다</button>
                        </div>
                        <div className="withdraw_exit">
                            X
                        </div>

                </div>
            </div>





        </>

    );

}

export default WithdrawMember;