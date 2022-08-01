import styled from "styled-components";

function QrDescription() {
    const Text = styled.p`
        width: 280px;
        margin: 15px auto 0;
        font-weight: 400;
        font-size: 17px;
        color: hsl(220, 15%, 55%);
    `
    return <Text>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level!</Text>;
} 

export default QrDescription;