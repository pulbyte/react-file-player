# React File Player

A lightweight React component for playing video files.

## Features

- Supports playback of various video formats
- Simple API with support for basic playback controls
- Lightweight alternative focused solely on local file playback

## Installation

```bash
npm install react-file-player
```

## Usage

```jsx
import React from 'react'
import ReactFilePlayer from 'react-file-player'

// Render a video player
<ReactFilePlayer url='path/to/video.mp4' />
```

## Props

Prop | Description | Default
---- | ----------- | -------
`url` | The url of a video or audio file to play
`playing` | Set to `true` or `false` to pause or play the media | `false`
`controls` | Set to `true` or `false` to display native player controls | `false`
`volume` | Set the volume of the player, between `0` and `1` | `1`
`muted` | Mutes the player | `false`
`width` | Set the width of the player | `640px`
`height` | Set the height of the player | `360px`

## Callback Props

Prop | Description
---- | -----------
`onReady` | Called when media is loaded and ready to play
`onStart` | Called when media starts playing
`onPlay` | Called when media starts or resumes playing after pausing or buffering
`onPause` | Called when media is paused
`onEnded` | Called when media finishes playing
`onError` | Called when an error occurs whilst attempting to play media

## Methods

Method | Description
------ | -----------
`play()` | Play the video
`pause()` | Pause the video
`stop()` | Stop the video
`seekTo(seconds)` | Seek to the given number of seconds

## Development

To build the library:

```bash
npm run build
```

## License

MIT

---

This project is a fork of [ReactPlayer](https://github.com/cookpete/react-player), focused specifically on local file playback. It does not support streaming services or other media sources found in the original ReactPlayer.