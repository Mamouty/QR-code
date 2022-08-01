import styled from "styled-components";
import qrimage from "../../images/image-qr-code.png";

function QrImage() {
    const Image = styled.img`
    height: 300px;
    margin: 15px;
    border-radius: 3%;
    `
    return <Image src={qrimage} alt="Qr code linking to frontendmentor.io"/>
    
}

export default QrImage;