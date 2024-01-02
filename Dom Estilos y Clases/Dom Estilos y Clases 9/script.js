var draggedItem = null;

function dragStart(event) {
    draggedItem = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', draggedItem.innerHTML);
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    if (event.target.classList.contains('sortable-item')) {
        event.target.style.border = '2px dashed #333';
    }
}

function dragLeave(event) {
    if (event.target.classList.contains('sortable-item')) {
        event.target.style.border = '1px solid #ccc';
    }
}

function drop(event) {
    event.preventDefault();
    if (event.target.classList.contains('sortable-item')) {
        event.target.style.border = '1px solid #ccc';
        if (event.target !== draggedItem) {
            draggedItem.innerHTML = event.target.innerHTML;
            event.target.innerHTML = event.dataTransfer.getData('text/html');
        }
    }
}

function dragEnd() {
    draggedItem = null;
}
