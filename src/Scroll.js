export function scroller(){
    const body = document.querySelector('body');
    body.onscroll = scrollFunction;
    function scrollFunction(){
        document.querySelector('.navbar-wrapper').style.opacity = `${-window.pageYOffset + 200}%`;
        // document.querySelector('.permanent-logo-wrapper').style.opacity = `${window.pageYOffset}%`;
    }
}