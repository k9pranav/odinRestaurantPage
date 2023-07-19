import createContentPage from "./contact";
import menuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () => {

    content = document.querySelector('#content');

    const contact = document.createElement('div');
    const menu = document.createElement('div');
    const home = document.createElement('div');

    contact.setAttribute('id', 'contactButton');
    menu.setAttribute('id', 'menuButton');
    home.setAttribute('id', 'homeButton');

    contact.textContent = 'contact'
    menu.textContent = 'menu'
    home.textContent = 'Home'

    contact.addEventListener('click', () => {clearContent(); createContentPage();});
    menu.addEventListener('click', () => {clearContent(); menuPage();});
    home.addEventListener('click', () => {clearContent(); createRestaurantHomePage();});


    content.appendChild(contact);
    content.appendChild(menu);
    content.appendChild(home);

}

function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content');

    if (pageContent) {
        content.removeChild(pageContent);
    }

}

export default createTabs