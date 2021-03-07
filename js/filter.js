//filters cards
const filterCard = document.querySelectorAll('.projects__item');

document.querySelector('.filter').addEventListener('click', (event) => {

    if (event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['filter'];

    filterCard.forEach((elem) => {
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('anime');
        }
        else {
            elem.classList.remove('hidden');
            elem.classList.remove('anime');
        }
    });

    filterCard.forEach((elem) => {
        elem.ontransitionend = function () {
            if (elem.classList.contains('anime')) {
            elem.classList.add('hidden');
            }
        }
    });

});
