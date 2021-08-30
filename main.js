const completeAllTasks = $('.completeEvery');

const removeComplete = $('.removeCompleted');

const addButton = $('.addButton');

const removeAll = $('.removeAll');

const taskList = $('.results');

let toDoSelector = $('.to-dos');

let input = $('#textInput');

const taskCompleter = (e) => {
    const clickedElement = $(e.target);
    clickedElement.hasClass('line') ? clickedElement.removeClass('line') : clickedElement.addClass('line');
}

const completeAll = () => {
    $('li').hasClass('line') ? $('.completeEvery').text('Complete All') + $('li').removeClass('line') : $('.completeEvery').text('Uncomplete All') + $('li').addClass('line');
}

const removeAllTasks = () => {
    let confirmBox = confirm('Are you sure you want to remove all?');
    if (confirmBox === true) {$('li').remove()};
}

const removeCompletedTasks = () => {
    if ($('li').hasClass('line')) {$('.line').remove()};
}

const addToDo = () => {
    if (input.val().length >= 1) {
        let newToDo = $(`<li>${input.val()}</li><`);
        $('.to-dos').append(newToDo);
    } else if (input.val().length === 0) {
        alert('You must enter a task');
    }
}

const taskRenamer = (e) => {
    let clickedElement = $(e.target);
    let p = prompt('Rename task');
    clickedElement[0].innerText = p;
    e.preventDefault();
}

toDoSelector.on('click', taskCompleter);

toDoSelector.on('contextmenu', taskRenamer);

addButton.on('click', addToDo);

removeComplete.on('click', removeCompletedTasks);

removeAll.on('click', removeAllTasks);

completeAllTasks.on('click', completeAll)

