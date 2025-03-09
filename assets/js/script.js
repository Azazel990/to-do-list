$(document).ready(function(){
    
    const enterKey = 13;
    const incomplete = $("#incomplete");
    const tasks = $(".task");
    const sampleTask = $("#sample-task");
    // event triggers...
    $("#sample-task input").on("keypress",(event) => {
        if(event.which == enterKey && event.target.value != ""){
            if(!checkDuplicate(event.target.value)){
                createTask(event.target.value);
                cleanSlate();
            }
        }
    })
    // event triggers...

    createTask = () => {
        
        const new_task = $(sampleTask).clone();

        new_task.removeAttr("id");
        new_task.children("input").addClass("inp");
        new_task.appendTo(incomplete);
        
        const total = $("#incomplete .inp").length;
        new_task.attr("data-task-no",total)

        storeData();

    }

    storeData = () => {
        let incomplete = [];
        let compelete = [];
        $("#incomplete .inp").each((index,element) => {
            console.log($(this));
        })
    }

    checkDuplicate = (task) => {
        let flag = 0;
        $(".inp").each((key,element) => {
            if(element.value.toLowerCase() == task.toLowerCase()) flag = 1;
        })
        return flag;
    }

    cleanSlate = () => $(sampleTask).children("input").val("");
})