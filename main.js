/*
  Students Task:
  1- Use Sweet Alert if Input Is Empty.
  2- Check if Task is Exists
  3- Create Delete All Task Button
  4- Creat Finish All Task Button
  5- Add Tasks To the Local Storage
*/

// Setting Up Variables

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".task-content");
let tasksCount = document.querySelector(".task-count span");
let tasksCompleted = document.querySelector(".task-completed span");


// Focus On Input Field

window.onload = function (){

    theInput.focus();

    //Calculate Tasks
    CalculateTasks();

};

//  Adding Tha Task 
theAddButton.onclick = function() {

   // If Input is Empty

   if (theInput.value === ''){
       
    alert('Input Is Empty, Plaese Try Again');
  
   //} else if (theInput.value === tasksContainer.){


   }else {

    let noTaskMsg = document.querySelector(".no-tasks-message");

    //Check if Span With No Tasks Message Is Exists

    if (document.body.contains(document.querySelector(".no-tasks-message"))){

        // Remove No Tasks Message
        noTaskMsg.remove();
        
    }

    // Create Main Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
    let deleteElement = document.createElement("span");

    // Create The Main span Text
    let text = document.createTextNode(theInput.value);

    // Create The Main span Text Delete Button
    let deleteText = document.createTextNode("Delete");

    // Add Text To Main Span
    mainSpan.appendChild(text);

    //Add Class To Main Span
    mainSpan.className = 'task-box';

    // Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    //Add Class To Delete Button
    deleteElement.className = 'delete';

    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteElement);

    // Add Th Task To The Container
    tasksContainer.appendChild(mainSpan); 
    
    //Empty The Vlue
    theInput.value = '';

    // Focus On Field
    theInput.focus();

    //Calculate Tasks
    CalculateTasks();
   }
};

document.addEventListener('click', function (e){

    //Delete Task
    if (e.target.className =='delete'){

        // Remove Our Task
        e.target.parentNode.remove();

        // Check Number Of Tasks Inside The Container
        if (tasksContainer.childElementCount == 0){

            createNoTasks();
        }
    }

    //Finish Task
    if (e.target.classList.contains('task-box')){

        // Toggle Class Finished
        e.target.classList.toggle("finished");

        
    }

    //Calculate Tasks
    CalculateTasks();
});


// Function To Create No Tasks Messages
function createNoTasks(){

    // Create Message Span Element
    let msgSpan = document.createElement("span");

    //Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);

    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';
    
    // Append The Message Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);
}

// Function To Calculate Tasks
function CalculateTasks(){

    // Create All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.task-content .task-box').length;

    //Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.task-content .finished').length;

}

//Use Sweet Alert if 
function runalert(){


}