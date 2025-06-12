//Easy

const heading = document.getElementById('main-heading');
heading.textContent = "My Awesome shop";

const tagline = document.querySelector('.tagline');
tagline.innerHTML = "Find the <strong>best</strong> products here!";

const footer = document.querySelector("footer p");
footer.textContent = "Avanish Kumar 2025"

//Medium

const mainContainer = document.getElementById('app-container');

const aboutHeading = document.createElement('h2');
aboutHeading.textContent = "About Us";

const aboutParagraph = document.createElement('p');
aboutParagraph.textContent = "We are a small team passionate about quality products."

mainContainer.appendChild(aboutHeading);
mainContainer.appendChild(aboutParagraph);


//Hard

const contactDiv = document.createElement('div');
contactDiv.className = 'contact-info';

const emailPara = document.createElement('p');
emailPara.innerHTML = 'Email: contact@awesomeshop.com'

const phonePara = document.createElement('p');
phonePara.innerHTML = 'Phone: 123-456-7890'

contactDiv.appendChild(emailPara);
contactDiv.appendChild(phonePara);

const pageFooter = document.querySelector('footer'); 
const footerParent = pageFooter.parentNode; 

footerParent.insertBefore(contactDiv, pageFooter);