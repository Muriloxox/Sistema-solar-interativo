const starCount = 300;
const body = document.body;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 5;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${delay}s`;

    body.appendChild(star);
}

const astroName = document.getElementById('astro-name');

const astroNamesMap = {
    sun: 'Sol',
    venus: 'Vênus',
    neptune: 'Netuno',
    urano: 'Urano',
    saturn: 'Saturno',
    jupiter: 'Júpiter',
    mercury: 'Mercúrio',
    mars: 'Marte',
    earth: 'Terra'
};

const planets = document.querySelectorAll('.sun, .venus, .neptune, .urano, .saturn, .jupiter, .mercury, .mars, .earth');

planets.forEach(planet => {
    planet.addEventListener('mouseover', () => {
        const planetClass = [...planet.classList].find(cls => astroNamesMap[cls]);
        if (planetClass) {
            astroName.textContent = astroNamesMap[planetClass];
            astroName.style.display = 'block';
        }
    });

    planet.addEventListener('mouseout', () => {
        astroName.style.display = 'none';
    });
});


