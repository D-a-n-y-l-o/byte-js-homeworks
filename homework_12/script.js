const button = document.getElementById('toolTip-button');

createTooltip(button, 'example toolTip');

function createTooltip(elem, text){
    let elemCoordinateLeft = elem.offsetLeft;

    const toolTipContainer = document.createElement('div');

    toolTipContainer.classList.toggle('toolTip');

    toolTipContainer.innerText = `${text}`;

    toolTipContainer.style.top = `70px`;
    toolTipContainer.style.left = `${elemCoordinateLeft}px`;

    document.body.append(toolTipContainer);

    return;
}

