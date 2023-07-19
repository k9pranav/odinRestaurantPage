

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');

    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = "../pasta1.jpg";
    image.height = '200';
    pageContent.appendChild(image);

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to PastaLicious!!";
    pageContent.appendChild(headline);

    const copy = document.createElement("p");
    copy.textContent = "The Best Pasta Restaurant in the Town";
    pageContent.appendChild(copy);

    content.appendChild(pageContent)

}

export default createRestaurantHomePage;