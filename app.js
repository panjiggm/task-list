// define UI var
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// invoke all event listeners
loadEventListener()

// load all event listeners
function loadEventListener(){
    // add task event
    form.addEventListener('submit', addTask)
    // remove task item event
    taskList.addEventListener('click', removeTask)
    // clear tasks event
    clearBtn.addEventListener('click', clearTasks)
    // filter tasks event
    filter.addEventListener('keyup', filterTasks)
}

// Add Task
function addTask(e){
    if (taskInput.value === '') {
        alert('Add a Task!')
    }

    // creat li element
    const li = document.createElement('li')
    // add a class
    li.className = 'collection-item'
    //  create text node & append to li
    li.appendChild(document.createTextNode(taskInput.value))
    // create new link element
    const link = document.createElement('a')
    // add class to a
    link.className = 'delete-item secondary-content'
    // add icon
    link.innerHTML = '<i class="fa fa-rocket"></i>'
    // append the link to li
    li.appendChild(link)

    // append li to ul
    taskList.appendChild(li)

    // clear input
    taskInput.value = ''

    e.preventDefault()
}

// Remove Task Item
function removeTask(e){
    // remove li
    if (e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove()
        }
    }
    
}

// Clear Tasks
function clearTasks(){
    // simple
    // taskList.innerHTML = ''

    // faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

// Filter Tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent        
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}