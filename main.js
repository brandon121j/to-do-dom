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
    const newElement = $(`<li>${input.val()}</li><`);
    $('.to-dos').append(newElement);
})

// Removes completed
rComplete.on('click', function() {
    if ($('li').hasClass('line')) {
        $('.line').remove()
    }
})

// Removes all tasks
rAll.on('click', function() {
    $('li').remove()
})

// Completes all tasks
complete.on('click', function() {
    $('li').addClass('line');
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