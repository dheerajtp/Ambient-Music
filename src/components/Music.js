import React, { useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useToasts } from "react-toast-notifications";

function Music({ title, src, image }) {
  const { addToast } = useToasts();
  // eslint-disable-next-line
  const [audio, setAudio] = useState(new Audio(src));
  const [volume, setVolume] = useState(0.5);
  const [playing, setPlaying] = useState(false);
  const playHandler = () => {
    if (playing === false) {
      setPlaying(true);
      addToast(`Playing ${title}`, { appearance: "success" });
      audio.play();
      audio.loop = true;
    } else {
      setPlaying(false);
      addToast(`Paused ${title}`, { appearance: "success" });
      audio.pause();
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container w-80 mx-auto  bg-white rounded-xl shadow-lg overflow-hidden transform">
        <img
          className="w-full"
          src={image}
          alt={title}
          style={{ width: "100%", height: "450px" }}
        />
        <div className="flex justify-center relative py-4">
          <span
            className="absolute transform -top-10 flex z-50 text-green-500 bg-white rounded-full cursor-pointer"
            onClick={playHandler}
          >
            {/*play pause goes here*/}
            {playing ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </span>
          <div className="flex flex-col">
            <div>
              <h1 className="mb-1 text-2xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">
                {title}
              </h1>
            </div>
            <div className="flex">
              <input
                type="range"
                min="1"
                max="100"
                onChange={(e) => {
                  setVolume(e.target.value / 100);
                  audio.volume = volume;
                }}
                className="slider"
                id="myRange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
