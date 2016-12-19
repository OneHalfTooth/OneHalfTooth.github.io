/**
 * Created by mayang on 2016/12/16.
 */



var music_start = 'https://coding.net/u/ma_yang/p/source/git/raw/master/Marry/stopmusic_logo.png'

$(document).ready(function () {

    // $('.play_music').hide();
    var audio = document.createElement('audio');
    audio.src = 'https://coding.net/u/ma_yang/p/source/git/raw/master/Marry/need_love_you.mp3'//这里放音乐的地址
    audio.autoplay = true
    audio.id = 'music'
    document.body.appendChild(audio)


    $('.paly_music').click(function () {
        console.log('播放')
        $(this).hide()
        $('.stop_music').show()
        audio.play();
    });
    $('.stop_music').click(function () {
        console.log('停止')
        $(this).hide()
        $('.paly_music').show()
        audio.pause()
    })
})
