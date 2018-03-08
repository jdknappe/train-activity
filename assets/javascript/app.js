// all code should go within the document ready function
$(document).ready(function () {

    var trainName = $('#train-name').val().trim();
    // * Destination 
    var destination = $('#destination').val().trim();
    // * First Train Time -- in military time
    var firstTrainMilitary = $('#first-train-military-time').val().trim();
    // * Frequency -- in minutes
    var frequency = $('#frequency').val().trim();

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAw-M8-vQsqAAJaETt5fRTCUPu32gPl4aM",
        authDomain: "train-activity-6aaab.firebaseapp.com",
        databaseURL: "https://train-activity-6aaab.firebaseio.com",
        projectId: "train-activity-6aaab",
        storageBucket: "train-activity-6aaab.appspot.com",
        messagingSenderId: "306393814865"
    };
    firebase.initializeApp(config);

    var database = firebase.database()

    function getHTMLTrain() {
        var row = $("<div/>");
        row.addClass("row");
        var tableData = $("<td>").html("<tr>" + trainName + destination + firstTrainMilitary + frequency + "</tr>")
        row.append(table)
        return row;
    }

    function addTrainToFirebase() {
        database.ref().push({
            trainName: trainName,
            destination: destination,
            firstTrainMilitary: firstTrainMilitary,
            frequency: frequency
        }) 
    }

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val())
    })

    function getNextTrainTime(currentTime, firstTrainMilitary, frequency) {
        var nextTrainTime = "get moment object and put here";
        // Use moment.js to calculate nextTrainTime based on currentTime, firstTrainMilitary, and frequency.
        return nextTrainTime;


    }

    $('form').on('submit', function () {
        prevent
        // * Train Name
        var trainName = $('#train-name').val().trim();
        // * Destination 
        var destination = $('#destination').val().trim();
        // * First Train Time -- in military time
        var firstTrainMilitary = $('#first-train-military-time').val().trim();
        // * Frequency -- in minutes
        var frequency = $('#frequency').val().trim();

        // Will use firebase to add this train to our database.
    });



    //End document.ready... no code below this line.
});