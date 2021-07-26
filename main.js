const add = $(".addButton");

let picker = $(".to-dos")

const taskList = $('.results')

let input = $('#textInput');

const rComplete = $('.removeCompleted');

const rAll = $('.removeAll');

const complete = $('.completeEvery')

// Completes clicked task
picker.on('click', function(event) {
    const clickedElement = $(event.target);
    if (clickedElement.hasClass('line')) {
        clickedElement.removeClass('line')
    }
    else {
        clickedElement.addClass('line')
    }
    console.log(clickedElement.class)

})

// Adds to list
add.on('click', function() {
    // tasks.push(input.val());

    const testing = input.val();
    var valLength = testing.trim().length;

    if (input.val().length >= 1) {
    const newElement = $(`<li>${input.val()}</li><`);
    $('.to-dos').append(newElement);
    }
    // Validators so input doesn't accept spaces
    else if(valLength === 0) {
        alert('You must enter a task')
    }
    console.log(testing)
    // else if ()
})

// Removes completed
rComplete.on('click', function() {
    if ($('li').hasClass('line')) {
        $('.line').remove()
    }
})

// Removes all tasks
rAll.on('click', function() {
    // $('li').remove()
    let confirmBox = confirm('Are you sure you want to remove all?')
    if (confirmBox === true) {
        $('li').remove()
    }
    else {

    }
})

// Completes all tasks
complete.on('click', function() {
    // $('li').addClass('line');
    if ($('li').hasClass('line')) {
        $('.completeEvery').text('Complete All')
        $('li').removeClass('line')
    }
    else {
        $('.completeEvery').text('Uncomplete All')
        // $('.completeEvery').css('backgroundColor', 'orange');
        // $('.completeEvery').css('border', '1px solid orange');
        // $('.completeEvery').css('color', 'rgb(24,24,24);');
        $('li').addClass('line')
    }
})

// function listUpdater() {
//     for (let i = 0; i < tasks.length; i++) {
//         console.log(tasks);
//         const newElement = $(`<div class="to-dos">${tasks}</div>`);
//         $('.to-dos').append(newElement);
//     }
// }

// picker.on('mouseover', function(event) {
//     const clickedElement = $(event.target);
//     clickedElement.css('text-decoration', 'underline')
// })

// picker.on('mouseout', function(event) {
//     const clickedElement = $(event.target);
//     clickedElement.css('text-decoration', 'none')
// })