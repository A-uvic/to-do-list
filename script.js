//Variables
var clearAll = document.getElementById("clear-all");
var btnAdd = document.getElementById("add-item");
var list = document.getElementById("list");
var tasks = []
counter = 0;

btnAdd.addEventListener("click", addTask);
list.addEventListener("click", getButtonId)

function addTask() {
    counter++
    var taskContent = document.getElementById("taskName").value
    var object = { Content: taskContent, Id: counter, }
    tasks.push(object)

    attScreen()
}

function attScreen() {
    list.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        list.innerHTML += `
        <div class="item">
                <label>
                    ${tasks[i].Content}
                </label>
                <div class="btn">
                    <button class="btn-done"><i class="fa-solid fa-check"></i></button><button class="btn-remove remove"><i id="${tasks[i].Id}" class=" btn-remove fa fa-x"></i></button>
                </div>
            </div>
        `
    }
}


function getButtonId(e) {

    if (e.target.classList.contains('btn-remove')) {
        let btnId = e.target.id

        removeTask(btnId)
    }

}

function removeTask(btnId) {

    for (let i = 0; i <= counter; i++) {
        if (tasks[i].Id == btnId) {
            tasks.splice(i, 1);
            attScreen()
        }
    }
}