$(document).ready(() => {
    const input = $('#user-input').val();
    $(document).keypress(key => {

        if(key.which === 13) {
            console.log('hello')
        }
    })

})

