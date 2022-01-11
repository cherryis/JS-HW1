document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("button1").addEventListener("click", function () {

        document.getElementById("textbox1").value = "success";
    });
});

function ding(){
    console.log('hello');
}