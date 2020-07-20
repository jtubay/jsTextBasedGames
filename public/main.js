const rooms = {
    room0: "<p>You are in a dark and cold place. You see a light to the <b>North</b> and hearing running water to the <b>West</b></p>"
}
console.log(rooms.room0)

$(document).ready(() => {
    $('#game-text').append(rooms.room0)
    $(document).keypress(key => {

        if(key.which === 13 && $('#user-input').is(':focus')) {
            const userInput = $('#user-input').val();

            console.log(userInput)
        }
    })

})

