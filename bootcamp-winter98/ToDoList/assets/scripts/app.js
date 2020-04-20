const addTaskBtn = document.querySelector("header button");
const createnewTask = document.getElementById("newTaskRequirement");
const showBackdrop = document.getElementById("backdrop");
const cancelButton = document.querySelector(".cancel-button");
const submitActivityButton = document.querySelector(".submit-button");
const userInputs = document.querySelectorAll("input");
const mainBox = document.getElementById("main-box");
const activitiesDisplayList = document.getElementById('display-activity');
const deleteActivity = document.querySelector('.delete-btn');


const activities = [];



const toggleToCreateTask = function () {
  createnewTask.classList.toggle("visible");
  backdropToggle();
};

const backdropToggle = function () {
  showBackdrop.classList.toggle("visible");
};

const cancelNewActivity = function () {
  toggleToCreateTask();
};

const showBackdropHandler = function () {
  toggleToCreateTask();
};

const renderActivities = function (
  titleValue,
  descriptionValue,
  dateValue,
  timeValue,
  priorityValue
) {
  const displayItems = document.createElement("li");
  displayItems.classname = "display-item";
  displayItems.innerHTML = `
    <div class="first-column">
        <p>${priorityValue}</p>
        <h1>${titleValue}</h1>
        <p>${descriptionValue}</p>
    </div>
    <div class="second-column">
        <p>${dateValue}</p>
        <p>${timeValue}</p>
        <button class="delete-btn">Delete</button>
    </div>`;
  activitiesDisplayList.append(displayItems);
};

const updateUi = function () {
  if (!activities.length) {
    mainBox.style.display = "block";
  }
  else{
      mainBox.style.display = 'none';
  }
};
const clearInputs = function(){
    for (let userInput of userInputs){
        userInput.value = '';
    }
}

const submitActivityHandler = function () {
  const activityTitle = userInputs[0].value;
  const activityDescription = userInputs[1].value;
  const activityDate = userInputs[2].value;
  const activityTime = userInputs[3].value;
  const activityPriority = userInputs[4].value;
  if (
    activityTitle === "" ||
    activityDescription === "" ||
    activityDate === "" ||
    activityTime === ""
  ) {
    alert("Please enter a valid value!");
    return;
  }
  const newActivity = {
    id: Math.random().toString(),
    title: activityTitle,
    description: activityDescription,
    date: activityDate,
    time: activityTime,
    priority: activityPriority,
  };
  activities.push(newActivity);
  console.log(activities);
  toggleToCreateTask();
  updateUi();
  renderActivities(
    newActivity.title,
    newActivity.description,
    newActivity.date,
    newActivity.time,
    newActivity.priority
  );
  clearInputs();
};

const deleteActivityHandler = function(){

}

addTaskBtn.addEventListener("click", toggleToCreateTask);
cancelButton.addEventListener("click", cancelNewActivity);
showBackdrop.addEventListener("click", showBackdropHandler);
submitActivityButton.addEventListener("click", submitActivityHandler);
deleteActivity.addEventListener("click", deleteActivityHandler);