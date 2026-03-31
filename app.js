const customCursor = document.getElementById('customCursor');
const fullDiv = document.getElementById('fullDiv');
const moveFastDiv = document.getElementById('moveFastDiv');

const fullDivRect = fullDiv.getBoundingClientRect();
const moveFastDivRect = moveFastDiv.getBoundingClientRect();

console.log(moveFastDivRect);

let mouseX = 0;
let mouseY = 0;

let customMouseX = 0;
let customMouseY = 0;

let mouseSpeed = 1;

// moveFastDiv.addEventListener('mouseenter', () => {
//     mouseSpeed = 10;
// });

// moveFastDiv.addEventListener('mouseleave', () => {
//     mouseSpeed = 1;
// });

document.addEventListener('mousemove', (event) => {
    const customCursorRect = customCursor.getBoundingClientRect();
    if (customCursorRect.left > moveFastDivRect.left &&
        customCursorRect.right < moveFastDivRect.right &&
        customCursorRect.top > moveFastDivRect.top &&
        customCursorRect.bottom < moveFastDivRect.bottom) {
        mouseSpeed = 10;
    } else {
        mouseSpeed = 1;
    }

    let oldMouseX = mouseX;
    let oldMouseY = mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;
    let deltaX = mouseX - oldMouseX;
    let deltaY = mouseY - oldMouseY;
    customMouseX += deltaX * mouseSpeed;
    customMouseY += deltaY * mouseSpeed;
    
    // if ((event.clientX < moveFastDivRect.left ||
    //     event.clientX > moveFastDivRect.right) &&
    //     (event.clientY < moveFastDivRect.top ||
    //     event.clientY > moveFastDivRect.bottom)) {
    //         mouseSpeed = 1;
    //         customMouseX = event.clientX;
    //         customMouseY = event.clientY;
    //     }

    if (event.clientX < (fullDivRect.left + 5) || event.clientX > (fullDivRect.right - 5)) {
        customMouseX = event.clientX;
    }
    if (event.clientY < (fullDivRect.top + 5) || event.clientY > (fullDivRect.bottom - 5)) {
        customMouseY = event.clientY;
    }

    customCursor.style.left = `${customMouseX}px`;
    customCursor.style.top = `${customMouseY}px`;
});