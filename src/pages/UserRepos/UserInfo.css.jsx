import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: ${({ theme }) => theme.minSectionHeight};
    max-width: 900px;
    margin: 0 auto;
`;