
const createContentPage = () => {

    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-Content');

    const form1 = createElement('form');
    form1.classList.add('contact-form');

    const heading = createElement('input');
    heading.type = 'text';
    heading.placeholder = "Enter Heading";
    form1.appendChild(heading);

    const adress = createElement('input');
    adress.type = 'text';
    adress.placeholder = 'Enter Address';
    form1.appendChild(adress);

    pageContent.appendChild(form1);
    content.appendChild(pageContent);

}

export default createContentPage;