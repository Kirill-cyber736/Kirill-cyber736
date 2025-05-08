const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
    dropdownToggle.querySelector('.dropdown-arrow').classList.toggle('open');
});

dropdownMenu.addEventListener('click', (event) => {
    const item = event.target.closest('.dropdown-item');
    if (!item) return;
    
    document.getElementById('selectedValue').textContent = item.textContent;
    
    const selectedItem = dropdownMenu.querySelector('.selected');
    if (selectedItem) selectedItem.classList.remove('selected');
    item.classList.add('selected');
    
    dropdownMenu.classList.remove('open');
    dropdownToggle.querySelector('.dropdown-arrow').classList.remove('open');
    
    console.log('Выбрано:', item.getAttribute('data-value'));
});

document.addEventListener('click', (event) => {
    if (!dropdownToggle.contains(event.target)) {
        dropdownMenu.classList.remove('open');
        dropdownToggle.querySelector('.dropdown-arrow').classList.remove('open');
    }
});