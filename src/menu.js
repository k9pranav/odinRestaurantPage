
const menuPage = () => {
    const content = document.querySelector('#content');

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');

    const menu1 = document.createElement('li');
    menu1.textContent = 'Lasagna';

    const menu2 = document.createElement('li');
    menu2.textContent = 'Lasagna de Garfield';


    menuList.appendChild(menu1);
    menuList.appendChild(menu2);

    pageContent.appendChild(menuList);

    content.appendChild(pageContent);

} 

export default menuPage;