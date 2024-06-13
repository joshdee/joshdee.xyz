function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const size = Math.random() * 50 + 10;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    circle.style.animationDelay = `${Math.random() * 5}s`;

    animatedBackground.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 15000);
}

setInterval(createCircle, 1000);
