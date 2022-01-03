import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

function VideoList(props) {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => {
        return (
          <VideoItem
            key={video.id} //
            video={video}
          />
        );
      })}
    </ul>
  );
}

export default VideoList;
