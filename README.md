# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents 

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

# Overview 

### Screenshot

![](./public/images/Screenshot%20QR%20code.png)

### Links

- Solution URL: [GitHub repository](https://github.com/Mamouty/QR-code.git)
- Live Site URL: [GitHub Pages](https://mamouty.github.io/QR-code/)

## My process

### Built with

- HTML5
- CSS3
- [React](https://reactjs.org/) - JS library
- [styled-components](https://www.npmjs.com/package/styled-components) module

 ### What I learned

 I mostly learned how to use the styled-components and how to link images in react components.

 
There are many ways to add images when using React.js. One of them is linking the images from the public folder and the other is from the src folder. At the beginning I've tried using only the public one for all the images, but I realized that after deployment the images links inside the react components aren't working, since in fact those images have to be put inside the src folder; therefore I decided to split the images folder into tow, images to be used by the react components are put inside the src folder so that they can be displayed after deployment and the other ones in the public images folder. As for the process of linking the images I had to search through the internet how to use relative paths and absolute paths. The jsx code below shows how I had to import the qr code image so that I can use it inside the QrImage.jsx component:
```js
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
```
Concerning the styled-components for now I only used them in a basic way since I didn't use any props or complicated react feature in this project.

### Continued development 

I'm aiming to further my practice on the React.js library. In the next project I intend to use props for passing images and texts for simple component as in this project.

### Useful resources 

- [How to use relative and absolute paths](https://www.youtube.com/watch?v=hxto_sRZsBg) - This video help me understand how to use relative paths for the image links.
- [How to update an already deployed react project on gh-pages](https://github.com/Frnt-End/Update-React-in-GitHub-Pages) - I followed the steps from this README.md to update the changes I've made for my React project after I've deployed it.

## Author 

- Frontend Mentor - [@Mamouty](https://www.frontendmentor.io/profile/Mamouty)
- LinkedIn - [Mahmoud Guefri](https://www.linkedin.com/in/mahmoud-guefri-6b0269193/)

## Acknowledgments 

I would like to thank Matt Studdert, the founder of the Frontend Mentor for helping us practice on our skills with various project challenges and I also would like to thank Dr. Angela Yu for showing us in her full web development course this website and for all her great lessons.  