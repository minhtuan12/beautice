export function handleSlide(currentWidth, ableToScroll, scrollDiv, direction) {
    // if ((currentWidth < ableToScroll && direction === 'right') || (currentWidth > 0 && direction === 'left')) {
    scrollDiv.scrollLeft += direction === 'right' ? scrollDiv.clientWidth : -scrollDiv.clientWidth
    // }
}
