import React from "react";
import Music from "./Music";
import songs from "../Songs.json";
import { motion } from "framer-motion";

function Musics() {
  return (
    <div className="mx-auto p-2">
      <h1 className="text-center tracking-tighter text-4xl">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 xl:gap-1 2xl:gap-1"
          >
            {/* single music goes here*/}
            {songs.map((song) => {
              return (
                <Music
                  title={song.title}
                  src={song.src}
                  image={song.image}
                  key={song.id}
                />
              );
            })}
          </motion.div>
        </section>
      </h1>
    </div>
  );
}

export default Musics;
