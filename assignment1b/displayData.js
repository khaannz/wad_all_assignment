$(document).ready(function(){
    getData();
});

function getData()
{
    let localStorageData = localStorage.getItem("formdata");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);

    $("#fname").text(studentObj.fname);
    $("#lname").text(studentObj.lname);
    $("#course").text(studentObj.course);
    $("#gender").text(studentObj.gender);
    $("#phone").text(studentObj.phone);
    $("#add").text(studentObj.add);
    $("#email").text(studentObj.email)

}

