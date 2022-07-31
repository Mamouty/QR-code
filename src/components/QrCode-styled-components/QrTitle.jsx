import React from "react";
import styled from "styled-components";

function QrTitle() {
    const Title = styled.h1`
    font-weight: 700;
    color: hsl(218, 44%, 22%);
    width: 280px;
    margin: 0 auto 10px;
    `
    return <Title>Improve your front-end skills by building projects</Title>;
}

export default QrTitle;