import Styled from 'styled-components';

const HeaderStyle = Styled.div`
    .main-header {
        background-color: #333;
        position: relative;
        height: 80px;
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
        text-decoration: none;
        color: white;
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
                background-color: #333;
            }
        }
    }
`;

const FooterStyle = Styled.div`
    footer {
        background-color: #333;
        height: 50px;
        padding-top: 10px;
        p {
            margin: 0;
        }
    }
`;

export {
    HeaderStyle,
    FooterStyle,
    
};