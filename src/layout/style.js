import Styled from 'styled-components';

const HeaderStyle = Styled.div`
    .main-header {
        background-color: rgba(0, 0, 0, 0.38);
        position: relative;
        z-index: 10;
    }
    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0;
    }
    .logo {
        width: 300PX;
        padding-top: 0px;
        -webkit-box-flex: 0;
        -webkit-flex: 0 auto;
        -ms-flex: 0 auto;
        flex: 0 auto;
        text-shadow: 1px 1px 6px #000;
        img {
            width: 100%;
        }
    }
    .link {
        display: flex;
        align-items: center;
        a.nav-link {
            padding: 20px 10px;
            color: #eeedf2;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            text-decoration: none;
            color: white;
            cursor: pointer;
            font-size: 12px;
            &:hover {
                color: white;
            }
        }
        button {
            background: transparent;
            border: 1px solid white;
            border-radius: 10px;
            padding: 10px 15px;
            color: white;
        }
    }
    .toggler {
        font-size: 22px;
        margin-right: 20px;
        display: none;
        @media(max-width: 991px) {
            display: block;
        }    
    }
    @media(max-width: 768px) {
        .container {
            .navbar:first-child {
                margin-left: calc(50% - 75px);
            }
        }
        .logo {
            width: 150px;
        }
        .navbar {
            position: unset;
            .navbar-collapse {
                position: absolute;
                top: 71px;
                left: 0;
                right: 0;
                padding: 20px;
                font-size: 22px;
                background-color: rgba(0, 0, 0, 0.38);
            }
        }
    }
    .video {
        margin-top: -110px;
        background-size: cover;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        overflow: scroll;
        width: 100%;
        height: calc(100vh + 100px);
        max-width: 100%;
        padding-left: 0px;
        -o-object-fit: scale-down;
        object-fit: scale-down;
        @media(max-width: 768px) {
            overflow: hidden;
            -o-object-fit: cover;
            object-fit: cover;
        }
        video {
            height: calc(100vh + 100px);
            background-size: cover;
            background-position: 50% 50%;
            position: absolute;
            margin: auto;
            width: 100%;
            right: -100%;
            bottom: -110%;
            top: -100%;
            left: -100%;
            object-fit: cover;
            z-index: 1;
        }
        .title {
            z-index: 1;
            .container {
                margin-top: 200px;
                margin-left: 100px;
            }
            h1 {
                font-family: Akira, sans-serif;
                text-align: left;
                text-shadow: 1px 1px 6px #000;
                font-size: 4em;
                line-height: 0.9375;
                font-weight: 700;
                letter-spacing: 0.04em;
            }
            p {
                margin-bottom: 0px;
                font-size: 18px;
                font-weight: 400;
            }
            @media(max-width: 768px) {
                .container {
                    margin: 0;
                    margin-top: 100%;
                    text-align: center;
                    .hero_wrap {
                        margin: 0 auto
                    }
                }
                h1 {
                    font-family: 'Akira expanded demo', sans-serif;
                    font-size: 3em;
                    line-height: 1;
                    font-size: 32px;
                    text-align: center;
                }
                p {
                    font-size: 11px;
                }
            }
        }
    }
`;

const FooterStyle = Styled.div`
    footer {
        background-size: cover;
        padding: 70px 0 20px;
        .row {
            display: flex;
            img {
                margin: 80px auto;
                width: 80%;
            }
            h4 {
                margin-top: 0px;
                margin-bottom: 20px;
                font-size: 22px;
                line-height: 1.5;
                text-decoration: underline;  
                font-family: Akira, sans-serif;
                @media(max-width: 991px) {
                    text-align: center;
                }
            }
            ul {
                list-style: none;
                padding: 0;
                @media(max-width: 991px) {
                    text-align: center;
                }
                li {
                    padding: 10px 0;
                    a {
                        font-size: 15px;
                        cursor: pointer;
                        color: white;
                        text-decoration: none;
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        p {
            font-size: 12px;
        }
    }
`;

export {
    HeaderStyle,
    FooterStyle,
    
};