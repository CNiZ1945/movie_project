# React 방향서

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
모든 className은 DB에 맞춰서 작성
_(언더바) 를 쓰지 않고 camel기법으로 작성



-------------------------------------------------------------
## 파일 구조

component: 기능을 담당하는 js를 모아두는 폴더

pages: 페이지를 담당하는 js를 모아두는 폴더

### adminstrator
⨽admin - 관리자 전용
    ⨽ components
        ⨽ 영화 리스트
        ⨽ 영화 업로드
        ⨽ 회원 리스트 & 삭제
    ⨽ pages
        ⨽ 영화 리스트 페이지
        ⨽ 영화 업로드 페이지
        ⨽ 회원 관리 페이지

⨽ notice - 공지 사항
    ⨽ component
        ⨽공지 사항 리스트
        ⨽공지 사항 글쓰기 & 수정 & 삭제
    ⨽ pages
        ⨽공지 사항 리스트 페이지(관리자용)
        ⨽공지 사항 글쓰기 페이지
        ⨽공지 사항 글보기 페이지
        ⨽공지 사항 글수정 페이지
        ⨽공지 사항 리스트 페이지(일반 회원용)

### member
⨽ component
    ⨽ 로그인
    ⨽ 회원 가입
    ⨽ 비밀번호 변경 & 회원 탈퇴
    ⨽ 회원 정보
    ⨽ 영화 북마크
    ⨽ 리뷰 추가 & 삭제

⨽ pages
    ⨽ 로그인 페이지
    ⨽ 회원 가입 페이지
    ⨽ 비밀번호 변경 페이지
    ⨽ 회원 탈퇴 페이지
    ⨽ 마이 페이지(리뷰 + 영화 북마크 기능 + 회원 정보)

### movie
⨽ component
    ⨽ 영화 상세 내용
    ⨽ 영화 순위
    ⨽ 영화 검색
    ⨽ 최신 영화
⨽ pages
    ⨽ 메인 페이지
    ⨽ 영화 상세 내용 페이지
    ⨽ 영화 재생 페이지
    ⨽ 영화 검색 페이지

common - 공통으로 사용되는 요소들을 모아놓는 폴더
   ⨽ css - css 모아놓는 폴더
   ⨽ image - image파일들을 모아놓는 폴더
   ⨽ video - video 파일들을 모아놓는 폴더
|- header.js - 웹페이지 header   |- footer.js - 웹페이지 footer   |- login_header.js - 로그인페이지 header   |- admin_menu.js - 관리자 페이지 좌단 메뉴






