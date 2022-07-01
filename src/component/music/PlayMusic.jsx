import React from "react";
import { useState } from "react";

import s3Service from "../../services/s3service/S3Service";

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
    const s3ServiceHandler = () => {
        s3Service.log();
    }
    return (
        <div>
            <h3>PlayMusic</h3>
            <div>
                <button onClick={onPlayClick}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
            <button onClick={s3ServiceHandler}>Upload</button>
        </div>
    );
}

export default PlayMusic;