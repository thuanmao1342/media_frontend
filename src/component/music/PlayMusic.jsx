import { Container, Grid, IconButton, Slider, Tooltip } from "@mui/material";
import React from "react";
import styles from "./playmusic.module.scss";
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
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import urlMusic from "../../assets/images/source.mp3";

function PlayMusic(props) {
  const settinginit = {
    repeat: 0,
    isPlay: false,
    mix: false,
    isMute: false,
    title:
      "bai hat nay khong phai la bai hat va cai ten nay rat la dai luon, n dai nen khong the hien thi het duoc",
    artist: "ca si dep trai",
  };
  const audioRef = React.useRef();
  const [setting, setSetting] = React.useState(settinginit);
  const [currentTime, setCurrentTime] = React.useState(0);
  // const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(1);

  //controls the music
  const handleChangeVolume = (event, newValue) => {
    if (newValue === 0) {
      setSetting({ ...setting, isMute: true });
    } else {
      setSetting({ ...setting, isMute: false });
    }
    audioRef.current.volume = newValue / 100;
    setVolume(newValue);
  };
  const handleChangeVolumeMute = () => {
    if (setting.isMute) {
      setSetting({ ...setting, isMute: false });
      audioRef.current.volume = volume / 100;
    } else {
      setSetting({ ...setting, isMute: true });
      audioRef.current.volume = 0;
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
  const handleChangeTime = (event, newValue) => {
    audioRef.current.currentTime = newValue;
  };
  const handlePlay = () => {
    if (setting.isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    audioRef.volume = setting.volume / 100;
    setSetting({ ...setting, isPlay: !setting.isPlay });
  };
  //event audio
  const handleUpdateTime = (e) => {
    const { currentTime } = e.target;
    setCurrentTime(currentTime);
  };
  //controls the music

  const convertTime = (time) => {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = Math.floor(time % 60);
    return `${hour > 0 ? `${hour}:` : ""}${
      minute < 10 ? `0${minute}` : minute
    }:${second < 10 ? `0${second}` : second}`;
  };

  return (
    <div className={styles.play_music}>
      {/* audio */}
      <audio
        ref={audioRef}
        src={urlMusic}
        preload="auto"
        onEnded={() => {
          audioRef.current.currentTime = 0;
          setSetting({ ...setting, isPlay: false });
        }}
        onPlay={() => console.log("play")}
        onTimeUpdate={handleUpdateTime}
      />
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className={styles.play_item_control}>
              <Grid container spacing={1}>
                <Grid item xs={4}>
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
                    <div className={styles.volume}>
                      <div className={styles.volume_control}>
                        {setting.isMute ? (
                          <IconButton onClick={handleChangeVolumeMute}>
                            <VolumeOffIcon />
                          </IconButton>
                        ) : (
                          <IconButton onClick={handleChangeVolumeMute}>
                            {volume < 50 ? <VolumeDown /> : <VolumeUp />}
                          </IconButton>
                        )}
                        <div className={styles.volume_slider}>
                          <Slider
                            aria-label="Volume"
                            orientation="vertical"
                            size="small"
                            min={0}
                            max={100}
                            value={volume}
                            onChange={handleChangeVolume}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => `${value}%`}
                            color="secondary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className={styles.time_control}>
                    <div className={styles.time}>
                      <span>{audioRef ? convertTime(currentTime) : "0:0"}</span>
                      <span>
                        {audioRef?.current
                          ? convertTime(audioRef?.current?.duration)
                          : "00:00"}
                      </span>
                    </div>
                    <Slider
                      style={{ width: "100%" }}
                      size="small"
                      defaultValue={0}
                      value={currentTime}
                      onChange={handleChangeTime}
                      max={
                        audioRef?.current ? audioRef?.current?.duration : 100
                      }
                      aria-label="Small"
                      valueLabelDisplay="auto"
                      valueLabelFormat={(value) => convertTime(value)}
                      color="secondary"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={1}>
              <Grid item xs={11}>
                <div className={styles.cart_info}>
                  <Tooltip title={setting.title} placement="top">
                    <h4>{setting.title}</h4>
                  </Tooltip>
                  <Tooltip title={setting.artist} placement="top">
                    <span>{setting.artist}</span>
                  </Tooltip>
                </div>
              </Grid>
              <Grid
                item
                xs={1}
                style={{ display: "flex", alignItems: "center" }}
              >
                <IconButton>
                  <PlaylistPlayIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PlayMusic;
