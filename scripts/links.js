const linksContainer = document.getElementById("links");
Object.assign(linksContainer.style, {
    display: "block",
    margin: "27px auto",
    maxWidth: "400px",
    width: "auto"
});

// Your specific link data
const myLinks = [
    { text: "Website", url: "https://tallyplays.com/en-cad", icon: "fa-solid fa-globe" },
    { text: "Twitch", url: "https://www.twitch.tv/itstallyplays", icon: "fa-brands fa-twitch" },
    { text: "Bluesky", url: "https://bsky.app/profile/tallyplays.bsky.social", icon: "fa-brands fa-bluesky" },
    { text: "TikTok", url: "https://www.tiktok.com/@itstallyplays", icon: "fa-brands fa-tiktok" },
    { text: "YouTube", url: "https://www.youtube.com/@ItsTallyPlays", icon: "fa-brands fa-youtube" },
    { text: "YouTube Long Plays", url: "https://www.youtube.com/@TallyLongPlays-x9r", icon: "fa-brands fa-youtube" },
    { text: "Discord", url: "https://discord.com/invite/pKmDD9ErBe", icon: "fa-brands fa-discord" },
    { text: "Throne", url: "https://throne.com/itstallyplays", icon: "fa-solid fa-gift" },
    { text: "Ko-Fi", url: "https://ko-fi.com/tallyplays", icon: "fa-solid fa-mug-hot" },
    { text: "Instagram", url: "https://www.instagram.com/tallycolors", icon: "fa-brands fa-instagram" }
];

// Build the buttons
myLinks.forEach(link => {
    const linkItem = document.createElement("a"); // Changed to 'a' tag for proper linking
    linkItem.href = link.url;
    linkItem.target = "_blank";
    linkItem.innerHTML = `<i class="${link.icon}" aria-hidden="true"></i> ${link.text}`;

    Object.assign(linkItem.style, {
        backgroundColor: "var(--button)",
        borderRadius: "30px",
        color: "var(--accent)",
        cursor: "pointer",
        display: "block",
        fontSize: "1rem",
        margin: "0 50px 10px",
        opacity: "0.75",
        padding: "10px",
        pointerEvents: "auto",
        position: "relative",
        textAlign: "center",
        textDecoration: "none",
        transition: "all .5s cubic-bezier(.08, .59, .29, .99)"
    });

    // Hover effects
    linkItem.addEventListener("mouseenter", () => {
        linkItem.style.backgroundColor = "var(--accent)";
        linkItem.style.color = "var(--button)";
        linkItem.style.opacity = "1";
    });
    linkItem.addEventListener("mouseleave", () => {
        linkItem.style.backgroundColor = "var(--button)";
        linkItem.style.color = "var(--accent)";
        linkItem.style.opacity = ".75";
    });

    linksContainer.appendChild(linkItem);
});
