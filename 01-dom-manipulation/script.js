//EASY
// Task 1: Change h1 text
const heading = document.getElementById('main-heading');
heading.textContent = "My Awesome shop";

// Task 2: Change tagline with HTML
const tagline = document.querySelector('.tagline');
tagline.innerHTML = "Find the <strong>best</strong> products here!";

// Task 3: Update footer with name and year
const footer = document.querySelector("footer p");
footer.textContent = "Avanish Kumar 2025"

//MEDIUM
const mainContainer = document.getElementById('app-container');

// Create About Us section
const aboutHeading = document.createElement('h2');
aboutHeading.textContent = "About Us";

const aboutParagraph = document.createElement('p');
aboutParagraph.textContent = "We are a small team passionate about quality products."

// Append to main container
mainContainer.appendChild(aboutHeading);
mainContainer.appendChild(aboutParagraph);


//HARD

// Create contact info div
const contactDiv = document.createElement('div');
contactDiv.className = 'contact-info';

// Create email paragraph
const emailPara = document.createElement('p');
emailPara.innerHTML = 'Email: contact@awesomeshop.com'

// Create phone paragraph
const phonePara = document.createElement('p');
phonePara.innerHTML = 'Phone: 123-456-7890'

// Append paragraphs to contact div
contactDiv.appendChild(emailPara);
contactDiv.appendChild(phonePara);

// Get footer and its parent
const pageFooter = document.querySelector('footer'); 
const footerParent = pageFooter.parentNode; 

// Insert contact info before footer
footerParent.insertBefore(contactDiv, pageFooter);