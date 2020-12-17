import styled from 'styled-components'


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`


export const Buttons = styled.div`
    margin-top: ${({theme}) => theme.spacing.sm}px;
    width: 70%;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


export const AutocompleteStyles = styled.div`
    font-family: ${({theme}) => theme.fonts.first} !important;

    & .MuiAutocomplete-root {
        width: 70%;
        max-width: 400px;
        background-color: ${({theme}) => theme.colors.text};
        color: ${({theme}) => theme.colors.foreground};
        border: none;
        height: 55px;
        box-shadow: ${({theme}) => theme.defaultShadow};
        border-radius: 25px;
        outline: none;
        font-family: ${({theme}) => theme.fonts.first} !important;
    
    .MuiAutocomplete-input {
        padding: 10px 10px !important;
        color: ${({theme}) => theme.colors.foreground};
    
    }
    
    & label {
        font-family: ${({theme}) => theme.fonts.first} !important;
        color: ${({theme}) => theme.colors.foreground};
    
    }
    
    & .MuiOutlinedInput-notchedOutline {
        border-color: transparent;
        border-radius: 25px;
    }
    
    &:hover .MuiOutlinedInput-notchedOutline {
        border-width: 0;
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-width: 0;
    
    }
    
    & .MuiInputLabel-outlined.MuiInputLabel-shrink {
        color: ${({theme}) => theme.colors.contrast};
        transform: translate(20px, 0px) scale(0.75);
    }     
    // !!! More styles is in index.css.jsx !!!
}
`
