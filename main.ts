basic.showIcon(IconNames.Yes)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P3, 0)
    basic.pause(5000)
    pins.servoWritePin(AnalogPin.P3, 180)
    basic.pause(1000)
})
