const project = `LinkLoom`;

const style = document.createElement("style");
style.textContent = `
    #about { color: var(--accent); filter: drop-shadow(0 0 1rem black); font-size: 1rem; line-height: 1.5; opacity: .75; padding: 0% 10%; text-align: center; }
    #name { color: var(--accent); font-size: 1.5rem; font-weight: bold; line-height: 1.25; text-align: center; filter: drop-shadow(0 0 1rem black); }
    #picture img { border-radius: 50%; display: block; height: 128px; margin: 40px auto 20px; width: 128px; object-fit: cover; border: 2px solid var(--accent); }
    #credits { text-align: center; padding: 15px; font-size: .75rem; opacity: 0.5; color: var(--accent); }
`;
document.head.appendChild(style);

// Direct Injection Logic
document.addEventListener("DOMContentLoaded", () => {
    document.title = "Tally Plays";
    
    const nameEl = document.getElementById("name");
    const aboutEl = document.getElementById("about");
    const pictureEl = document.getElementById("picture");
    const creditsEl = document.getElementById("credits");

    if (nameEl) nameEl.textContent = "Tally Plays";
    if (aboutEl) aboutEl.textContent = "| She/Her | Chill grown-up gamer girl, with a love for love and a cute pup. On a mission to create a safe and inclusive 18+ community for anyone who wants to be a part of it! Come join the Cozy Chaos Crew!";
    
    // This is the critical line pointing to your new JPG
    if (pictureEl) pictureEl.innerHTML = `<img src="assets/ASWwWDrQ_400x400.jpg" alt="Tally Plays">`;
    
    if (creditsEl) creditsEl.innerHTML = `<a href="https://github.com/nandolawson/LinkLoom" target="_blank" style="color:inherit; text-decoration:none;">Created with ${project}</a>`;
});
