// Define the project data
const projects = [
  {
    name: 'BOOK STORE',
    client: 'REACT',
    description:
            'Book Store is a web application that provides a platform for users to browse , add and delete books.',
    image: './img/projects/project1.png',
    technologies: ['HTML', 'CSS', 'JavaScript','React', 'Redux'],
    liveLink: 'mohashyne.github.io/book_store/',
    sourceLink: 'https://github.com/mohashyne/book_store',
    projectCover: './img/projects/Snapshoot_Portfolio_1.svg',
    fullDescription: `
    Book Store is a web application that provides a platform for users to browse , add and delete books. The bookstore features a user-friendly interface with a wide selection of books, categorized for easy navigation
          `,
    canopy: ['Full Stack DEV', 2023],
  },
  {
    name: 'Uber Navigation',
    client: 'Uber',
    description:
            ' An event webpage (TechEx Block-Chain Expo) is designed and deployed which showcases my HTML, CSS, and JavaScript skills.',
    image: './img/projects/project2.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'mohashyne.github.io/Module1_Capstone/dist',
    sourceLink: 'https://github.com/mohashyne/Module1_Capstone',
    projectCover: './img/projects/Snapshoot_Portfolio_2.svg',
    fullDescription: `
    An event webpage (TechEx Block-Chain Expo) is designed and deployed which showcases my HTML, CSS, and JavaScript skills. Responsive content with JavaScript DOM manipulation and generating html elements/tags dynamically using javascript.
          `,
    canopy: ['Lead Developer', 2022],
  },
  {
    name: 'WorldVista',
    client: 'CANOPY',
    description:
            'World Vista is a dynamic web app using the Fetch API for country data. It offers details on culture, history, and attractions.',
    image: './img/projects/project3.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'gregarious-cupcake-5d65a2.netlify.app/',
    sourceLink: 'https://github.com/mohashyne/Module-Capstone--2',
    projectCover: './img/projects/Snapshoot_Portfolio_3.svg',
    fullDescription: `
    World Vista is a dynamic web app using the Fetch API for country data. It offers details on culture, history, and attractions. Users can book tours, share comments, and like countries. Explore the world and connect with fellow travelers on World Vista.
          `,
    canopy: ['Backend DEV', 2023],
  },
  {
    name: 'Space Travelers Hub',
    client: 'CANOPY',
    description:
            'Space Travelers Hub is a group project developed by Muhammad and Henok. The web application allows users to reserve and cancel rocket reservations while offering an enhanced user interface for visual clarity.',
    image: './img/projects/project4.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://space-traveler-hub-qacv.onrender.com/',
    sourceLink: 'https://github.com/mohashyne/space-travelers-hub',
    projectCover: './img/projects/Snapshoot_Portfolio_4.svg',
    fullDescription: `
    Space Travelers Hub is a group project developed by Muhammad and Henok. The web application allows users to reserve and cancel rocket reservations while offering an enhanced user interface for visual clarity. The mission features include seamless action dispatching for rocket reservations and cancellations
          `,
    canopy: ['Backend DEV', 2022],
  },

];

function openPopup(index) {
  const section = document.querySelector('.works-card');
  const overlay = document.querySelector('.overlay');
  const technologiesList = projects[index].technologies.map((tech) => `<li>${tech}</li>`).join('');
  const canopyList = projects[index].canopy.map((elem) => `<li>${elem}</li>`).join('');

  const popupHtml = `
          <div class="popup">
  
              <h3 class="popup__name">${projects[index].name}</h3>
              <button type="button" class="popup__exit">
                  <img src="./img/icons/icons8-close_black.svg" alt="">
              </button>
  
              <div class="card__canopy-header popup__canopy">
                  <h4 class="card__canopy-title">CANOPY</h4>
                  <ul class="card__canopy-list popup__canopy-list">
                      ${canopyList}
                  </ul>
              </div>
  
              <img src=${projects[index].image} alt="" class="popup__img">
              
  
              <div class="popup__details">
                  <p class="popup__description">
                      ${projects[index].fullDescription}
                  </p>
  
                  <div class="popup__tech-buttons">
                      <ul class="card__list popup__tech">
                          ${technologiesList}
                      </ul>
                      <div class="gray-line"></div>
                      <div class="popup__buttons">
                          <a href="${projects[index].liveLink}" class="project-btn btn--green" target="_blank">See Live
                                  <img src="./img/see-live-icon.svg" alt=""></a>
                          <a href="${projects[index].sourceLink}" class="project-btn btn--green" target="_blank">See Source 
                                  <img src="./img/see-source-icon.svg" alt=""></a>
                      </div>
                  </div>
              </div>
          </div>
      `;

  section.insertAdjacentHTML('afterbegin', popupHtml);
  overlay.classList.remove('hidden');

  const closePopupIcon = document.querySelector('.popup__exit');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('body');

  body.classList.add('popup-open');

  closePopupIcon.addEventListener('click', () => {
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
    body.classList.remove('popup-open');
  });
}

function createCard() {
  const cardContainer = document.querySelector('.works-card');
  for (let index = projects.length - 1; index >= 0; index -= 1) {
    const project = projects[index];
    const technologiesList = project.technologies.map((tech) => `<li class="tag-description">${tech}</li>`).join('');

    const card = `
      <li class="grid-container grid-container-desktop">
      <div class="card-container" id="card-${index}" data-aos="fade-right">
                  
      <div>
                        <img class="card-img" src=${project.projectCover} alt="photo of my 1st project" data-aos="zoom-in-left"/>
                      </div>
    
                        <div class="text-container">
                            <h2 class="card-title">${project.name}</h3>
    
                                  <div class="frame-two">
                                    <p class="client">${project.client}</p>
                                    <img src="./img/Counter.png" alt="Counter">
                                    <p class="role">${project.canopy[0]}</p>
                                    <img src="./img/Counter.png" alt="Counter">
                                    <p class="role">${project.canopy[1]}</p>
                                  </div>
    
                               <p class="card-description">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    
                               <ul class="small-btn">
                               ${technologiesList}
                               </ul>
    
                               <button type="button" class="project-btn desk-btn">See project</button>
                             </div>
                             </div>
                        </li>`;
    cardContainer.insertAdjacentHTML('afterbegin', card);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createCard();
  document.querySelectorAll('.card-container .project-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      openPopup(index);
    });
  });
});
