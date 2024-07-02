import React from "react";


function NoticeViewPage() {
    return (
        <>
            <div className="psot_view">
                <div className="post_name">
                    {/* <!-- 공지글 제목 --> */}
                    <div className="post_head">
                        공 지 글 1
                    </div>
                    <div className="post_info">
                        {/* <!-- 날짜, 조회 --> */}
                        <span>날짜: 2024.06.29</span>
                        <span>조회수: 1000</span>
                    </div>
                </div>
                <div className="post_content">
                    {/* <!-- 글 내용 --> */}
                    <textarea name="" id="" cols="30" rows="10" className="post_text" readonly>
                        textarea 자동 높이 조절은 js로 작업해야 함



                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error enim cumque molestias quos amet! Alias necessitatsit amet consectetur adipisicing elit. Error enim cumque molestias quos amet! Alias necessitatibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem maiores itaque molestiae veniam quam! Placeat alias fugit, pariatur modi delectus accusamus quia et dolorum dolore nobis, quos omnis harum ratione.ibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem isit amet consectetur adipisicing elit. Error enim cumque molestias quos amet! Alias necessitatibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem ipsum doloctus accusamus quia et dolorum dolore nobis, quos omnis harum ratione.ibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem isit amet consectetur adipisicing elit. Error enim cumque molestias quos amet! Alias necessitatibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem maiores itaque molestiae veniam quam! Placeat alias fugit, pariatur modi delectus accusamus quia et dolorum dolore nobis, quos octus accusamus quia et dolorum dolore nobis, quos omnis harum ratione.ibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem isit amet consectetur adipisicing elit. Error enim cumque molestias quos amet! Alias necessitatibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem maiores itaque molestiae veniam quam! Placeat alias fugit, pariatur modi delectus accusamus quia et dolorum dolore nobis, quos octus accusamus quia et dolorum dolore nobis, quos omnis harum ratione.ibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem isit amet consectetur adipisicing elit. Error enim cumque molestias quos amet! Alias necessitatibus tempore, est voluptate quo distinctio. Omnis provident, inventore nesciunt similique enim harum voluptatum amet.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem maiores itaque molestiae veniam quam! Placeat alias fugit, pariatur modi delectus accusamus quia et dolorum dolore nobis, quos or sit amet consectetur, adipisicing elit. Voluptatem maiores itaque molestiae veniam quam! Placeat alias fugit, pariatur modi delectus accusamus quia et dolorum dolore nobis, quos omnis harum ratione.psum dolor sit amet consectetur, adipisicing elit. Voluptatem maiores itaque molestiae veniam quam! Placeat alias fugit, pariatur modi delectus accusamus quia et dolorum dolore nobis, quos omnis harum ratione.
                    </textarea>
                </div>
                <div className="post_btn">
                    {/* <!-- 버튼 영역 --> */}
                    <div className="btn_left">
                        {/* <!-- 공간 정렬을 위한 빈 공간 --> */}
                    </div>
                    <div className="btn_center">
                        {/* <!-- 수정 삭제 버튼 --> */}
                        {/* <!-- 관리자한테만 보여질 수 있게 작성 --> */}
                        <button className="modify_btn" onclick="location.href = 'post_write.html' ">수정</button>
                        <button className="delete_btn">삭제</button>
                    </div>
                    <div className="btn_right">
                        <button className="back_to_list" onclick="location.href = 'notice.html' ">목록으로 돌아가기</button>
                    </div>
                </div>


            </div>


        </>
    );

}


export default NoticeViewPage;







