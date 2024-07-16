import React, { useState } from 'react';
// import './App.css'; // 필요한 스타일 파일을 import 합니다.

function MovieTab() {
    const [activeTab, setActiveTab] = useState('tab1');

    const TabClick = (tab) => {
        setActiveTab(tab);
    };

    const Tab = ({ tabMenu, onClick, isClick }) => (
        <div
            className={`tab ${isClick ? 'active' : ''}`}
            onClick={onClick}
        >
            {tabMenu}
        </div>
    );

    const TabContent = ({ children }) => (
        <>
            {children}
        </>
        
    );

    const reviewInfo = [
        { reviewWriter: '본인1', reviewContent: '가나다라마바사ㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂㅂ', reviewTime: '24-06-18', reviewStar: "✫5", reviewDelete: "≡" },
        { reviewWriter: '본인2', reviewContent: 'qwertasdfg', reviewTime: '24-06-18', reviewStar: "✫5", reviewDelete: "≡" },
        { reviewWriter: '본인3', reviewContent: '123456789', reviewTime: '24-06-18', reviewStar: "✫5", reviewDelete: "≡" },
        { reviewWriter: '본인4', reviewContent: '!@#$%^&*()', reviewTime: '24-06-18', reviewStar: "✫5", reviewDelete: "≡" },
    ];

    return (
        <>
            <div className='tabDiv'>
                <div className='tabMenu'>
                    <Tab tabMenu='리뷰' onClick={() => TabClick('tab1')} isClick={activeTab === 'tab1'} />
                    <Tab tabMenu='예고편' onClick={() => TabClick('tab2')} isClick={activeTab === 'tab2'} />
                </div>
                <div className='tab-content'>
                    {activeTab === 'tab1' && (
                        <TabContent>
                            <>
                                
                                    {reviewInfo.map((review, index) => (
                                        <ul className="review_ul" key={index}>
                                            <li className="reviewWriter">{review.reviewWriter}</li>
                                            <li className="reviewContent">{review.reviewContent}</li>
                                            <li className="reviewTime">{review.reviewTime}</li>
                                            <li className="reviewStar">{review.reviewStar}</li>
                                            <li className="reviewDelete"><button className='reviewDeleteBtn'>≡</button></li>
                                        </ul>
                                    ))}
                                
                                {/* <!-- 리뷰 페이지 번호 창 --> */}
                                <div class="review_no">
                                    <ul class="review_no_ul">
                                        <li>{'<'}</li>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>
                                        <li>5</li>
                                        <li>6</li>
                                        <li>7</li>
                                        <li>8</li>
                                        <li>9</li>
                                        <li>10</li>
                                        <li>{'>'}</li>
                                    </ul>
                                </div>
                            </>
                        </TabContent>
                    )}
                    {activeTab === 'tab2' && (
                        <TabContent>
                            <iframe
                                width="400"
                                height="200"
                                src="https://www.youtube.com/embed/_bo1XFtQbMs?si=lWfv8lVyn-OtKmty"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </TabContent>
                    )}
                </div>
            </div>
        </>
    );
}

export default MovieTab;
