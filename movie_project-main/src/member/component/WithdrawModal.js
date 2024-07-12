import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../common/css/WithdrawModal.css"

function WithdrawModal({ onClose }) {

    const navigate = useNavigate();

    return (
        <>

            <div className="modal_page">
                <div className="modal_page_box">
                    <div className="withdraw_announce">
                        정말로 탈퇴하시겠습니까?
                    </div>
                    <br />
                    <div>
                        <button className="withdraw_yes" onClick={() => navigate("/")}>탈퇴하겠습니다</button>
                    </div>
                    <div className="withdraw_exit" onClick={onClose}>
                        X
                    </div>

                </div>
            </div>
        </>
    );
}

























export default WithdrawModal