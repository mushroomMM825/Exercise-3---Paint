const paintArea = document.getElementById('paint-area');
let isPainting = false;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createCircle(x, y) {
    const circle = document.createElement('div');
    circle.style.width = '20px';
    circle.style.height = '20px';
    circle.style.position = 'absolute';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'blue';
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    paintArea.appendChild(circle);
    circle.style.opacity = '0.8';

}

paintArea.addEventListener('mousedown', () => isPainting = true);
paintArea.addEventListener('mouseup', () => isPainting = false);

paintArea.addEventListener('mousemove', (e) => {
    if (isPainting) {
        createCircle(e.clientX, e.clientY);
    }
});
