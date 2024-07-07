// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let angle1 = 0;
let angle2 = -30;

function myMove() {
    const block1 = document.getElementById("me");
    const block2 = document.getElementById("myself");
    const videoContainer = document.querySelector(".video");

    const radiusX = (videoContainer.offsetWidth / 2) + 50;
    const radiusY = (videoContainer.offsetHeight / 2) + 50;

    function frame() {
        angle1 = (angle1 + 2) % 360;
        angle2 = (angle2 + 2) % 360;

        const x1 = radiusX * Math.cos(angle1 * Math.PI / 180);
        const y1 = radiusY * Math.sin(angle1 * Math.PI / 180);

        const x2 = radiusX * Math.cos(angle2 * Math.PI / 180);
        const y2 = radiusY * Math.sin(angle2 * Math.PI / 180);

        block1.style.transform = `translate(${x1 + videoContainer.offsetWidth / 2 - 10}px, ${y1 + videoContainer.offsetHeight / 2 - 10}px)`;
        block2.style.transform = `translate(${x2 + videoContainer.offsetWidth / 2 - 10}px, ${y2 + videoContainer.offsetHeight / 2 - 10}px)`;

        requestAnimationFrame(frame);
    }

    frame();
}

myMove();
