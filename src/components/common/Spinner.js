import styled, {keyframes} from "styled-components";

const Rotation = keyframes`
from{
    transform: rotate(0deg);
}

to{
    transform: rotate(360deg);
}
`;

const Spinner = styled.div`
    height: 60px;
    width: 60px;
    border: 1px solid #F76E11;
    border-radius: 50%;
    border-top: none;
    border-bottom: none;
    margin: 17px auto;
    animation: ${Rotation} 1s linear infinite;
`;

export {Spinner}