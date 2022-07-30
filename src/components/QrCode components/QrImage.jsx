import styled from "styled-components";

function QrImage() {
    const Image = styled.img`
    height: 300px;
    margin: 15px;
    border-radius: 3%;
    `
    return <Image src="/images/image-qr-code.png" alt="Qr code linking to frontendmentor.io"/>
    
}

export default QrImage;