var exec = require('cordova/exec');
var libVLCPlayer = {};

libVLCPlayer.play = function(uri, options, success, failure) {
    options = (options) ? options : {
        autoPlay: false,
        hideControls: false
    };

    // fire
    exec(
        success,
        failure,
        'VideoPlayerVLC',
        'play',
        [uri, options]
    );
};

libVLCPlayer.playNext = function(uri, options, success, failure) {
    options = (options) ? options : {
        autoPlay: false,
        hideControls: false
    };

    // fire
    exec(
        success,
        failure,
        'VideoPlayerVLC',
        'playNext',
        [uri, options]
    );
};

libVLCPlayer.pause = function(success, failure) {
    success = (success) ? success : function () {};
    failure = (failure) ? failure : function () {};

    // fire
    exec(
        success,
        failure,
        'VideoPlayerVLC',
        'pause',
        []
    );
};

libVLCPlayer.stop = function(success, failure) {
    success = (success) ? success : function () {};
    failure = (failure) ? failure : function () {};

    // fire
    exec(
        success,
        failure,
        'VideoPlayerVLC',
        'stop',
        []
    );
};

libVLCPlayer.getPosition = function(success, failure) {
    success = (success) ? success : function () {};
    failure = (failure) ? failure : function () {};

    // fire
    exec(
        success,
        failure,
        'VideoPlayerVLC',
        'getPosition',
        []
    );
};

libVLCPlayer.seekPosition = function(position, success, failure) {
    if (isNaN(position)) {
        failure('You position to seek is not a number.');
        return;
    }

    if (position < 0 || position > 100) {
        failure('You position must be between 1 and 100 only.');
        return;
    }

    // position = parseFloat(parseFloat(position) / 100);
    success = (success) ? success : function () {};
    failure = (failure) ? failure : function () {};

    // fire
    exec(
        success,
        failure,
        'VideoPlayerVLC',
        'seekPosition',
        [position, {position: position}]
    );
};

module.exports = libVLCPlayer;