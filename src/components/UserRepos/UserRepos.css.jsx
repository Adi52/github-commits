import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
  min-width: 900px;
`;


export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  transform: translateX(-8px); // fix bug with loader :(
`
