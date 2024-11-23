
document.getElementById("btnAddTask").addEventListener("click",addTask);



function addTask(){
    let userInput = document.getElementById("txtUserInput").value;
    // let x =10;
    // let y =20;

    // let z = x+y;

    // z = z+10;

    // z +=10;
    // z +=10;
    // z +=10;
    // z +=10;
    // z +=10;
    // z +=10;

    // console.log(z);
    
    document.getElementById("todoList").innerHTML+= `
    <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">${userInput}</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-danger"><input class="form-check-input" type="checkbox" value="" id="doneCheckBox"></a>
  </div>
</div>
    `;




    document.getElementById("doneCheckBox").addEventListener("change",function(){
        console.log(this.checked);
        if(this.checked){
           taskArray.push(${userInput})
        }
        
    })
}
