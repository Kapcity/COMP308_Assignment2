/* Custom JavaScript geos Here*/
// IIFE -- Immediately Invoked Fuction Expression

/*  
Name: Kapilan Santhiramohan
Date: Feb, 14, 2015 
*/
(function(){

    function Start() {
        console.log(`%c App Started...`, "font-size: 20px; color: blue; font-weight: bold");
    

    $(".btn-danger").onclick(function(event) {
        if(!confirm("Are you sure?")) {
            event.preventDefault();
            window.location.assign("/task-list");
        }

    });
}
    window.addEventListener("load", Start);

})();


document.getElementById("btn_submit").onclick = function() {
   location.href = "/";
};


