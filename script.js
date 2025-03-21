let currentSlide = 1;

function nextSlide(slideNumber) {
    document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));
    document.getElementById(`slide${slideNumber}`).classList.add('active');

    if (slideNumber === 5) {
        startTypingEffect();
    }
}

// Auto Typing Effect
function startTypingEffect() {
    const text = "Wishing you a magical birthday, my love! ❤️🎉";
    let index = 0;
    const typingElement = document.querySelector('.typing-text');

    function typeLetter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeLetter, 100);
        }
    }
    typeLetter();
}

// Auto Play Music
window.onload = function() {
    const audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Audio autoplay blocked by browser"));
};

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ff4d4d"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.6,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff4d4d",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    }
});