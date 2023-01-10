import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem  onVideoSelect={onVideoSelect} video={video} key={id} />)
    return listOfVideos;
}

export default VideoList;