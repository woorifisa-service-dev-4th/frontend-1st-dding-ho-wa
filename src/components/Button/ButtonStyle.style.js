import styled from 'styled-components';

export const GlobalStyles = styled.button`
    .btn{
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
    .btn:hover {
        background-color: #e64a19;
    }
`;
