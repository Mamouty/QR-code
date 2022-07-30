import styled from "styled-components";
import QrImage from "./QrImage";
import QrDescription from "./QrDescription";
import QrTitle from "./QrTitle";


function QrBody() {
    const Wrapper = styled.div`
    height: 520px;
    width: 330px;
    background-color: white;
    box-shadow:  0 5px 20px rgba(0,0,0,0.05);
    border-radius: 20px;
    margin: auto;
    text-align: center;
    `
    return (
        <Wrapper>
           <QrImage />
           <QrTitle />
           <QrDescription />
        </Wrapper>
    );
}

export default QrBody;