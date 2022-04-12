input.onButtonPressed(Button.A, function () {
    variable += 1
    basic.showNumber(variable)
    if (variable < The_number) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (variable > The_number) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (variable == The_number) {
        basic.showIcon(IconNames.Yes)
    }
})
input.onButtonPressed(Button.AB, function () {
    variable = 0
    The_number = 0
    The_number = randint(0, 20)
})
input.onButtonPressed(Button.B, function () {
    variable += -1
    basic.showNumber(variable)
})
let variable = 0
let The_number = 0
The_number = randint(0, 20)
basic.forever(function () {
	
})
