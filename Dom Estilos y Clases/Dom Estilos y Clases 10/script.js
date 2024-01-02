function changeTheme(theme) {
    
    document.body.classList.remove('default', 'dark', 'light');

    
    document.body.classList.add(theme);

    localStorage.setItem('selectedTheme', theme);
}


document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    changeTheme(savedTheme);

    
    document.getElementById('theme-select').value = savedTheme;
});