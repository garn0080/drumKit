const app = {
    main: () => {
        window.addEventListener('keydown', (e) => app.playSound(e))
    },
    playSound: (keyPressed) => {
        const audio = document.querySelector(`audio[data-key="${keyPressed.keyCode}"]`);
        if(!audio) return; // Stop functio from running if keyPressed doesn't match with the audio data-key

        audio.currentTime = 0; // Rewind audio to the estart everytime a key is clicked
        audio.play(); 
    }
}

// Triggers the action when the initial HTML document has fully loaded without waiting for stylesheets, images, etc
window.addEventListener('DOMContentLoaded', app.main())

