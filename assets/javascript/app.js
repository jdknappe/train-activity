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

var trainData = firebase.database()

$('#submitBTN').on("click", function(){
    var trainName = $('#train-name').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrain = moment($('#first-train-military-time').val().trim(), "HH:mm").subtract(10, "years").format("X");
    var frequency = $('#frequency').val().trim();
    console.log(firstTrain);

    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }

    trainData.ref().push(newTrain)

    alert("Train Added!");

    $('#trainName').val('')
    $('#destination').val('')
    $('#firstTrain').val('')
    $('#frequency').val('')

    return false;
})

trainData.ref().on('child_added', function(snapshot){
    var name = snapshot.val().name
    var destination = snapshot.val().destination
    var frequency = snapshot.val().frequency
    var firstTrain = snapshot.val().firstTrain

    var remainder = moment().diff(moment.unix(firstTrain), 'minutes')%frequency
    var minutes = frequency - remainder
    var arrival = moment().add(minutes, 'm').format("hh:mm A")

    console.log(remainder)
    console.log(minutes)
    console.log(arrival)

    $('#trainTable').append('<tr><td>' + name + '</td><td>' + destination + '</td><td>' + frequency + '</td><td>' + arrival + '</td><td>' + minutes + '</td><tr>');
})