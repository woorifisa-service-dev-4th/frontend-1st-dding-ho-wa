import styled from 'styled-components';

export const ButtonStyles = styled.div`
    z-index:2;
    
    button{
        cursor: pointer;
    }
    .btn_yellow{
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
    .btn_yellow:hover {
        background-color: #e64a19;
    }
    //돌아가기
    .btn_black {
        margin-top: 20px;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background: black;
        color: white;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 600;
        line-height: 2.5;
        box-shadow: 4px 4px 5px 2px rgba(0, 0, 0, 0.25);
    }
    // 페이지 이동 버튼
    .btn_black:hover {
        background: #333;
    }
    .btn_prev , .btn_next{
        padding: 10px 20px;
        font-size: 22px;
        font-weight: 700;
        border-radius: 12px;
        background: #fff;
        box-shadow: 3px 4px 8.3px 0px rgba(0, 0, 0, 0.25);
        border: none;
    }
    .btn_prev:disabled,
    .btn_next:disabled {
        opacity: 0.1;
        box-shadow: none;
    }


`;
