const pageLoad = function () {
    const container = document.getElementById("content");
    container.style.display = "grid";
    container.style.justifyContent = "center";

    const header = document.createElement("div");
    header.id = "header";
    header.innerHTML = "Chipolte";
    document.getElementById("content").appendChild(header);
    header.style.textAlign = "center";
    header.style.margin = "10px";
    
    const desc = document.createElement("div");
    desc.id = "description";
    desc.innerHTML = "Chipolte provides a quick and healthy solution to your fast food needs. At Chipolte you can get authentic mexican food, for a resonable price. Whether it's a burrito, tacos, quesadillas or salad, Chipolte is the place to be.";
    document.getElementById("content").appendChild(desc);
    desc.style.height = "200px";
    desc.style.width = "400px";
    desc.style.border = "2px solid #000000";
    desc.style.padding = "15px";
    desc.style.margin = "20px"

    const hoursLabel = document.createElement("div");
    hoursLabel.id = "hoursLabel";
    hoursLabel.innerHTML = "Hours"
    document.getElementById("content").appendChild(hoursLabel);
    hoursLabel.style.height = "200px";
    hoursLabel.style.width = "400px";
    hoursLabel.style.border = "2px solid #000000";
    hoursLabel.style.padding = "15px";
    hoursLabel.style.margin = "20px"

    const hoursmon = document.createElement("div");
    hoursmon.id = "monday";
    hoursmon.class = "dayOfWeek";
    hoursmon.innerHTML = "Monday: 10am - 11pm";
    document.getElementById("hoursLabel").appendChild(hoursmon)

    const hourstues = document.createElement("div");
    hourstues.id = "tuesday";
    hourstues.class = "dayOfWeek";
    hourstues.innerHTML = "Tuesday: 10am - 11pm";
    document.getElementById("hoursLabel").appendChild(hourstues)

    const hourswed = document.createElement("div");
    hourswed.id = "wednesday";
    hourswed.class = "dayOfWeek";
    hourswed.innerHTML = "Wednesday: 10am - 11pm";
    document.getElementById("hoursLabel").appendChild(hourswed)

    const hoursthurs = document.createElement("div");
    hoursthurs.id = "thursday";
    hoursthurs.class = "dayOfWeek";
    hoursthurs.innerHTML = "Thursday: 10am - 11pm";
    document.getElementById("hoursLabel").appendChild(hoursthurs)

    const hoursfri = document.createElement("div");
    hoursfri.id = "friday";
    hoursfri.class = "dayOfWeek";
    hoursfri.innerHTML = "Friday: 10am - 12am";
    document.getElementById("hoursLabel").appendChild(hoursfri)

    const hourssat = document.createElement("div");
    hourssat.id = "saturday";
    hourssat.class = "dayOfWeek";
    hourssat.innerHTML = "Saturday: 10am - 12am";
    document.getElementById("hoursLabel").appendChild(hourssat)

    const hourssun = document.createElement("div");
    hourssun.id = "sunday";
    hourssun.class = "dayOfWeek";
    hourssun.innerHTML = "Sunday: 10am - 11pm";
    document.getElementById("hoursLabel").appendChild(hourssun)

    const locationLabel = document.createElement("div");
    locationLabel.id = "locationLabel";
    locationLabel.innerHTML = "Location"
    document.getElementById("content").appendChild(locationLabel);
    locationLabel.style.height = "200px";
    locationLabel.style.width = "400px";
    locationLabel.style.border = "2px solid #000000";
    locationLabel.style.padding = "15px";
    locationLabel.style.margin = "20px"

    const location = document.createElement("div");
    location.id = "location";
    location.innerHTML = "8700 NE Flintlock Rd, Kansas City, MO"
    document.getElementById("locationLabel").appendChild(location);

}

const pageLoad2 = function () {
    const manager = document.createElement("div");
    manager.id = "manager";
    manager.innerHTML = "Manager"
    document.getElementById("content").appendChild(manager);
    manager.style.height = "200px";
    manager.style.width = "200px";
    manager.style.border = "2px solid #000000";
    manager.style.padding = "15px";
    manager.style.margin = "20px"

    const managerInfo = document.createElement("div");
    managerInfo.id = "managerInfo";
    managerInfo.innerHTML = "John Smith";
    document.getElementById("manager").appendChild(managerInfo)

    const owner = document.createElement("div");
    owner.id = "owner";
    owner.innerHTML = "Owner"
    document.getElementById("content").appendChild(owner);
    owner.style.height = "200px";
    owner.style.width = "200px";
    owner.style.border = "2px solid #000000";
    owner.style.padding = "15px";
    owner.style.margin = "20px"

    const ownerInfo = document.createElement("div");
    ownerInfo.id = "managerInfo";
    ownerInfo.innerHTML = "John Smith";
    document.getElementById("owner").appendChild(ownerInfo)
}

export { pageLoad }
export { pageLoad2 }
