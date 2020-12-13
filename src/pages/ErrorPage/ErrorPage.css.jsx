import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme}) => theme.colors.text};
  padding: ${({theme}) => theme.spacing.xl*3}px;
  height: 83vh;
  
  h1 {
    font-size: 8rem;
    margin-block-end: 0;
    margin-block-start: 0;
  }
  
  h3 {
      font-size: 2rem;
  }
`;
