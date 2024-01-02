function toggleVisibility(sectionName) {
    var section = document.querySelector('.' + sectionName);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}