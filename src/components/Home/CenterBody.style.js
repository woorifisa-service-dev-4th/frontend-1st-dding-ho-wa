import styled  from 'styled-components';

export const CenterBodyStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .img_bag {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        filter: drop-shadow(12px 17px 5.2px rgba(0, 0, 0, 0.25));
    }

    .img_bag_top {
        position: absolute;
        top: 54%;
        left: 50%;
        width: 60vw;
        will-change: transform, opacity;
        transform: translate(-50%, -50%) translateZ(0);
    }

    .container_home_start_animation {
        position: relative;
        top: -100px;
        width: 100%;
        height: 40vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        animation: slideDown 1.5s ease forwards;
    }

    @keyframes slideDown {
        0% {
            top: -500px;
        }
        100% {
            top: 0%;
        }
    }

    .text_home_01 {
        position: relative;
        top: 25%;
        color: #b01017;
        font-size: 12vw;
        margin-bottom: 5px;
    }

    .start_button_home {
        position: absolute;
        top: 85%;
        background-color: #fcc338;
        color: black;
        border: none;
        border-radius: 40px;
        cursor: pointer;
        font-size: 24px;
        transition: background-color 0.3s ease;
        box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.25);
        z-index: 10;
        width: 170px;
        font-weight: 700;
        height: 56px;
        display: flex;
        margin-bottom: 2rem;
        justify-content: center;
        align-items: center;
        text-align: center;
        white-space: normal;
    }

    .start_button_home:hover {
        background-color: #e64a19;
    }

`;