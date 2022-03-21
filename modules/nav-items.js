const bookList = document.querySelector('.book-list');
const header = document.querySelector('.header');
const newBook = document.querySelector('.add-new');
const contact = document.querySelector('.contact-section');
const titleH1 = document.querySelector('h1');
const navItems = Array.from(document.querySelectorAll('.navItems')[0].children);

export default function navigate(key) {
  switch (key) {
    case 'title-h1':
      bookList.classList.remove('hide');
      header.classList.remove('hide');
      newBook.classList.add('hide');
      contact.classList.add('hide');
      break;
    case 'list':
      bookList.classList.remove('hide');
      header.classList.remove('hide');
      newBook.classList.add('hide');
      contact.classList.add('hide');
      break;
    case 'add-new':
      bookList.classList.add('hide');
      header.classList.add('hide');
      newBook.classList.remove('hide');
      contact.classList.add('hide');
      break;
    case 'contact-section':
      bookList.classList.add('hide');
      header.classList.add('hide');
      newBook.classList.add('hide');
      contact.classList.remove('hide');
      break;
    default:
      break;
  }
}

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navigate(e.target.parentElement.id);
  });
});

titleH1.addEventListener('click', (e) => {
  navigate(e.target.id);
});
