$(document).ready(function(){
    
    const enterKey = 13;
    const taskList = $("#task-list");
    const tasks = $(".task");

    // event triggers...
    $("#sample-task input").on("keypress",(event) => {
        if(event.which == enterKey){
            if(!checkDuplicate(event.target.value)){
                createTask(event.target.value);
            }

        }
    })
    // event triggers...

    createTask = () => {
        const new_task = $("#sample-task").clone();
        new_task.removeAttr("id");
        new_task.children("input").addClass("inp");
        new_task.prependTo("#task-list");
    }

    checkDuplicate = (task) => {
        let flag = 0;
        $(".inp").each((key,element) => {
            if(element.value.toLowerCase() == task.toLowerCase()) flag = 1;
        })
        return flag;
    }
})