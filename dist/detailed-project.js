// Define the project data
const projects = [
  {
    name: 'FACEBOOK 360',
    client: 'FACE',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/projects/Snapshoot_Portfolio_1.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/mohashyne/MSalyhu_portfolio.git',
    projectCover: './img/projects/Snapshoot_Portfolio_1.svg',
    fullDescription: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum tempore aliquam similique aperiam officia soluta dolorum neque velit aspernatur odit libero animi quod deserunt praesentium accusantium possimus ad iste sed ratione, aut vel repellendus obcaecati quia.
          `,
    canopy: ['Full Stack DEV', 2023],
  },
  {
    name: 'Uber Navigation',
    client: 'Uber',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/projects/Snapshoot_Portfolio_2.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/mohashyne/MSalyhu_portfolio.git',
    projectCover: './img/projects/Snapshoot_Portfolio_2.svg',
    fullDescription: `
              Multi-Post A daily selection of privately personalized reads; no accounts or sign-ups required, no accounts or sign-ups.
          `,
    canopy: ['Lead Developer', 2022],
  },
  {
    name: 'Tonic',
    client: 'CANOPY',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/projects/Snapshoot_Portfolio_3.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/mohashyne/MSalyhu_portfolio.git',
    projectCover: './img/projects/Snapshoot_Portfolio_3.svg',
    fullDescription: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum tempore aliquam similique aperiam officia soluta dolorum neque velit aspernatur odit libero animi quod deserunt praesentium accusantium possimus ad iste sed ratione, aut vel repellendus obcaecati quia.
          `,
    canopy: ['Backend DEV', 2023],
  },
  {
    name: 'Multi-Post',
    client: 'CANOPY',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './img/projects/Snapshoot_Portfolio_4.svg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://example.com',
    sourceLink: 'https://github.com/mohashyne/MSalyhu_portfolio.git',
    projectCover: './img/projects/Snapshoot_Portfolio_4.svg',
    fullDescription: `
              Multi-Post A daily selection of privately personalized reads; no accounts or sign-ups required, no accounts or sign-ups.
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
  
              <img src="./img/projects/Snapshoot Portfolio.svg" alt="" class="popup__img">
  
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
