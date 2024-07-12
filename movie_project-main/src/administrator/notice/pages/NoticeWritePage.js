import React from "react";
import {useNavigate} from "react-router-dom";


//css
import '../../../common/css/NoticeWrite.css'

function NoticeWritePage() {


    



    return (
        <>
            <div className="NoticeWrite">
                <form className="writeForm">
                    {/* <!-- 제목 --> */}
                    <div className="WritetTitle">
                        <input type="text" id="title" name="title" required placeholder="제목을 입력하세요" />
                    </div>

                    {/* <!-- 내용 --> */}
                    <div className="WriteText">
                        {/* <!-- 글쓰기란 -->                */}

                        <textarea name="content" id="content" cols="40" rows="10" required></textarea>
                    </div>

                    {/* <!-- 첨부파일버튼 --> */}
                    <div className="FlilUpload">
                        <input type="file" id="file" name="file" />
                    </div>
                    {/* <!-- 글쓰기 버튼 --> */}
                    <div className="WriteSubmit">
                        <input type="submit" value="글쓰기" className="submit" />
                    </div>
                </form>
            </div>

        </>
    );



}

export default NoticeWritePage;