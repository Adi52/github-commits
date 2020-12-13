import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin: ${({ theme }) => theme.spacing.sm}px 0;
`;
