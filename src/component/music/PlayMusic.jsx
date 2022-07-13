import { IconButton, Slider, Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./playmusic.module.scss";
import classnames from "classnames";
import AudioPlayer from "react-h5-audio-player";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import PlayCircleFilledTwoToneIcon from "@mui/icons-material/PlayCircleFilledTwoTone";
import PauseCircleFilledTwoToneIcon from "@mui/icons-material/PauseCircleFilledTwoTone";
import SkipNextTwoToneIcon from "@mui/icons-material/SkipNextTwoTone";
import SkipPreviousTwoToneIcon from "@mui/icons-material/SkipPreviousTwoTone";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import InsightsIcon from "@mui/icons-material/Insights";

function PlayMusic(props) {
  const settinginit = {
    volume: 50,
    repeat: 0,
    isPlay: false,
    mix: false,
    isMute: false,
  };
  const [setting, setSetting] = React.useState(settinginit);
  const urlMusic =
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      setSetting({ ...setting, volume: 0, isMute: true });
    } else {
      setSetting({ ...setting, volume: newValue, isMute: false });
    }
  };
  const handleMix = () => {
    setSetting({ ...setting, mix: !setting.mix });
  };
  const handleRePlay = () => {
    if (setting.repeat === 2) {
      setSetting({ ...setting, repeat: 0 });
    } else {
      setSetting({ ...setting, repeat: setting.repeat + 1 });
    }
  };
  const handlePlay = () => {
    setSetting({ ...setting, isPlay: !setting.isPlay });
  };
  return (
    <div className={styles.play_music}>
      <div className={classnames(styles.play_item, styles.cart_info)}>
        <div>
          <Typography variant="h6">Live From Space</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Mac Miller
          </Typography>
        </div>
        <img src="https://source.unsplash.com/random" alt="anh" />
      </div>
      <div className={styles.play_item_control}>
        <div className={styles.btn_group}>
          <IconButton onClick={handleMix}>
            {setting.mix ? (
              <InsightsIcon color="secondary" />
            ) : (
              <InsightsIcon />
            )}
          </IconButton>
          <IconButton>
            <SkipPreviousTwoToneIcon />
          </IconButton>
          <IconButton onClick={handlePlay}>
            {setting.isPlay ? (
              <PauseCircleFilledTwoToneIcon />
            ) : (
              <PlayCircleFilledTwoToneIcon />
            )}
          </IconButton>
          <IconButton>
            <SkipNextTwoToneIcon />
          </IconButton>
          <IconButton onClick={handleRePlay}>
            {setting.repeat === 0 ? (
              <RepeatIcon />
            ) : setting.repeat === 1 ? (
              <RepeatIcon color="secondary" />
            ) : (
              <RepeatOneIcon color="secondary" />
            )}
          </IconButton>
        </div>
        <div className={styles.time}>
          <span>00:00</span>
          <span>00:00</span>
        </div>
        <AudioPlayer
          showJumpControls={false}
          customVolumeControls={[]}
          src={urlMusic}
        />
        <Slider
          style={{ width: "100%" }}
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
          color="secondary"
        />
      </div>
      <div className={styles.play_item}>
        <Stack
          spacing={2}
          style={{ width: "100%" }}
          direction="row"
          sx={{ mb: 1 }}
          alignItems="center"
        >
          {setting.isMute ? <VolumeOffIcon /> : <VolumeDown />}
          <Slider
            aria-label="Volume"
            value={setting.volume}
            onChange={handleChange}
          />
          <VolumeUp />
        </Stack>
      </div>
    </div>
  );
}

export default PlayMusic;
