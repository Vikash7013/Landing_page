const sidebarItems = document.querySelectorAll('.sidebar .item');
const tableRow = document.querySelectorAll('.main table tbody tr');
const menuBtn = document.getElementById('menu-btn');
const leftSection = document.querySelector('.left-section');

let isMenuOpen = false;

sidebarItems.forEach(sideItem => {
    sideItem.addEventListener('click', () => {
        sidebarItems.forEach(item => {
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});

tableRow.forEach(tableTr => {
    tableTr.addEventListener('click', () => {
        tableRow.forEach(item => {
            item.classList.remove('selected');
        });
        tableTr.classList.add('selected');
    });
});

menuBtn.addEventListener('click', () => {
    if (!isMenuOpen) {
        leftSection.style.left = '0';
    }else{
        leftSection.style.left = '-160px';
    }
    isMenuOpen = !isMenuOpen;
})

