radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dice) {
        basic.showIcon(IconNames.Sad)
        music.playMelody("F E D C E D C D ", 120)
        music.stopAllSounds()
    }
    if (dice >= receivedNumber) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("G G B A A G C5 C5 ", 120)
        music.stopAllSounds()
    }
    if (dice == receivedNumber) {
        basic.showIcon(IconNames.Heart)
        music.playMelody("G F G F G F G F ", 120)
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.A, function () {
    let bruh = 0
    radio.sendNumber(bruh)
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(6)
