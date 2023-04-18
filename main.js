let toDoList = [
    {
        toDo: "Go shopping",
        
    },
    {
        toDo: "Go to the gym",
        
    },
    {
        toDo: "Play with kids",
        
    }
];
// Display all list
function showToDoList()
{
    let html='';
    //loop over products
    for (let toDo of toDoList){
        html+=`
        <div class="listr">
        <h2>${toDo.toDo}</h2>
        <button class="remove" data-toDo-task="${toDo.task}">remove</button>
        <hr>
        </div>

        `;
    }
    //Add html to the document, toDo div
    document.querySelector('.tasks').innerHTML=html;
}


//Handle all click events
function handleEvents(){
    // Add event listener to entire body an listen for clicks
    document.querySelector('body').addEventListener('click',function(event){
        //Get the closest  product-class to where we clicked 
        let taskClicked =event.target.closest('.task');
        //If you clikc somewhere unrelated, we just return
        if(!taskClicked){return;}
        // If the closest element is the remove button
        let removeButton=event.target.closest('.remove');
        if(removeButton){
            //Get the attribute data-product-name
        let taskName = removeButton.getAttribute('data-task-toDo')
        // Remove product by name from array
            tasks = tasks.filter((task) =>  task.name!==taskName);
            taskClicked.remove();
           
        }
    });
        //Event listener for the add product form that listens for submit, and not click
    let addTaskForm = document.querySelector('#add-task-form');
    addTaskForm.addEventListener('submit', function(event){
        //Dont let the site reload when the  submit is clicked
        event.preventDefault();
        
        //get the values form the form
        let toDo = document.querySelector('#toDO').value;
       
         //Error Handling,checks that all fields that are checked out
        if(toDo){
            //New product
            let newtoDo={
                toDo: toDo,
                
             };
            // Add the product to the products array
            tasks.push(newtoDo);

            //Reset the form and show new div
            let taskssDiv= document.querySelector('.tasks');
            tasksDiv.innerHTML=' ';
            //Render the products again
            showToDoList();
            console.log(tasks); //For debugging 
            //Reset the form
            addTaskForm.reset();
        }else{
            alert ('please fill in all fields!');
        }


    });

    
}
    
showToDoList()
handleEvents();
    
            