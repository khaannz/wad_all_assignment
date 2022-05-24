$(document).ready(function()
{
    $('#sub-btn').click(function(event)
    {
        var formdata={
            fname : $("#fname").val(),
            lname : $("#lname").val(),
            course : $("#course").val(),
            gender : $("#gender").val(),
            phone : $("#phone").val(),
            add : $("#add").val(),
            email : $("#email").val(),
            

        };

        storeLocalStorage(formdata);

        event.preventDefault();
        console.log(formdata);
        sendData(formdata);
        console.log(formdata);
        window.location.href='displayPage.html';
        console.log(formdata);
    }
    
    )
}
)

function storeLocalStorage(formdata)
{
    console.log(formdata);
    if(!localStorage.getItem("formdata")){
        localStorage.setItem("formdata",JSON.stringify(formdata));
    }
    else{
        localStorage.removeItem("formdata");
        localStorage.setItem("formdata",JSON.stringify(formdata));
    }
    
}

function sendData(formdata){
    console.log(formdata);
    var studentData=JSON.stringify(formdata);
    let xhr= new XMLHttpRequest();

    xhr.open("POST","http://localhost:5500",true);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(studentData);

}