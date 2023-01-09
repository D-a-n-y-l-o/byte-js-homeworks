const button = document.getElementById('toolTip-button');

function createTooltip(elem, text){
    let elemCoordinateLeft = elem.offsetLeft;

    const toolTipContainer = document.createElement('div');

    toolTipContainer.classList.toggle('toolTip');

    toolTipContainer.innerText = `${text}`;

    toolTipContainer.style.top = `70px`;
    toolTipContainer.style.left = `${elemCoordinateLeft}px`;

    toolTipContainer.classList.add('toolTip-hide');

    toolTipContainer.id = 'toolTip';

    document.body.append(toolTipContainer);

    return;
}

function toggleClass () {
    let elem = document.getElementById('toolTip')
    elem.classList.toggle('toolTip-hide')
    console.log(elem);
}

createTooltip(button, 'example toolTip');


button.addEventListener('mouseenter', toggleClass );
button.addEventListener('mouseleave', toggleClass )

