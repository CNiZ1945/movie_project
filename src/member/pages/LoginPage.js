import React from 'react';
import { Link } from 'react-router-dom';
import '../../common/css/Login.css';
import google_login from '../../common/img/google_login.png';



function LoginPage() {










    return (

        <>

            <div className="login-container">
                <div id="login-header">
                    <h2>로그인</h2>
                </div>
                {/* <!-- 구글로 시작하기 버튼 --> */}

                <form>
                    <div className='wrap'>
                        <div className="Loginid">
                            <div className="Loginlogo">
                                <label for="userid">아이디</label><br/>                         
                            </div>
                            <div className='Loginidtext'>
                                <input type="text" id="id" name="id" placeholder="아이디"className='Loginidtext'/>
                            </div>
                        </div>
                        <br />
                        <div className="passwordbox">                            
                            <div className="Loginlogo">
                                <label for="userpassword">비밀번호</label><br/>                         
                            </div>
                            <div className='Loginpasswordtext'>
                                <input type="text" id="password" name="password" placeholder="비밀번호"className='Loginpasswordtext'/>
                            </div>                           
                        </div>
                    </div>
                    <div className="box4">
                        {/* <!-- 로그인 버튼 --> */}
                        <input type="submit" className="submit" value="로그인" />
                        {/* <!-- 자바 or 서브및으로할지 추루 결정 --> */}
                    </div>
                </form>
                <div className="google_login">
                    <Link to="#"><img src={google_login} alt="구글로그인버튼"className='googlelogin_btn' /></Link>
                </div>
                <div className="signup">
                    <div className="signupLink">
                        <Link to="/SignUp">회원가입</Link>
                    </div>
                    <div className="signup3">
                        <Link to="/FindIdPassword">아이디/비밀번호 찾기</Link>
                    </div>
                </div>
            </div>







        </>

    );


}




export default LoginPage;