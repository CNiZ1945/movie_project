import React from 'react';
import {useNavigate} from "react-router-dom";

import '../../../common/css/AdminMovieUpload.css';


function AdminMovieUploadPage() {





    const navigate = useNavigate();






    return (
        <>
        <div className='UploadBody'>
            <div className="AdminUploadHead">
                <h2>영화 업로드</h2>
            </div>
            <div className="UploadInfo">
                <form action="" className="UploadInfoForm">

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

                    <div>
                        <input type="submit" name="" id="upload" value="다음" className="MovieUploadBtn" onClick={() => navigate("/admin/MovieUploadFile")} />
                    </div>


                </form>

            </div>

        </div>



        </>

    );


}






export default AdminMovieUploadPage;