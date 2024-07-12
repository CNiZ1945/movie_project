import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export function RankingSlide() {


    const movieSlide = [
        {
            MovieTitle: "반지의 제왕",
            MovieContent: "Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!",
            MovieGenre: "판타지",
            MovieTime: "120분",
            MovieImg: "https://www.dune2.co.kr/assets/images/desktopbanner.jpg",

        },
        {
            MovieTitle: "반지의 제왕1111",
            MovieContent: "Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!",
            MovieGenre: "판타지",
            MovieTime: "120분",
            MovieImg: "https://gaming-cdn.com/images/products/6694/616x353/half-life-3-pc-game-cover.jpg?v=1707324174",

        },
        {
            MovieTitle: "반지의 제왕2222",
            MovieContent: "Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!",
            MovieGenre: "판타지",
            MovieTime: "120분",
            MovieImg: "https://deadline.com/wp-content/uploads/2023/04/harry-potter.jpg",

        },
        {
            MovieTitle: "반지의 제왕33333",
            MovieContent: "Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!",
            MovieGenre: "판타지",
            MovieTime: "120분",
            MovieImg: "https://image.cine21.com/resize/IMGDB/article/2004/1228/medium/154347_pl483[W578-].jpg",

        },
        {
            MovieTitle: "반지의 제왕",
            MovieContent: "Lorem, ipsum dolor sit amet consectetur adipi. Maiores sapiente la, accusamus officiis at ea quibusdam dignissimos iure voluptatem quas eligendi quaerat nihil, incidunt omnis!",
            MovieGenre: "판타지",
            MovieTime: "120분",
            MovieImg: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/cmLZ/image/2IUI0A_hLxCZXtOiMdQAfuIVKaY.jpg",

        },
    ]

    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        setSlideIndex((slideIndex + 1) % movieSlide.length);
    };

    const prevSlide = () => {
        setSlideIndex((slideIndex - 1 + movieSlide.length) % movieSlide.length);
    };

    return (




        <>
            <div className="slide">
                <div className="slide_page">
                    {
                        movieSlide.map((movieslide, index) => (
                            <>
                                <ul className="slide_ul" key={index} style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
                                    <li>
                                        <Link to="/user/MoviePage" className='white'>
                                            <figure >

                                                <img src={movieslide.MovieImg} alt="" className="img_slide" />
                                                <figcaption ye>
                                                    <p className="movie_title">{movieslide.MovieTitle}</p>
                                                    <p className="movie_content" >{movieslide.MovieContent}</p>
                                                    <p className="movie_genre" >{movieslide.MovieGenre}</p>
                                                    <p className="movie_time" >{movieslide.MovieTime}</p>
                                                </figcaption>
                                            </figure>
                                        </Link>
                                    </li>

                                </ul>
                            
                            </>

                        ))
                    }


                </div>
                <div className="btn prev">
                    <button className="prev" onClick={prevSlide}>prev</button>
                </div>
                <div className="btn next">
                    <button className="next" onClick={nextSlide}>next</button>
                </div>
                <div className="ranking_no">
                {movieSlide.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${slideIndex === index ? 'active' : ''}`}
                        onClick={() => setSlideIndex(index)}
                    >
                        {index + 1}/5
                    </span>
                ))}
            </div>
            </div>




        </>
    );


}





export default RankingSlide;