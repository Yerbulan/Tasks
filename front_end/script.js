$(document).ready(function() {
    // Function to submit a new task
    $('#task-form').on('submit', function(event){
        event.preventDefault();
        console.log("form submitted!")  // sanity check
        create_task();
    });

    // AJAX for posting
    function create_task() {
        console.log("create task is working!") // sanity check
        $.ajax({
            url : "http://localhost:8000/tasks/", // the endpoint
            type : "POST", // http method
            data : { title : $('#title').val() }, // data sent with the post request

            // handle a successful response
            success : function(json) {
                $('#title').val(''); // remove the value from the input
                console.log(json); // log the returned json to the console
                $("#task-list").append('<h4>'+json.title+'</h4>'); // append the task to the list
                console.log("success"); // another sanity check
            },

            // handle a non-successful response
            error : function(xhr,errmsg,err) {
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
    };
});