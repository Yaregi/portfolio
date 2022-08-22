import $ from 'jquery';
import React, { useEffect, useState, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import { Link } from 'react-scroll';
import 'aos/dist/aos.css';
import './Main.css';

gsap.registerPlugin(ScrollTrigger)


const Main = () => {


    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [cursorVariant, setCursorVariant] = useState('default');

    console.log(mousePosition);

    const imgRef = useRef(null);
    useEffect(() => {
        AOS.init();

        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window > addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10

        },
        text: {
            width: 150,
            height: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75
        }
    }

    const textOver = () => setCursorVariant('text')
    const textOut = () => setCursorVariant('default')



    gsap.to('video', {
        scale: 1.2,
        duration: 6,
        scrollTrigger: {
            trigger: '.son',
            start: 'bottom 40%;',
            end: 'bottom 20%',
            toggleActions: 'restart none none none',
            scrub: 4,
        }
    })


    gsap.to('.tits', {
        scale: 1.2,
        duration: 6,
        scrollTrigger: {
            trigger: '.tits',
            start: 'top 80%;',
            end: 'top 50%',
            toggleActions: 'restart none none none',
            scrub: 4,
        }
    })

    gsap.to('.page5 .tit', {
        translateX: 0,
        duration: 6,
        scrollTrigger: {
            trigger: '.page5',
            start: 'top 100%;',
            end: 'top 90%',
            toggleActions: 'restart none none none',
            scrub: 4,
        }
    })


    $(function () {

        let winHeight = $(window).height();

        let page4 = $('.page4 .tbox');
        let page6 = $('.page6 .tbox');
        let p2_offset = $('.page2').offset().top;
        let p3_offset = $('.page3').offset().top;
        let p4_offset = $('.page4').offset().top;
        let p5_offset = $('.page5').offset().top;
        let p6_offset = $('.page6').offset().top;
        let p7_offset = $('.page7').offset().top;


        $(window).on('resize', function () {
            winHeight = $(window).height();
        });


        $(window).on('scroll', function () {

            let scr = $(this).scrollTop();

            if (scr >= p2_offset) {
                $('.son text').css('display', 'block');
                $('video').trigger('pause');
            } else {
                $('video').trigger('play');
            }
        })

        $(window).on('scroll', function () {

            let scr = $(this).scrollTop();

            if (scr >= p4_offset) {
                page4.stop().addClass('fix')

            }
            else {
                page4.stop().removeClass('fix')

            }

        })

        $(window).on('scroll', function () {

            let scr = $(this).scrollTop();

            if (scr >= p6_offset) {
                page6.stop().addClass('fix')
            } else {
                page6.stop().removeClass('fix')
            }

        })

        $(window).on('scroll', function () {

            let scr = $(this).scrollTop();

            if (scr >= p7_offset * 1.2) {
                $('.tit text').css('display', 'block');
            }
        })
        let f = 0;
        $('div#pcWallpaper .page4 .bgbox:nth-child(1)').on('click', function (e) {
            e.preventDefault();
            $(this).find('a').css('opacity', '0');
            if (f % 2 == 0) {
                $(this).find('a').css('opacity', '0');
            } else if (f % 2 == 1) {
                $(this).find('a').css('opacity', '1');
            }
            f++;
        });



        $('div#pcWallpaper .page4 .bgbox:nth-child(2)').on('click', function (e) {
            e.preventDefault();
            $(this).find('a').css('opacity', '0');
            if (f % 2 == 0) {
                $(this).find('a').css('opacity', '0');
            } else if (f % 2 == 1) {
                $(this).find('a').css('opacity', '1');
            }
            f++;

        });

        $('div#pcWallpaper .page4 .bgbox:nth-child(3)').on('click', function (e) {
            e.preventDefault();
            $(this).find('a').css('opacity', '0');
            if (f % 2 == 0) {
                $(this).find('a').css('opacity', '0');
            } else if (f % 2 == 1) {
                $(this).find('a').css('opacity', '1');
            }
            f++;
            console.log(f);
        });

        $('div#pcWallpaper .page4 .bg img').on('mouseover', function () {

            $('.cursor').text('VIEW CLICK').css({
                textAlign: 'center',
                lineHeight: '150px'
            })
        }).on('mouseout', function () {
            $('.cursor').text('')
        });

        $('div#pcWallpaper .page4 .bg .bgbox:nth-child(1) img').on('mouseover', function () {
            $('div#pcWallpaper>.page4 .tit h1').text('DONG-A PHARM')
            $('div#pcWallpaper>.page4 .tit h2').text('WEB SITE REDESIGN | UX/UI | HTML/CSS/JQUERY')
            $('div#pcWallpaper>.page4 .tit p').text('4 DAY DESIGN / 4 DAY PUBLISHING')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(1) a').attr('href', 'https://dpharm.netlify.app/')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(2)').css('display', 'none');
        })

        $('div#pcWallpaper .page4 .bg .bgbox:nth-child(2) img').on('mouseover', function () {
            $('div#pcWallpaper>.page4 .tit h1').text('COUNTRY TOUR')
            $('div#pcWallpaper>.page4 .tit h2').text('WEB SITE REDESIGN | UX/UI | HTML/CSS/JQUERY')
            $('div#pcWallpaper>.page4 .tit p').text('1 WEEK DESIGN / 1 WEEK PUBLISHING')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(1) a').attr('href', 'https://sigoltour.netlify.app/')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(2)').css('display', 'block');
            $('div#pcWallpaper>.bbgtit>.img1').find('img').attr('src', './img/g1.jpg');
        })

        $('div#pcWallpaper .page4 .bg .bgbox:nth-child(3) img').on('mouseover', function () {
            $('div#pcWallpaper>.page4 .tit h1').text('NINTENDO SHOP')
            $('div#pcWallpaper>.page4 .tit h2').text('WEB SITE REDESIGN | UX/UI | HTML/CSS/JQUERY/REACT')
            $('div#pcWallpaper>.page4 .tit p').text('1 WEEK DESIGN / 9 DAY PUBLISHING')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(1) a').attr('href', 'https://yaregi.github.io/nintendo/')
            $('div#pcWallpaper>.page4 .tit ul li:nth-child(2)').css('display', 'block');
            $('div#pcWallpaper>.bbgtit>.img1').find('img').attr('src', './img/g2.jpg');
        })

        $('div#pcWallpaper>.page4 .tit ul li:nth-child(2) a').on('click', function (e) {
            e.preventDefault();
            $('div#pcWallpaper>.bbg').fadeIn();
            $('div#pcWallpaper>.bbgtit').fadeIn();
            $('div#pcWallpaper>.bbgtit>.img1 img').fadeIn();
        })


        $('div#pcWallpaper>.bbg').on('click', function () {
            $(this).css('display', 'none');
            $('div#pcWallpaper>.bbgtit').css('display', 'none');
            $('div#pcWallpaper>.dl').css('display', 'none');
        })

        $('div#pcWallpaper>.page6 .tit a').on('click', function (e) {
            e.preventDefault();
            $('div#pcWallpaper>.bbg').fadeIn();
            $('div#pcWallpaper>.bbgtit').fadeIn();
            $('div#pcWallpaper>.dl').fadeIn();
            $('div#pcWallpaper>.bbgtit>.img1').find('img').attr('src', './img/mock.jpg').fadeIn();
        })

    })

    return (

        <div id='pcWallpaper'>
            <div id='intro'>
                <h1 className='tit'>
                    WELCOME MY PORTFOLIO
                </h1>
            </div>

            <div id='1' className='page1'>
                <div onMouseEnter={textOver} onMouseLeave={textOut} className='title'>
                    <p>안녕하세요</p>
                    <p>저의 포트폴리오에 오신걸 환영합니다! 하나하나 배우며 끊임없이 성장해가는</p>
                    <p>우주 같은 웹 퍼블리셔 최현용입니다. 포트폴리오를 보시고 필요한 점이 있으시면</p>
                    <p>언제든지 연락주시기 바랍니다. 감사합니다!</p>
                </div>
                <div onMouseEnter={textOver} onMouseLeave={textOut} className='util'>
                    <ul>
                        <li><Link to='1' spy={true} ><a href="#">HOME</a></Link></li>
                        <li><Link to='2' spy={true}><a href="#">ABOUT</a></Link></li>
                        <li><Link to='3' spy={true}><a href="#">PORTFOLIO</a></Link></li>
                        <li><Link to='4' spy={true}><a href="#">UX / UI</a></Link></li>
                        <li><Link to='5' spy={true}><a href="#">BOOK</a></Link></li>
                        <li><Link to='6' spy={true} ><a href="#">EPILOGUE</a></Link></li>
                    </ul>
                </div>
                <video autoPlay loop muted>
                    <source src='./video.mp4' type='video/mp4'></source>
                </video>
                <div onMouseEnter={textOver} onMouseLeave={textOut} className='title-box'>
                    <h1>2022 PORTFOLIO BY CHOI HYEON YOUNG</h1>
                </div>
                <div className='text-box' >
                    <h1>PORTFOLIO</h1>

                </div>

                <div className='scrolldown'>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className='page2'>
                <div className='bg'></div>
                <svg className="son" width="357" height="980" viewBox="0 0 357 422"
                >
                    <text x="140" y="40%" >I</text>
                    <text x="100" y="50%" >A</text>
                    <text x="60" y="60%" >M</text>
                    <text x="100" y="70%">D</text>
                    <text x="140" y="80%">E</text>
                    <text x="180" y="90%">V</text>
                    <text x="220" y="100%">E</text>
                    <text x="180" y="110%">L</text>
                    <text x="140" y="120%">O</text>
                    <text x="100" y="130%">P</text>
                    <text x="60" y="140%">E</text>
                    <text x="100" y="150%">R</text>
                    <text x="140" y="160%">S</text>

                </svg>
            </div>

            <div className='page3'>
                <div className='bg'>
                    <div className='tits' >
                        <h1>우주처럼 무궁무진한 아이디어로</h1>
                        <h1>항상 새로운 시도를 두려워하지 않는 개발자가 되겠습니다</h1>
                    </div>
                    <div id='2' className='about' data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="50">
                        <h1>ABOUT ME</h1>

                        <div className='this'>
                            <div className='me'>
                                <div className='photo'>
                                    <img src='./img/photo.jpg'></img>
                                </div>
                                <div className='s'>
                                    <p>최현용 CHOI HYEON YOUNG</p>
                                    <p>1996.07.15</p>
                                    <p>roi156@naver.com</p>
                                </div>
                                <div className='z'>
                                    <p>2022 NCS 직업훈련 - 웹 퍼블리셔 과정 수료</p>
                                    <p>2021 동의대학교 산업디자인학과 중퇴</p>
                                    <p>2018 경남정보대 모바일컨텐츠과 졸업</p>
                                </div>
                            </div>
                            <div className='skill'>
                                <ul>
                                    <li>
                                        <h1>01</h1>
                                        <h2>WEB PUBLISHING</h2>
                                        <p>HTML,CSS에 능숙하며 현재 8월 초 SCSS를 공부하고 있습니다. CSS 내에서 ID 셀렉터를 사용하며 IMPORTANT 구문을 가능하면 쓰지 않는걸 선호합니다.</p>
                                    </li>
                                    <li>
                                        <h1>02</h1>
                                        <h2>OPEN SOURCE / LIBRARY</h2>
                                        <p>직접 만든 프로젝트는 없지만 REACT.JS에 오픈소스 프로젝트 및 라이브러리를 땡겨다 쓰는건 가능합니다.</p>
                                    </li>
                                    <li>
                                        <h1>03</h1>
                                        <h2>PHOTO SHOP / ILLUSTRATOR</h2>
                                        <p>포토샵과 일러스트레이터의 전체적인 기능을 숙지하고 있으며 아이콘 및 이미지 편집을 할 수 있습니다.</p>
                                    </li>
                                    <li>
                                        <h1>04</h1>
                                        <h2>JAVA SCRIPT / JQUERY / REACT</h2>
                                        <p>플러그인 활용에 능숙하며 효과 및 애니메이션 구현이 가능합니다. 그리고 독학으로 REACT를 공부할 땐 매우 힘들었지만 현재는 REACT를 이용하여 공부 초기에 사용하던 방식보다 편하게 사용하고 있습니다.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id='3' className='page4'>
                <span></span>
                <div className='tbox'>
                    <div className='txt'>
                        <p>PORTFOLIO</p>
                    </div>
                    <div className='tit'>
                        <h1 onMouseEnter={textOver} onMouseLeave={textOut}>DONG-A PHARM</h1>
                        <h2 onMouseEnter={textOver} onMouseLeave={textOut}>WEB SITE REDESIGN | UX/UI | HTML/CSS/JQUERY</h2>
                        <p onMouseEnter={textOver} onMouseLeave={textOut}>4 DAY DESIGN / 4 DAY PUBLISHING</p>

                        <ul>
                            <li> <a href="https://dpharm.netlify.app/">WEB VIEW</a> </li>
                            <li> <a href="#">VIEW PROCESS</a> </li>
                        </ul>
                    </div>

                </div>
                <div onMouseEnter={textOver} onMouseLeave={textOut} className='bg'>
                    <div className='bgbox'>
                        <a href="#"><img src="./img/img1.png"></img></a>
                        <span></span>
                    </div>
                    <div className='bgbox'>
                        <a href="#"><img src="./img/img3.png"></img></a>
                        <span></span>
                    </div>
                    <div className='bgbox'>
                        <a href="#"><img src="./img/img2.png"></img></a>
                        <span></span>
                    </div>

                </div>
            </div>
            <div id='4' className='page5'>
                <div className='tit'>
                    {/*  <span></span> */}
                    <h1>MOBILE APP UI</h1>
                    <p>Rustic Day</p>
                    <p>Responsive app ui design and site creating</p>
                    <a href='https://rusticday.netlify.app/'>WEB VIEW</a>
                </div>
                <div className='img'>
                    <div className='bg1' data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="200">
                        <img src='./img/ui1.png'></img>
                    </div>
                    <div className='bg2' data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="400">
                        <img src='./img/ui2.png'></img>
                    </div>
                    <div className='bg3' data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="600">
                        <img src='./img/ui3.png'></img>
                    </div>
                </div>

            </div>
            <div id='5' className='page6'>
                <div className='bookimg'>
                    <img src='./img/book1.png'></img>
                </div>
                <div className='tbox'>
                    <div className='txt'>
                        <p>BOOK</p>
                    </div>
                    <div className='tit'>
                        <h1>TRADE KOREA</h1>
                        <h2>PHOTOSHOP/ILLUSTRATOR</h2>
                        <p>2018년, 한국무역협회 콘텐츠 공모전에서 한국 무역 활동 내용을 책자로 제작하였습니다.</p>

                        <a href="#">VIEW PROCESS</a>
                    </div>
                </div>
            </div>
            <div id='6' className='page7'>
                <svg className="tit" width="60%" height="auto" viewBox="0 0 "
                >
                    <text x="320" y="30%" >T</text>
                    <text x="420" y="30%" >H</text>
                    <text x="520" y="30%" >A</text>
                    <text x="620" y="30%">N</text>
                    <text x="720" y="30%">K</text>
                    <text x="410" y="45%">F</text>
                    <text x="510" y="45%">O</text>
                    <text x="610" y="45%">R</text>
                    <text x="180" y="60%">V</text>
                    <text x="280" y="60%">I</text>
                    <text x="380" y="60%">S</text>
                    <text x="480" y="60%">I</text>
                    <text x="580" y="60%">T</text>
                    <text x="680" y="60%">I</text>
                    <text x="780" y="60%">N</text>
                    <text x="880" y="60%">G</text>
                </svg>
                <div className='txt'>
                    <h2>긴 긁 읽어주셔서 감사합니다. 발전하는 개발자 최현용이었습니다.</h2>
                    <h2>포트폴리오에 대한 피드백이나 문의사항이 있을 경우</h2>
                    <h2>연락주시면 최대한 빨리 답장해드리겠습니다. 감사합니다!</h2>
                </div>
                <div className='mail'>
                    <p>E-MAIL : roi156@naver.com </p>
                    <p>+82 010-9120-939X</p>
                </div>
            </div>
            <motion.div
                className='cursor'
                variants={variants}
                animate={cursorVariant}
            >
            </motion.div>

            <div className='bbg'>
            </div>
            <div className='dl'>
                <a href="#" download='book.pdf'>PDF 다운로드</a>
            </div>
            <div className='bbgtit'>
                <div className='img'>
                    <img src='./img/mock.jpg'></img>
                </div>
                <div className='img1'>
                    <img src='./img/g1.jpg'></img>
                    <a href="https://sigoltour.netlify.app/"></a>
                </div>
            </div>

        </div >

    )
}

export default React.memo(Main);



