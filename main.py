def on_gesture_shake():
    basic.show_icon(IconNames.SAD)
    music._play_default_background(music.built_in_playable_melody(Melodies.DADADADUM),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.ASLEEP)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    basic.show_icon(IconNames.HAPPY)
    music._play_default_background(music.built_in_playable_melody(Melodies.JUMP_UP),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_icon(IconNames.ASLEEP)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

Happy_bar = 5
Hunger_bar = 20
basic.show_string("IT'S YOUR PET HAMSTER")
basic.show_icon(IconNames.ASLEEP)

def on_every_interval():
    global Hunger_bar
    Hunger_bar += -1
loops.every_interval(60000, on_every_interval)

def on_forever():
    if Happy_bar == 0:
        basic.show_string("YOUR PET IS GONE!!!")
basic.forever(on_forever)

def on_forever2():
    if Hunger_bar == 0:
        basic.show_string("IT DIED :(")
        basic.show_icon(IconNames.GHOST)
        basic.show_leds("""
            # . # . #
            # # # # #
            # # # # #
            # . # . #
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_string("Game over")
basic.forever(on_forever2)

def on_every_interval2():
    global Happy_bar
    Happy_bar += -1
loops.every_interval(120000, on_every_interval2)
while True:
    pass