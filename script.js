let palindromeBtn = document.querySelector('.palindrome') ;
let modalCont1 = document.querySelector(".modal-palindrome") ;
let input1 = document.querySelector(".palin-input");
let flag1 = false ;
let modalPalinBtn = document.querySelector("#liveAlertBtn1")
const alertPlaceholder = document.querySelector('#liveAlertPlaceholder1') ;

let correctIndexBtn = document.querySelector('.correct-index')
let modalCont2 = document.querySelector(".modal-correctindex") ;
let flag2 = false ;
let input2 = document.querySelector(".correctIndex-input") ;
let modalCorrectindexBtn = document.querySelector("#liveAlertBtn2")
const alertPlaceholder2 = document.querySelector('#liveAlertPlaceholder2') ;

let msg = "" ;
let type = "" ;
let myPlaceholder = null



palindromeBtn.addEventListener("click", function (e) {
    // Display a Modal
    // addflag, true - Modal Display
    // addflag, false - Modal Hide
    if(flag2 == false){
        flag1 = !flag1;
    }
    

    if (flag1) {
        modalCont1.style.display = "flex";

    } else {
        modalCont1.style.display = "none";
        input1.value = '';
        let checkAlert = document.querySelector('.alert-dismissible')  
        if(checkAlert){
            checkAlert.remove()
        }
        myPlaceholder = null;
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        modalCont1.style.display = "none";
        input1.value = '';
        flag1 = false; 
        let checkAlert = document.querySelector('.alert-dismissible')  
        if(checkAlert){
            checkAlert.remove()
        }
        myPlaceholder = null ;
    }
});

correctIndexBtn.addEventListener("click", function (e) {
    // Display a Modal
    // addflag, true - Model Display
    // addflag, false - Model Hide
    if(flag1 == false){
        flag2 = !flag2;
    }
    

    if (flag2) {
        modalCont2.style.display = "flex";

    } else {
        modalCont2.style.display = "none";
        input2.value = null;
        let checkAlert = document.querySelector('.alert-dismissible')  
        if(checkAlert){
            checkAlert.remove()
        }
        myPlaceholder = null ;
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        modalCont2.style.display = "none";
        input2.value = null;
        flag2 = false; 
    }
});


// Getting palindrome output alert
if (modalPalinBtn) {
    modalPalinBtn.addEventListener('click', () => {
      checkPalin(input1.value) ;
      myPlaceholder = alertPlaceholder ;
      alert(msg, type, myPlaceholder)
    })
}

// Getting correct index output alert
if (modalCorrectindexBtn) {
    modalCorrectindexBtn.addEventListener('click', () => {
      correctIndex(input2.value) ;
      myPlaceholder = alertPlaceholder2 ;
      alert(msg, type, myPlaceholder)
    })
}

// Palindrome Checker Function
function checkPalin(str){
    if(str.length === 0){
        msg = "Please enter a valid string" ;
        type = "danger"
    }
    else{
        str = str.trim()
        let st = 0 ;
        let end = str.length - 1 ;
        while(st < end){
            if(str[st] != str[end]){
                msg = "Not Palindrome" ;
                type = "danger"
                return msg ;
            }
            st++ ;
            end-- ;
        }
        msg = "Palindrome" ;
        type = "success"
    }
    return msg ;
}

// Check Correct Index function
function correctIndex(num){
    if(num == ""){
        msg = "Please enter a valid input"
        type = "danger"
        return msg ;
    }
    let arr = [] ;
    let str = num.toString() ;
    console.log(num)

    for(let i=0 ; i<str.length ; i++){
        let int = parseInt(str[i]) ;
        arr.push(int) ;
    }

    console.log(arr)

    let eId = 0 ;
    let oId = 1 ;
    while(eId <= arr.length-1 || oId <= arr.length-1){
        
        if(eId <= arr.length-1){
            if(arr[eId]%2 != 0){
                msg = "Incorrect"
                type = "danger"
                return msg ;
            }
        }
        if(oId <= arr.length-1){
            if(arr[oId]%2 == 0){
                msg = "Incorrect"
                type = "danger"
                return msg ;
            }
        }
        eId += 2 ;
        oId += 2 ; 
    }

    msg = "Correct" ;
    type =  "success" ;
    return msg ;
}


// Alert Setter Function
const alert = (message, type, placeholder) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML =
      `<div class="alert alert-${type} alert-dismissible" role="alert">
         <div>${message}</div>
      </div>`

    let checkAlert = document.querySelector('.alert-dismissible')  
    if(checkAlert){
        checkAlert.remove()
    }
    placeholder.append(wrapper)
}


