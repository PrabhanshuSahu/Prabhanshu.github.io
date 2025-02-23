function updateFaviconBasedOnTheme() {
    const darkModeFavicon = 'images/modified_briefcase.png';  // Path to your dark mode favicon
    const lightModeFavicon = 'images/briefcase_342792.png';  // Path to your light mode favicon
    const favicon = document.getElementById('favicon');

    // Check the user's color scheme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        favicon.setAttribute('href', darkModeFavicon);
    } else {
        favicon.setAttribute('href', lightModeFavicon);
    }

    // Listen for changes to the color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            favicon.setAttribute('href', darkModeFavicon);
        } else {
            favicon.setAttribute('href', lightModeFavicon);
        }
    });
}

// Call the function on page load
window.onload = updateFaviconBasedOnTheme;
