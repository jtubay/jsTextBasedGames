
    
let currentRoom = 'start';
const changeRoom = dir => {
    if(rooms[currentRoom].directions[dir] !== undefined){
        currentRoom = rooms[currentRoom].directions[dir]
        $('#game-text').append(`<p>${rooms[currentRoom].description}</p>`)

    } else {
        $('#game-text').append(`<p>You cannot go that way</p>`)

    }
}



console.log(rooms.room0)

$(document).ready(() => {
    $('#game-text').append(`<p>${rooms.start.description}</p>`)
    $(document).keypress(key => {
        

        if(key.which === 13 && $('#user-input').is(':focus')) {
            const userInput = $('#user-input').val().toLowerCase();
            

            switch(userInput){
                case "north":
                    changeRoom("north");
                    break;
                case "south":
                    changeRoom("south");
                    break;
                case "east":
                    changeRoom("east");
                    break;
                case "west":
                    changeRoom("west");
                    break;
                default :
                    alert('make a valid choise')
            }
        }
    })

})

