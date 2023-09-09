radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    }
    if (receivedString == "B") {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
