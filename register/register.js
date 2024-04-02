function opens(){
    const modal = document.getElementById("modal-wrapper")
    modal.style.display = "flex"
}

function closes(){
    const modal = document.getElementById("modal-wrapper")
    modal.style.display = "none"
}

function register(){
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    const age = document.getElementById("age").value;
    const ageError = document.getElementById("ageError");

    const password = document.getElementById("password").value;
    const passwordCheck = document.getElementById("passwordCheck").value;
    const passwordError1 = document.getElementById("passwordError1");
    const passwordError2 = document.getElementById("passwordError2");
    //const targetBtn = document.getElementById("register");
   
    const REGPASSSWORD = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{4,12}$/;
    
    let allow = true; //가입하기 누르기 유무

    
    
    /*
    email.addEventListener("keyup", validate);
    age.addEventListener("keyup", validate);
    password.addEventListener("keyup",validate)
    if (!(email && age && password)) {
        targetBtn.disabled = true;
    } else {
        targetBtn.disabled = false;
    }
    */


    //name
    if(name === ""){
        nameError.innerHTML="이름을 입력해 주세요";
        allow = false
    }
    else{
        nameError.innerHTML="멋진 이름이네요!";
        nameError.style.color="green";
    }


    //email
    if(email === ""){
        emailError.innerHTML="이메일을 입력해 주세요.";
    }
    else if(email.includes("@")){
        let emailId = email.split('@')[0] //@의 앞부분
        let emailServer = email.split('@')[1] //@의 뒷부분
        if(emailId ==="" || emailServer === ""){
            emailError.innerHTML="이메일이 올바르지 않습니다."
            allow = false;
        }
        else{
            emailError.innerHTML="올바른 이메일 형식입니다."
            emailError.style.color="green";
        }
    }
    else{
        emailError.innerHTML="이메일은 @를 포함하는 형식이어야 합니다."
        allow = false;
    }


    //age string 값임
    if(age === ""){
        ageError.innerHTML="나이를 입력해주세요."
        allow = false;
    }
    else if(age <= 0){  //string 이랑 0이랑 크기 비교가 되네
        ageError.innerHTML="나이는 양의 정수여야 합니다."
        allow = false;
        
    }
    else if (age < 19){
        ageError.innerHTML="아기는 가입 할 수 없다."
        allow = false;
        console.log(Number.isInteger(Number(age)) === false)
    }
    else if(isNaN(age)){
        ageError.innerHTML="나이를 숫자로 입력해주세요."
        allow = false;
    }
    else if(Number.isInteger(Number(age)) === false){
        ageError.innerHTML="나이를 정수로 입력해주세요."
        allow = false;
    }
    else{
        ageError.innerHTML="올바른 나이 형식입니다."
        ageError.style.color="green";
    }
    



    //password https://blog.naver.com/dg_667/220747298152

    if(password===""){
        passwordError1.innerHTML="비밀번호를 입력해주세요."
        allow = false
    }
    else if(REGPASSSWORD.test(password)){//통과하면
        if(password === passwordCheck){ //일치하면
            passwordError1.innerHTML="올바른 형식의 비밀번호입니다!"
            passwordError1.style.color="green";
            passwordError2.innerHTML="올바른 형식의 비밀번호입니다!"
            passwordError2.style.color="green";
        }
        else{ //불일치
            passwordError1.innerHTML="비밀번호가 동일하지 않습니다."
            passwordError2.innerHTML="비밀번호가 동일하지 않습니다."
            allow = false
        }

    }
    else{
        console.log(REGPASSSWORD.test(password))
        passwordError1.innerHTML="비밀번호는 4자 이상 12자 이하, 영문, 숫자, 특수문자의 조합이여야 합니다."
        allow=false
    }
    if(passwordCheck ===""){
        passwordError2.innerHTML="비밀번호가 동일하지 않습니다."
    }


   

    if(allow){
        nameError.innerHTML=""
        emailError.innerHTML=""
        ageError.innerHTML=""
        passwordError1.innerHTML=""
        passwordError2.innerHTML=""
        opens();
    }   


    //const register = document.getElementsByClassName("register");

}