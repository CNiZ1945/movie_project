import React from "react";

import '../../../common/css/NoticeWrite.css'

function NoticeWritePage() {






    return (
        <>
            <div className="post_div">
                <form action="/write" method="post" className="post_form">
                    {/* <!-- 제목 --> */}
                    <div className="ti">
                        <div className="ti_title">
                            <label for="title">제목</label>
                        </div>
                        <div className="ti_input">
                            <input type="text" id="title" name="title" required placeholder="제목을 입력하세요" />
                        </div>
                    </div>

                    {/* <!-- 내용 --> */}
                    <div className="Bg">
                        {/* <!-- 글쓰기란 -->                */}
                        <label for="content"></label>
                        <textarea name="content" id="content" cols="40" rows="10" required></textarea>
                    </div>

                    {/* <!-- 첨부파일버튼 --> */}
                    <div className="file_submit">
                        <div className="f_s">
                            <input type="file" id="file" name="file" value="첨부파일" />
                        </div>
                        {/* <!-- 글쓰기 버튼 --> */}
                        <div className="s_b">
                            <input type="submit" value="글쓰기" className="submit" />
                            {/* <!-- 자바 or 서브및으로할지 추루 결정 --> */}
                        </div>
                    </div>
                </form>
            </div>

        </>
    );



}

export default NoticeWritePage;