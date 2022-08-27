import { useState } from "react";
import {
  BsPauseCircleFill,
  BsPlayCircleFill,
  BsReplyFill,
  BsSoundwave,
} from "react-icons/bs";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
const Video = () => {
  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });
  // Pause and start controls
  const playPauseVideo = () => {
    const video = document.querySelector("#video");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    toggleIcon();
  };
  // Change icons
  const toggleIcon = () => {
    const video = document.querySelector("#video");
    const startBtn = document.querySelector("#play-btn");
    const stopBtn = document.querySelector("#pause-btn");
    if (video.paused) {
      stopBtn.classList.add("displayNone");
      startBtn.classList.remove("displayNone");
    } else {
      startBtn.classList.add("displayNone");
      stopBtn.classList.remove("displayNone");
    }
    if (video.currentTime === 0) {
      video.volume = 0.2;
      setVideoVolume();
    }
  };
  // Restart video
  const restartVideo = () => {
    const video = document.querySelector("#video");
    video.pause();
    video.currentTime = 0;
    toggleIcon();
  };
  // Make update video with bar progress
  const setVideoProgress = () => {
    const progressBar = document.querySelector("#progress");
    const video = document.querySelector("#video");
    let currentTimeBar = (progressBar.value * video.duration) / 100;
    video.currentTime = currentTimeBar;
  };
  // Make the update bar progress
  const updateVideoProgress = () => {
    const progressBar = document.querySelector("#progress");
    const video = document.querySelector("#video");
    progressBar.value = Number((video.currentTime / video.duration) * 100);
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);
    setTime({ minutes, seconds });
  };
  // Make update video volume with bar progress
  const setVideoVolume = () => {
    const volume = document.querySelector("#volume");
    const video = document.querySelector("#video");
    video.volume = volume.value / 100;
    volume.value = video.volume * 100;
  };
  return (
    <main className={styles["main-video-player"]}>
      <motion.h2
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        className={styles["main-video-player--h2"]}
      >
        EXPLORA NUESTRAS INSTALACIONES
      </motion.h2>
      <motion.section
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
        className={styles["player"]}
      >
        <video
          className={styles["video"]}
          id="video"
          onClick={playPauseVideo}
          src="/static/video/tour2.mp4"
          onTimeUpdate={updateVideoProgress}
        />
        <div className={styles["controls"]}>
          <button className={styles["btn-play"]} id="play-btn">
            <BsPlayCircleFill
              color="#ffffff"
              className={styles["btn-play--icon"]}
              onClick={playPauseVideo}
            />
          </button>
          <button
            className={`${styles["btn-pause"]} displayNone`}
            id="pause-btn"
          >
            <BsPauseCircleFill
              className={styles["btn-stop--icon"]}
              color="#ffffff"
              onClick={playPauseVideo}
            />
          </button>
          <button className={styles["btn-restart"]} id="restart-btn">
            <BsReplyFill
              className={styles["btn-restart--icon"]}
              color="#ffffff"
              onClick={restartVideo}
            />
          </button>
          <button className={styles["btn-volume"]}>
            <BsSoundwave
              id="volume-icon"
              className={styles["btn-volume--icon"]}
            />
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              className={styles["volume"]}
              id="volume"
              onChange={setVideoVolume}
            />
          </button>
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            className={styles["progress"]}
            id="progress"
            onChange={setVideoProgress}
          />
          <small className={styles["times-tamp"]}>
            {time.minutes >= 1 ? "0" + time.minutes : "00"}:
            {time.seconds >= 10 ? time.seconds : "0" + time.seconds}
          </small>
        </div>
      </motion.section>
    </main>
  );
};

export default Video;
