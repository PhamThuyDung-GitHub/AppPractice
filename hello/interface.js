var player = {
    currentSong: "Believer",
    currentSongLength: 35000,
    playNext: function () { return console.log('Playing next'); },
    playPrevious: function () { return console.log('Playing previous'); }
};
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(songInfo) {
        this.playNext = function () { return console.log('Playing next'); };
        this.playPrevious = function () { return console.log('Playing previous'); };
        this.stopAudio = function () { };
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }
    return AudioPlayer;
}());
var audioPlayer = new AudioPlayer({ name: 'shape of you',
    length: 40000
});
var anotherAudioPlayer = new AudioPlayer({ name: 'closer', length: 50000 });
console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength);
