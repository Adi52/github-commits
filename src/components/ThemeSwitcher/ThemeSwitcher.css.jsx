import styled from 'styled-components'


export const Switcher = styled.div`         
    label { 
        box-sizing: content-box;
        position: relative ; 
        display: inline-block; 
        width: 40px; 
        height: 20px; 
        background-color: ${({ theme }) => theme.colors.foreground}; 
        border-radius: 30px; 
        border: 2px solid gray; 
        user-select: none;
        cursor: pointer;
    } 
    
    label:after { 
        content: ''; 
        position: absolute; 
        width: 20px; 
        height: 20px; 
        border-radius: 50%; 
        border: 0.5px solid gray;
        background-color: gray; 
        top: -1px;  
        left: -1px; 
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
