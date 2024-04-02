const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");  // 해야 할 일 리스트
const toDoDone = document.getElementById("todo-done");  // 한 일 리스트

let toDos =[]

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos))
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //id 같은거 말고는 다 그대로
    saveToDos();
}

function achiveTodo(event){
    const li = event.target.parentElement // li를 받아서
    const button = event.target // 완료 버튼도 받음
    const addbutton = document.createElement("button");
    addbutton.innerText = "삭제";
    addbutton.addEventListener("click",deleteToDo);
    toDoDone.appendChild(li); //옮기기
    li.removeChild(button);  // 완료버튼 삭제
    li.appendChild(addbutton); // 삭제 버튼 추가
    toDoList.removeChild(li); // 해야 할 일 리스트에서는 삭제   왜 자식노드가 아니라고 뜨지
    
}

function paintToDo(newTodo){ // 해야 할 일 리스트에 그리기
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "완료";
    button.addEventListener("click",achiveTodo);   // 한 일 리스트로 옮기는 버튼 
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);  
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침막기
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id:Date.now()
    }


    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos"); 
//로컬 스트리지에 있는 todo 저장

if (savedToDos){ // 내용이 있으면 
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}