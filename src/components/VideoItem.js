import React from "react";

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <Grid item xs={12} style={{padding: '5px'}}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor:'pointer'}} onClick={() => onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
                <Typography variant="subtitle1" style={{padding: '5px'}}><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;