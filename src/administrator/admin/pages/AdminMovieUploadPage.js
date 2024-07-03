import React from 'react';

import '../../../common/css/AdminMovieUpload.css';


function AdminMovieUploadPage(){

    
    
    
    
    
    
    
    
    
    
    
    return(
        <>
                <div class="upload_body">
            <form action="" class="form">

                <label for="" class="label">
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

                <input type="submit" name="" id="upload" value="업로드" class="submit" />

            </form>

        </div>
        
        
        
        </>
        
    );
    
    
}






export default AdminMovieUploadPage;