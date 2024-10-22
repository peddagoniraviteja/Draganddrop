// Get container elements
const container1 = document.querySelector('.container');
const container2 = document.querySelector('#container2');

// Get items in container1
const items = document.querySelectorAll('.item');

// Add event listeners for drag and drop
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Drag and drop event handlers
function dragStart(e) {
  // Set data to be transferred during drag
  e.dataTransfer.setData('text/plain', e.target.textContent);
  e.target.classList.add('dragging');
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  // Get transferred data
  const data = e.dataTransfer.getData('text/plain');

  // Create a new element with the transferred data
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.textContent = data;

  // Append the new element to container2
  container2.appendChild(newItem);

  // Remove the dragging class from the dragged item
  const draggedItem = document.querySelector('.item.dragging');
  draggedItem.classList.remove('dragging');

  // Add dropped class to the dropped item
  newItem.classList.add('dropped');

  // Display success message or update UI
  console.log('Item dropped!');
}

// Reset button event listener
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', reset);

// Reset function
function reset() {
  // Clear items in container2
  const itemsInContainer2 = container2.querySelectorAll('.item');
  itemsInContainer2.forEach(item => {
    item.remove();
  });
}