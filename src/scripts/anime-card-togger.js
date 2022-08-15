const awayAnimOpt = {
    keyframes: [
        { transform: 'translateX(0)' },
        { transform: 'translateX(-400%)' }
    ],
    timing: {
        duration: 2000,
        iterations: 1
    }
}

const inAnimOpt = {
    keyframes: [
        { transform: 'rotate(0) scale(1)' },
        { transform: 'rotate(360deg) scale(0)' }
    ],
    timing: {
        duration: 1000,
        iterations: 1
    }
};

const closeCard = (card) => {
    const filtered = new Array();
    document.querySelectorAll('.anime-card').forEach(el => { if (el !== card) filtered.push(el) });

    /* transform selected anime card back */

    // replace Open button with Close button
    card.children[4].children[0].innerHTML = 'Open';

    // toggle full description 
    card.children[1].children[2].children[0].className = ''
    card.children[1].children[2].children[1].className = 'none';

    // expand anime card
    const cards = document.querySelector('.cards');
    cards.className = cards.className.replace('cards row', 'cards row row-cols-auto');

    // toggle other hidden buttons and information
    card.children[1].children[1].className += " none";
    card.children[2].className += " none";
    document.getElementById('save').className += " none";
    document.getElementById('emodji').className += " none";
    document.getElementById('write').className += " none";

    // switch on all anime cards
    filtered.forEach(el => el.style.display = 'block' );
}

const openCard = card => {
    const filtered = new Array();
    document.querySelectorAll('.anime-card').forEach(el => { if (el !== card) filtered.push(el) });

    filtered.forEach(el => el.animate(awayAnimOpt.keyframes, awayAnimOpt.timing));
    // wait until animation is done
    setTimeout(() => {
        // freeze cards in new position
        filtered.forEach(el => {
            el.style.display = 'none';
        });

        card.animate(inAnimOpt.keyframes, inAnimOpt.timing);
        setTimeout(() => {
            /* transform selected anime card */

            // replace Open button with Close button
            card.children[4].children[0].innerHTML = 'Close';

            // toggle full description 
            card.children[1].children[2].children[0].className = 'none'
            card.children[1].children[2].children[1].className = '';

            // expand anime card
            const cards = document.querySelector('.cards');
            cards.className = cards.className.replace(' row-cols-auto', '');

            // toggle other hidden buttons and information
            card.children[1].children[1].className = card.children[1].children[1].className.replace(' none', '');
            card.children[2].className = card.children[2].className.replace(' none', '')
            document.getElementById('save').className = document.getElementById('save').className.replace(' none', '');
            document.getElementById('emodji').className = document.getElementById('emodji').className.replace(' none', '');
            document.getElementById('write').className = document.getElementById('write').className.replace(' none', '');
        }, 1000);
    }, 2000);
};

module.exports = {
    closeCard,
    openCard
};