const taskContainer = document.querySelector(".task__container");

const generateNewCard = (taskData) =>  `
<div class="col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card text-center">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-dumpster-fire"></i></button>
      </div>
      <img src=${taskData.imageurl}
       class="card-img-top"
        alt="...">

      <div class="card-body">
        <h5 class="card-title">${taskData.taskTitle}</h5>
        <p class="card-text">
        ${taskData.taskDescription}
        </p>
        <a href="#" class="btn btn-primary float-start">${taskData.taskType}</a>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <button type="button" class="btn btn-outline-primary">  Open task</button>
      </div>
    </div>
  </div>`;

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`, //unique number for id
        imageurl: document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };
           
   taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
};

