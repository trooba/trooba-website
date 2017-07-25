let taglineStatements = [
    'Bring structure to your application service invocations',
    'Split your application data flow into independent testable components'
];

for (let i = 0; i < taglineStatements.length; i++) {
    taglineStatements[i] = `<span class="home-fade-in">${taglineStatements[i]}</span>`;
}

function setHeaderClassTimer (header) {
    setTimeout(() => {
        header.classList.remove('home-fade-in');
        header.classList.add('home-fade-out');
    }, 4500);
}

module.exports = {
    onMount () {
        const header = this.getEl('tagline');
        const originalMessage = header.innerHTML;
        const originalFadeIn = `<span class="home-fade-in">${originalMessage}</span>`;

        setHeaderClassTimer(header);
        let currentTaglineIndex = 0;

        setInterval(() => {
            header.classList.remove('home-fade-out');

            const tagline = taglineStatements[currentTaglineIndex];

            if (currentTaglineIndex === taglineStatements.length) {
                header.innerHTML = originalFadeIn;
                currentTaglineIndex = 0;
            } else {
                header.innerHTML = tagline;
                currentTaglineIndex++;
            }

            setHeaderClassTimer(header);
        }, 5000);
    }
};
