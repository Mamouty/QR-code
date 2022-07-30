import styled from "styled-components";
import QrBody from "./QrCode components/QrBody";

function QrCode() {
    const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    `
    return (
        <Section>
            <QrBody />
        </Section>
        );

}

export default QrCode;