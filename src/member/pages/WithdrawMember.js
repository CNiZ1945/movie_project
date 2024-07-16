import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import "../../common/css/WithdrawMember.css"
import WithdrawModal from "../component/WithdrawModal"


function WithdrawMember() {


    const [modal, setModal] = useState(false);

    const navigate = useNavigate()



    return (

        <>
            {/* 모달 페이지 */}
            {modal && <WithdrawModal onClose={() => setModal(false)} />}
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
                        <button type="button" className="withdraw_btn" onClick={() => setModal(!modal)}>탈퇴하기</button>
                    </div>

                </form>
            </div>
            <div className="main_page">
                <button className="ReturnBtn" onClick={() => navigate(-1)}>돌아가기</button>
            </div>

        </>

    );

}

export default WithdrawMember;