# cordova-plugin-libVLC
Cordova Plugin using libVLC

Tutorial to compile from source:
[https://wiki.videolan.org/LibVLC](https://wiki.videolan.org/LibVLC)

# Install
Latest stable version from npm:
```sh
$ cordova plugin add cordova-plugin-libvlc
```
Bleeding edge version from Github:
```sh
$ cordova plugin add https://github.com/disono/cordova-plugin-libVLC
```

# Using the plugin
```sh
// returns {
	event_name: '',
	data: null
}
// events names: onPlayVlc, onPauseVlc, onStopVlc, onVideoEnd, onDestroyVlc, onError, getPosition
// options: {autoPlay: true, hideControls: false}
libVLCPlayer.play('path-to-video', [options], [success], [failed]);
libVLCPlayer.stop([success], [failed]);
```

# Methods
```sh
libVLCPlayer.pause([success], [failed]);
libVLCPlayer.playNext('path-to-next-video', [options], [success], [failed]);
libVLCPlayer.stop([success], [failed]);

// returns: {position, current_location (00:00), duration (00:00)}
libVLCPlayer.getPosition([success], [failed]);

// position must be 1 to 100 only
libVLCPlayer.seekPosition(1, [success], [failed]);
```

# License
Cordova Plugin using libVLC is licensed under the Apache License (ASL) license. For more information, see the LICENSE file in this repository.