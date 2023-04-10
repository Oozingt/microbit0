let wendu = 0
basic.forever(function on_forever() {
    
    wendu = input.temperature()
    basic.showString("" + ("" + input.temperature()))
    if (input.temperature() < 10) {
        basic.showString("cold")
    }
    
    if (input.temperature() >= 30) {
        basic.showString("hot")
    }
    
    if (input.temperature() >= 10 && input.temperature() < 30) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("C5 B A G F E D C ", 125)
    }
    
})
