const scrollAtEarth = () => {
    const earthRect = document.getElementsByClassName('earth')[0].getBoundingClientRect();
    document.getElementsByTagName('body')[0].dataset.scrollEarth = window.scrollY <= earthRect.bottom;
}

scrollAtEarth();
document.addEventListener('scroll', scrollAtEarth);

