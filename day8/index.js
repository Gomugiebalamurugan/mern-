function addEvent() {
    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    let time = document.getElementById("eventTime").value;
    let location = document.getElementById("eventLocation").value;

    if (name === "" || date === "" || time === "" || location === "") {
        alert("Please fill all fields!");
        return;
    }

    let eventItem = document.createElement("li");
    eventItem.innerHTML = `<strong>${name}</strong> <br> date:${date}
    <br> time: ${time} <br> location:${location}`;
    
    document.getElementById("eventsContainer").appendChild(eventItem);

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("eventTime").value = "";
    document.getElementById("eventLocation").value = "";
}
