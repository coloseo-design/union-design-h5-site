/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import './styles/home.less';

const VideoPage = (props: any) => {
  const {
    imgSrc, videoSrc, videoId, poster,
  } = props;
  const [playShow, setPlay] = useState(true);
  const [videoDurattion, setDuration] = useState('0:00'); // 时长
  const [currentTime, setCurrentTime] = useState('0: 00'); // 当前播放时间
  const [vocalX, setVocalX] = useState(72); // 音频圆点移动的距离
  const [isDrop, setDrop] = useState(false);
  const [startVacalX, setStartVocalX] = useState(0); // 音频圆点最开始按下的距离
  const [progressX, setProgressX] = useState('0%'); // 进度条圆点移动的距离
  const [leftContainter, setLeft] = useState(0);

  const media: any = document.getElementById(`${videoId}`);
  useEffect(() => {
    const video: any = document.getElementById(`${videoId}`);
    if (video) {
      video.addEventListener('loadedmetadata', () => {
        if (video.duration) {
          const d = Math.floor(video.duration);
          const minute = Math.floor(d / 60);
          const seconds = d % 60;
          setDuration(`${minute}:${seconds}`);
        }
      });
    }
    if (media) {
      media.volume = 1;
      media.addEventListener('timeupdate', () => {
        if (!playShow) {
          const time = Math.floor(media.currentTime);
          const seconds = time >= 60 ? time % 60 : (time.toString().length <= 1 ? `0${time}` : time);
          const minute = time < 60 ? '0' : Math.floor(time / 60);
          setCurrentTime(`${minute}:${seconds}`);
          const p = (media.currentTime / media.duration) * 100;
          setProgressX(`${p.toFixed(3)}%`);
        }
      });
      media.addEventListener('ended', () => {
        setPlay(true);
      }, false);
    }
  }, [media, playShow]);

  const handlePause = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    setPlay(true);
    document.getElementById(`${videoId}`)?.pause();
  };

  const handlePlay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    setPlay(false);
    document.getElementById(`${videoId}`)?.play();
  };

  const FullScreen = () => {
    const ele: any = document.getElementById(`${videoId}`);
    if (ele?.requestFullscreen) {
      ele.requestFullscreen();
    } else if (ele?.mozRequestFullScreen) {
      ele?.mozRequestFullScreen();
    } else if (ele?.webkitRequestFullScreen) {
      ele?.webkitRequestFullScreen();
    }
  };

  const handleVocalDown = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.stopPropagation();
    evt.preventDefault();
    setStartVocalX(evt?.pageX);
    setDrop(true);
  };
  const handleVocalUp = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.stopPropagation();
    evt.preventDefault();
    setDrop(false);
  };
  const handleVocalMove = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.stopPropagation();
    evt.preventDefault();
    if (isDrop) {
      let left = 0;
      if (evt?.pageX > startVacalX && evt?.pageX <= startVacalX + 72) {
        left = evt?.pageX - startVacalX;
      }
      if (evt?.pageX <= startVacalX && vocalX > 0) {
        left = 72 - (startVacalX - evt?.pageX);
      }
      if (media) {
        media.volume = Math.abs((left / 72).toFixed(2));
      }
      setVocalX(left);
    }
  };

  const handleProgressDown = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.stopPropagation();
    evt.preventDefault();
    setDrop(true);
  };

  const handleProgressMove = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.stopPropagation();
    evt.preventDefault();
    if (isDrop) {
      if (evt?.pageX > leftContainter && evt?.pageX <= leftContainter + 312) {
        const left = ((evt?.pageX - leftContainter) / 320) * 100;
        setProgressX(`${left}%`);
        if (media) {
          const cT :any = (media.duration * (left / 100)).toFixed(0);
          const seconds = cT >= 60 ? cT % 60 : (cT.toString().length <= 1 ? `0${cT}` : cT);
          const minute = cT < 60 ? '0' : Math.floor(cT / 60);
          setCurrentTime(`${minute}:${seconds}`);
          media.currentTime = cT;
        }
      }
    }
  };

  const handleProgressUp = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.stopPropagation();
    evt.preventDefault();
    setDrop(false);
  };

  const getNode = (node: HTMLDivElement) => {
    if (node) {
      const { left: containerLeft } = node?.getBoundingClientRect();
      setLeft(containerLeft);
    }
  };
  return (
    <div className="current-right">
      <img src={imgSrc} alt="" />
      {playShow && <img src={require('./images/play.png')} onClick={handlePlay} alt="play" className="video-play" />}
      <video
        src={videoSrc}
        controls={false}
        style={{ width: '503px', objectFit: 'fill' }}
        poster={poster}
        id={videoId}
      />
      <div className="video-controls" onMouseOut={() => setDrop(false)}>
        {playShow
          ? <div className="trangle" onClick={handlePlay} />
          : (
            <img
              src={require('./images/video-pause.svg')}
              className="video-vocal"
              alt="pause"
              style={{ margin: 0 }}
              onClick={handlePause}
            />
          )}
        <div
          className="video-progress"
          ref={getNode}
          onMouseDown={handleProgressDown}
          onMouseMove={handleProgressMove}
          onMouseUp={handleProgressUp}
        >
          <div className="video-dot" style={{ left: progressX }} />
          <div className="current-progress" style={{ width: `calc(${progressX} + 4px)` }} />
        </div>
        <div className="video-time">
          {currentTime}
          <span>
            {' / '}
            {videoDurattion}
          </span>
        </div>
        <img className="video-vocal" src={require('./images/video-vocal.svg')} style={{ width: 18, height: 18 }} alt="vocal" />
        <div className="vocal-progress">
          <div
            className="vocal-dot"
            style={{ left: vocalX }}
            onMouseDown={handleVocalDown}
            onMouseMove={handleVocalMove}
            onMouseUp={handleVocalUp}
          />
          <div
            className="current-progress"
            style={{ width: vocalX + 4 }}
          />
        </div>
        <img onClick={FullScreen} src={require('./images/video-big.svg')} alt="big" className="video-vocal" />
      </div>
    </div>
  );
};

export default VideoPage;
