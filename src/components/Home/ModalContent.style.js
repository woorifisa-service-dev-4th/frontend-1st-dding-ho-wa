import styled  from 'styled-components';

export const ModalContentStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
    height: 65%;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 2;


    .container_modal_content {
        text-align: center;
    }

    .btn_game_start {
        cursor: pointer;
        background-color: #fcc338;
        color: #000000;
        width: 170px;
        height: 56px;
        border: none;
        transition: background-color 0.3s ease;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 24px;
        font-weight: 700;
        border-radius: 52px;
        box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.25);
    }

    .btn_game_start:hover {
        background-color: #e64a19;
    }

    .text_description {
        font-size: 60px;
        font-weight: 400;
        font-family: Yoon독립체;
        margin-top: 1.5rem;
        margin-bottom: 3rem;
    }

    .text_content_01,
    .text_content_02,
    .text_content_03 {
        font-family: Yoon독립체;
        font-size: 25px;
        margin-top: 1rem;
        margin-bottom: 2rem;
        font-weight: lighter;
    }

    .text_name_input {
        font-size: 25px;
    }

    .text_team_name {
        display: flex;
        justify-content: end;
        font-size: 20px;
        padding-bottom: 0.5rem;
    }

    .text_name_input input {
        margin-top: 32px;
        background-color: #9e9e9e;
        border: none;
        width: 300px;
        height: 45px;
        border-radius: 5rem;
        font-size: 30px;
        padding-left: 15px;
        color: #ffffff;
        font-family: Yoon독립체;
        margin-left: 10px;


`;