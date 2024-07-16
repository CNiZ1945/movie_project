# React 방향서

리엑트 파일 만들기 npx create-react-app "파일 이름"
리엑트 시작 npm start


리엑트 종료할 때 터미널에서 ctrl + c를 통해서 종료할 것



git에서 다운로드
1. 터미널에서 받을 파일로 이동
2. git clone https://github.com/CNiZ1945/movie_project.git
    2. 1 git clone url. : 현재 폴더에 데이터만 받아짐    
    2. 2 git clone url: 현재 폴더에 새로운 폴더가 만들어짐    

git에 업로드하기
1. git add .
2. git commit -m "commit하면서 남길 말"
3. git push


------------------------------------------------------------------
## css 정리

► size    
body - width: 1200px
body, form을 제외한 가능한한 %를 통해서 width값 선택


► font    
국문: noto sans - https://fonts.google.com/noto/specimen/Noto+Sans    
영문: Montaga - https://fonts.google.com/specimen/Montaga?query=monta&noto.query=mont    


► font-size     
작은 글씨 0.8rem
일반 글시 1.2rem
큰 글씨 2rem

► color    
글씨 색 white


► 간격    
작은 간격 5px
일반 간격 10px
큰 간격 20px

► button size    
w 200px
h 50px
border-radious 10px

► 정렬   
display: flex

예외적인 경우가 생기면 기록을 남길 것

------------------------------------------------------------------
- 모든 className은 DB에 맞춰서 작성     
- _(언더바) 를 쓰지 않고 camel기법으로 작성     
- 닫는 태그가 없는 태그(예: input)은 스스로 태그를 닫아야 한다 (예: <input type:"text" />)
- return안에 들어가는 html은 html 태그 하나로 묶어야 한다 <></> 사용 가능
- 
- 

-------------------------------------------------------------
## 설치할 라이브러리
- npm install react-router-dom --save
- npm install axios
- npm install styled-components

-------------------------------------------------------------
## 파일 구조

component: 기능을 담당하는 js를 모아두는 폴더     

pages: 페이지를 담당하는 js를 모아두는 폴더     

### adminstrator
⨽admin - 관리자 전용<br/>
    ⨽ components<br/>
        ⨽ 영화 리스트<br/>
        ⨽ 영화 업로드<br/>
        ⨽ 회원 리스트 & 삭제<br/>
    ⨽ pages<br/>
        ⨽ AdminNoticeListPage.js - 공지 사항 리스트 페이지(관리자용)<br/> 
        ⨽ AdminMovieListPage.js - 영화 리스트 페이지<br/>
        ⨽ AdminMovieUploadPage.js - 영화 업로드 페이지<br/>
        ⨽ AdminMovieUploadFilePage.js - 영화 파일 업로드 페이지<br/>
        ⨽ AdminMemberListPage.js - 회원 관리 페이지<br/>

⨽ notice - 공지 사항<br/>
    ⨽ component<br/>
        ⨽공지 사항 리스트<br/>
        ⨽공지 사항 글쓰기 & 수정 & 삭제<br/>
        ⨽파일 업로드 & 다운로드<br/>
    ⨽ pages<br/>
        ⨽ NoticeWritePage.js - 공지 사항 글쓰기 페이지<br/>
        ⨽ NoticeViewPage.js - 공지 사항 글보기 페이지<br/>
        ⨽ NoticeListPage.js - 공지 사항 리스트 페이지(일반 회원용)<br/>

### member
⨽ component<br/>
    ⨽ 회원 정보<br/>
    ⨽ 영화 북마크<br/>
    ⨽ 리뷰<br/>

⨽ pages<br/>
    ⨽ LoginPage.js - 로그인 페이지<br/>
    ⨽ SignUp.js - 회원 가입 페이지<br/>
    ⨽ ChangePassword.js - 비밀번호 변경 페이지<br/>
    ⨽ FindIdPassword.js - 아이디 비밀번호 찾기 페이지<br/>
    ⨽ WithdrawMember.js - 회원 탈퇴 페이지<br/>
    ⨽ MyPage.js - 마이 페이지(리뷰 + 영화 북마크 기능 + 회원 정보)<br/>

### movie
⨽ component<br/>
    ⨽ 영화 탭<br/>
    ⨽ 랭킹 슬라이드<br/>
    ⨽ 리뷰 추천<br/>
    ⨽ 별점 추천<br/>
    ⨽ 업로드된 영화<br/>
⨽ pages<br/>
    ⨽ MainPage.js - 메인 페이지(영화 순위 + 최신 영화 + 영화 추천)<br/>
    ⨽ MoviePage.js - 영화 상세 내용 페이지<br/>
    ⨽ MoviePlayPage.js 영화 재생 페이지<br/>
    ⨽ MovieSearchPage.js 영화 검색 페이지<br/>

common - 공통으로 사용되는 요소들을 모아놓는 폴더<br/>
   ⨽ css - css 모아놓는 폴더<br/>
   ⨽ image - image파일들을 모아놓는 폴더<br/>
   ⨽ video - video 파일들을 모아놓는 폴더<br/>
   ⨽ pages - 공통으로 사용되는 페이지
      ⨽ AdminHeader.js - 관리자용 페이지 메뉴 
      ⨽ AdminOutlet.js - 관리자용 페이지 outlet
      ⨽ CustomerOutlet.js - 회원용 페이지 outlet
      ⨽ Footer.js - Footer 페이지
      ⨽ Header.js - 회원 header 페이지
      ⨽ LoginHdeader.js - 로그인관련 페이지용 header
      ⨽ LoginOutlet.js - 로그인관련 페이지 Outlet


===
# 변경/요구 사항 정리

07-05
비밀번호 변경 사항
- 기존: 이메일, 아이디를 입력시 확인후 비밀번호 변경 페이지로 이동
- 변경: 이메일 확인해서 이메일로 비밀번호 변경 링크를 첨부 -> 링크를 통해서 비밀번호 변경 페이지로 이동
이메일 인증시 alert창을 띄워서 이메일을 보냈다는 메세지를 전달, 비밀번호 변경 페이지로 이동하지 않는다.

회원가입
이메일 작성란에
'추후에 비밀번호 변경시에 사용될 수 있습니다' 라는 문구를 추가


07-09
Link 태그안에 className="black" : 링크 글자를 검정색으로 변경
Link 태그안에 className="white" : 링크 글자를 흰색으로 변경

07-11 관리자 영화 업로드 페이지를 2장으로 작성
AdminMovieUploadPage - 제목, 감독, 배우, 장르, 줄거리, 청소년 관람 여부, 제작년도, 시간
AdminMovieUploadFilePage - 예고편 영상 포스터