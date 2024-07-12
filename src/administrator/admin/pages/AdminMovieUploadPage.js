import React from 'react';

import '../../../common/css/AdminMovieUpload.css';


function AdminMovieUploadPage() {












    return (
        <>
            <div className="admin_notice_haed">
                <h2>공지사항</h2>
            </div>
            <div className="upload_body">
                <form action="" className="form">

                    <label for="" className="label">
                        <div>제목: </div>
                        <div>
                            <input type="text" name="" id="" required />
                        </div>
                    </label>


                    <label for="">
                        <div>감독: </div>
                        <div>
                            <input type="text" name="" id="" required />
                        </div>
                    </label>

                    <label for="">
                        <div>배우: </div>
                        <div>
                            <input type="text" name="" id="" required />
                        </div>
                    </label>

                    <label for="">
                        <div>장르:</div>
                        <div>

                            <input type="text" name="" id="" required />
                        </div>
                    </label>

                    <label for="">
                        <div>시간:</div>
                        <div>

                            <input type="text" name="" id="" required />
                        </div>
                    </label>

                    <label for="">
                        <div>스틸컷: </div>
                        <div>

                            <input type="text" name="" id="" required />
                        </div>
                    </label>

                    <label for="">
                        <div>포스터: </div>
                        <div>

                            <input type="text" name="" id="" required />
                        </div>
                    </label>

                    <label for="">
                        <div>줄거리:</div>
                        <div>
                            <input type="text" name="" id="" required />

                        </div>
                    </label>

                    <label for="">
                        <div>시청등급:</div>
                        <div>

                            <input type="text" name="" id="" required />
                        </div>
                    </label>

                    <label for="">
                        <div>제작년도: </div>
                        <div>
                            <input type="text" name="" id="" required />

                        </div>
                    </label>

                    <label for="">
                        <div>영상 올리기</div>
                        <div>
                            <input type="file" name="" id="" required />

                        </div>
                    </label>
                    {/* <!-- <button>영상올리기(파일업로드)</button> --> */}

                    <input type="submit" name="" id="upload" value="업로드" className="submit" />

                </form>

            </div>



        </>

    );


}






export default AdminMovieUploadPage;