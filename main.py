wendu = 0

def on_forever():
    global wendu
    wendu = input.temperature()
    basic.show_string("" + str(input.temperature()))
    if input.temperature() < 10:
        basic.show_string("cold")
    if input.temperature() >= 30:
        basic.show_string("hot")
    if input.temperature() >= 10 and input.temperature() < 30:
        basic.show_icon(IconNames.HAPPY)
        music.play_melody("C5 B A G F E D C ", 125)
basic.forever(on_forever)
