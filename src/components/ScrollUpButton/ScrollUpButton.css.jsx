import styled from 'styled-components';
import {ArrowUpCircle} from "@styled-icons/ionicons-solid/ArrowUpCircle";


export const ScrollIcon = styled(ArrowUpCircle)`
  width: ${({theme}) => theme.spacing.xl * 2}px;
  color: ${({theme}) => theme.colors.contrast};
  transition: color 0.4s;
  
  &:hover {
      color: ${({theme}) => theme.colors.lightenContrast};
  }
`