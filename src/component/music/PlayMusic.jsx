import React from "react";
import { useState } from "react";

function PlayMusic() {
    const audio = new Audio();
    const [isPlaying, setIsPlaying] = useState(false);

    const onPlayClick = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };
    return (
        <div>
            <h3>PlayMusic</h3>
            <div>
                <button onClick={onPlayClick}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
        </div>
    );
}

export default PlayMusic;