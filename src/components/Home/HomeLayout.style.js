import styled from 'styled-components';

export const HomeLayoutStyle = styled.div`
    z-index: 1;
    display: none;

    height: 100%;

    html, body {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 1090px) {
        display: flex;
    }
`;