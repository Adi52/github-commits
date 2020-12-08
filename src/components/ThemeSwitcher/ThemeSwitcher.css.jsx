import styled from 'styled-components'

export const Switcher = styled.div`             
    label { 
        position: relative ; 
        display: inline-block; 
        width: 40px; 
        height: 20px; 
        background-color: ${({ theme }) => theme.colors.foreground}; 
        border-radius: 30px; 
        border: 2px solid gray; 
        user-select: none;
    } 
    
    label:after { 
        content: ''; 
        position: absolute; 
        width: 18.5px; 
        height: 18.5px; 
        border-radius: 50%; 
        border: 1px solid ${({ theme }) => theme.colors.foreground};
        background-color: gray; 
        top: -0.93px;  
        left: -0.8px; 
        transition:  all 0.3s; 
    } 
        
    label span {
      font-size: 13px;
    }
        
    input:checked + label::after { 
      left : 20px;  
    } 
       
    input {  
      display : none; 
    } 
`;
