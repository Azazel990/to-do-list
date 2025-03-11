class Task{
    enterKey = 13;
    incomplete = "";
    complete = "";
    task = "";
    sampleTask= "";
    status = 0;
    checkbox = "";

    constructor(){
    }

    createTask = () => {

        const new_task = this.sampleTask[0].cloneNode(true);

        if(!this.checkDuplicate(new_task.firstElementChild.value)){
            const total = this.getTotalTasks();

            new_task.setAttribute("data-status",0);
            new_task.setAttribute("data-task-no",total + 1);
            new_task.removeAttribute("id");
    
            this.cleanSlate();
            return new_task;
        }
    }

    storeTasks = (data) => localStorage.setItem("task-list",JSON.stringify(data));

    fetchTasks = () => JSON.parse(localStorage.getItem("task-list"));

    getTotalTasks = () => document.querySelectorAll('[data-status="0"]').length;

    checkDuplicate = (task_name) => {
        let flag = 0;
        Array.from(this.incomplete[0].children).forEach(element => {
            if(element.firstElementChild.value == task_name && element.id == ""){
                flag = 1;
            }
        });
        return flag;
    }

    cleanSlate = () => this.sampleTask[0].firstElementChild.value = ""
}

class IncompleteTask extends Task{

}

class CompleteTask extends Task{
    
}

