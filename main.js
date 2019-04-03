const fills = document.querySelectorAll(".fill");
const boxes = document.querySelectorAll(".empty");

let currentFill;
// Fill Listeners
for (const fill of fills) {
    fill.addEventListener("dragstart", dragStart);
    fill.addEventListener("dragend", dragEnd);
}

// Loop through empties and call drag events
for(const empty of boxes) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    currentFill = this;
    this.className += ' hold';
    setTimeout(() => (this.className = 'hidden'), 5);

}

function dragEnd() {
    this.className = "fill";
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = "empty";
}

function dragDrop() {
    this.className = 'empty';
    this.appendChild(currentFill);
}
