import React from 'react';
import {useNavigate} from "react-router-dom";

// css
import '../../../common/css/AdminMovieUpload.css';


function AdminMovieUploadFilePage() {


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
                            <input type="text" name="" id="" required readOnly/>
                        </div>
                    </label>
                    <label>
                        <div>예고편: </div>
                        <div>
                            <input type="file" name="" id="" required />

                        </div>
                    </label>
                    <label>
                        <div>영상: </div>
                        <div>
                            <input type="file" name="" id="" required />

                        </div>
                    </label>
                    <label>
                        <div>포스터: </div>
                        <div>
                            <input type="text" name="" id="" required />

                        </div>
                    </label>
                    <div>
                        <input type="submit" name="" id="upload" value="업로드" className="MovieUploadBtn" onClick={() => navigate("/admin/MovieList")} />
                    </div>

                </form>

            </div>
            </div>



        </>

    );


}






export default AdminMovieUploadFilePage;