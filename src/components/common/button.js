import styled, {css} from "styled-components";

const Button = styled.button`
 color: white;
background: ${p => p.secondary ? '#F76E11' : '#0A19;'}; 

${p => p.large? css`
padding: 8px;
font-size: 1em;
padding: 8px;

border-radius: 8px;
` : css`

width: 163px;
height: 55px;
display: block;
padding: 8px;
width: 50%;
margin-left: 85px;
border: 1px solid #ccc;


`};



&:disabled{
    background: #eee;
    color: #666;
}
`;

export {Button};