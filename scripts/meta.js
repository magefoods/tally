const project = `LinkLoom`;

/* Translations */
const creditstranslations = {
    english: `Created with ${project}`,
    arabic: `تم الإنشاء باستخدام ${project}`,
    french: `Créé avec ${project}`,
    german: `Mit ${project} erstellt`,
    spanish: `Creado con ${project}`,
    japanese: `${project}で作成`
};

/* CSS properties */
const style = document.createElement("style");
style.textContent = `
    #about {
        color: var(--accent);
        filter: drop-shadow(0 0 1rem black);
        font-size: 1rem;
        line-height: 1.5;
        opacity: .75;
        padding: 0% 10%;
        text-align: center;
    }
    #credits {
        display: block;
        font-family: var(--font);
        font-size: .75rem;
        padding: 15px;
        pointer-events: auto;
        position: relative;
        text-align: center;
    }
    #credits a {
        color: var(--accent);
        opacity: .25;
        pointer-events: auto;
        text-decoration: none;
        transition: all .5s cubic-bezier(.08, .59, .29, .99);
    }
    #credits a:hover {
        cursor: pointer;
        opacity: 1;
    }
    #name {
        color: var(--accent);
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.25;
        text-align: center;
        filter: drop-shadow(0 0 1rem black);
    }
    #picture img {
        border-radius: 50%;
        display: block;
        height: 128px;
        margin: 40px auto 20px;
        width: 128px;
        object-fit: cover;
        border: 2px solid var(--accent); /* Optional: adds a thin ring around your photo */
    }
`;
document.head.appendChild(style);

/* Your Specific Content Configuration */
const config = {
    title: "Tally Plays",
    name: "Tally Plays",
    about: "| She/Her | Chill grown-up gamer girl, with a love for love and a cute pup. On a mission to create a safe and inclusive 18+ community for anyone who wants to be a part of it! Come join the Cozy Chaos Crew!",
    picture: "assets/tally.webp", 
    language: "english"
};

// Set Website title
document.title = config.title;

// Inject Name, picture & credits into the HTML
const elements = Object.fromEntries(
    ["name", "picture", "about", "credits"].map(id => [id, document.getElementById(id)])
);

if (elements.name) elements.name.textContent = config.name;
if (elements.about) elements.about.textContent = config.about;
if (elements.picture) {
    elements.picture.innerHTML = `<img src="${config.picture}" alt="${config.name}" aria-hidden="true">`;
}
if (elements.credits) {
    elements.credits.innerHTML = `<a href="https://github.com/nandolawson/LinkLoom" target="_blank">${creditstranslations[config.language] || creditstranslations.english}</a>`;
}

// Set Favicon
const favicon = document.createElement("link");
Object.assign(favicon, {
    href: config.picture,
    rel: "icon"
});
document.head.appendChild(favicon);

export default config;
