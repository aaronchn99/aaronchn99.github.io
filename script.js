const docReady = f => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(f, 2);
    } else {
        document.addEventListener("DOMContentLoaded", f);
    }
}

docReady(() => {
    const scrollAtEarth = () => {
        const earthRect = document.getElementsByClassName('earth')[0].getBoundingClientRect();
        document.getElementsByTagName('body')[0].dataset.scrollEarth = window.scrollY <= earthRect.bottom;
    }
    scrollAtEarth();
    document.addEventListener('scroll', scrollAtEarth);
    
    window.addEventListener('resize', () => {
        document.getElementsByClassName("entries")[0].style.height = `${document.getElementsByClassName("entry")[0].scrollHeight}px`
    });
    setTimeout(() => window.dispatchEvent(new Event('resize')), 1);

    const worksNavClick = (e) => {
        const direction = e.currentTarget.classList[1];
        const opposite = (direction == 'left') ? 'right' : 'left';
        if (document.getElementsByClassName(`entry ${direction}`).length > 0) {
            document.getElementsByClassName(`entry show`)[0].classList.replace('show', opposite);
            const entryList = document.getElementsByClassName(`entry ${direction}`);
            const entry = entryList[(direction == 'right')?0:entryList.length-1];
            entry.classList.replace(direction, 'show');
        }
    };
    for (let navButton of document.getElementsByClassName("nav")) {
        navButton.addEventListener('click', worksNavClick, true);
    }
});