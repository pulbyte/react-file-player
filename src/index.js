import { createReactPlayer } from './ReactPlayer'

import { lazy, supportsWebKitPresentationMode } from './utils'
import { canPlay, AUDIO_EXTENSIONS } from './patterns';

const players = [
    {
        key: 'file',
        name: 'FilePlayer',
        canPlay: canPlay.file,
        canEnablePIP: url => {
            return canPlay.file(url) && (document.pictureInPictureEnabled || supportsWebKitPresentationMode()) && !AUDIO_EXTENSIONS.test(url)
        },
        lazyPlayer: lazy(() => import(/* webpackChunkName: 'reactPlayerFilePlayer' */'./FilePlayer'))
    }
]

// Fall back to FilePlayer if nothing else can play the URL
const fallback = players[players.length - 1]

export default createReactPlayer(players, fallback)
