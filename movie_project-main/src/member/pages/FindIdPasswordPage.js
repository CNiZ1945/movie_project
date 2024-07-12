import React from 'react';
// import '../../common/css/FindIdPassword.css';





function FindIdPassword() {














    return (
        <>
            <div className="findId">
                {/* <!-- 아이디찾기 전체박스 --> */}
                <div className="find_id">
                    {/* <!-- 아이디찾기 제목박스 --> */}
                    <div className="fi_id">
                        <h2>아이디찾기</h2>
                    </div>
                    {/* <!-- 아이디찾기 글쓰기 박스 --> */}
                    <div className="f_id">
                        <form action="" method='post'>
                            <label for="useremail">이메일:</label>
                            <input type="text" id="useremail" name="useremail" required /><br />
                            {/* <!-- 아이디 찾기 버튼 --> */}
                            {/* <!-- <input type="submit" value="로그인하기" onclick="location.href = 'login.html' " > --> */}
                            <button onclick="location.href = 'login.html' " >로그인 하기</button>
                            {/* <!-- 자바 or 서브및으로할지 추루 결정 --> */}
                        </form>
                    </div>
                </div>
                {/* <!-- 비밀번호찾기 전체박스 --> */}
                <div className="find_pw">
                    {/* <!-- 비밀번호 찾기 제목 박스 --> */}
                    <div className="fi_pw">
                        <h2>비밀번호찾기</h2>
                    </div>
                    {/* <!-- 비밀번호 찾기 글쓰기 박스 --> */}
                    <div className="f_pw">
                        <form action="" method='post'>
                            <label for="userid">아이디</label>
                            <input type="text" id="userid" name="userid" required /><br />
                            <label for="useremail">이메일</label>
                            <input type="text" id="useremail" name="useremail" required /><br />
                            {/* <!-- 아이디 찾기 버튼 --> */}
                            <input type="submit" value="비밀번호찾기" />
                            {/* <!-- 자바 or 서브및으로할지 추루 결정 --> */}
                        </form>
                    </div>
                </div>
            </div>



        </>

    );

}

export default FindIdPassword;