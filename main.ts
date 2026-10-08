input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Silly)
    basic.showIcon(IconNames.Asleep)
    EXPLODE_BAR += 1
    Hunger_bar += 1
    if (EXPLODE_BAR == 10) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        basic.clearScreen()
        basic.showString("IT DIED :<")
        basic.showIcon(IconNames.Ghost)
        basic.showLeds(`
            # . . . #
            # # # # #
            # # # # #
            # . # . #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        game.gameOver()
    }
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(0)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
    Happy_bar += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
    Happy_bar += 1
})
let EXPLODE_BAR = 0
let Happy_bar = 5
let Hunger_bar = 20
basic.showString("IT'S YOUR PET HAMSTER")
basic.showIcon(IconNames.Asleep)
loops.everyInterval(60000, function () {
    Hunger_bar += -1
})
basic.forever(function () {
    if (Happy_bar == 0) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.LoopingInBackground)
        basic.clearScreen()
        basic.showString("YOUR PET IS GONE!!!")
        basic.clearScreen()
        game.gameOver()
    }
})
basic.forever(function () {
    game.setScore(1)
    basic.pause(1000)
})
basic.forever(function () {
    if (Hunger_bar == 0) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
        basic.clearScreen()
        basic.showString("IT DIED :<")
        basic.showIcon(IconNames.Ghost)
        basic.showLeds(`
            # . # . #
            # # # # #
            # # # # #
            # . # . #
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        game.gameOver()
    }
})
loops.everyInterval(30000, function () {
    Hunger_bar += -1
})
loops.everyInterval(120000, function () {
    Happy_bar += -1
})
