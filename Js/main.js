const toggleTheme = document.getElementById('toggleTheme'); 
const toggleIcon = document.getElementById('toggleIcon'); 
const toggleText = document.getElementById('toggleText');   

const toggleColors = document.getElementById('toggleColors');

const rootStyles = document.documentElement.style;



toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('Dark');
    
    if (toggleIcon.src.includes('moon.svg')){
        toggleIcon.src = 'Images/icons/sun.svg';
        toggleText.textContent = 'Light Mode';
    } else {
        toggleIcon.src = 'Images/icons/moon.svg';
        toggleText.textContent = 'Dark Mode';
    }
});


toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color)
});