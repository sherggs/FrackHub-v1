import styled, {css} from "styled-components";

const Button = styled.button`
 color: white;
background: ${p => p.secondary ? '#F76E11' : '#0A19;'}; 

${p => p.large? css`
padding: 8px;
font-size: 1em;
padding: 8px;
width: 100%;
border-radius: 8px;
` : css`
padding: 8px;
font-size: 1em;
border-radius: 8px;
font-weight: bold;
width: 100%;
display: block;
white-space: none;
`};



&:disabled{
    background: #eee;
    color: #666;
}
`;

export {Button};