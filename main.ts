input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.stopAllSounds()
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Heart)
    if (receivedString == "A") {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    }
    if (receivedString == "B") {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.LoopingInBackground)
    }
})
radio.setGroup(1)
