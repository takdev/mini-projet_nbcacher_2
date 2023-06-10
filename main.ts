input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 4632, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
    if (inVal < 10) {
        inVal = inVal + 1
    }
    basic.showNumber(inVal)
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 4654, 238, 0, 100, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
    if (inVal > 0) {
        inVal = inVal - 1
    }
    basic.showNumber(inVal)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // عدد المحاولات، يجب أن يكون أقل من ثلاثة
    if (nbAttemps <= 3) {
        nbAttemps = nbAttemps + 1
        if (x == inVal) {
            // إذا كانت المحاولة ناجحة
            music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
            basic.showIcon(IconNames.Yes)
            x = randint(0, 10)
        } else {
            // إذا كانت المحاولة غير ناجحة
            if (x < inVal) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `)
            } else {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `)
            }
        }
    }
})
let nbAttemps = 0
let inVal = 0
let x = 0
x = randint(0, 10)
