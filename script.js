var now = moment().format("dddd, MMMM DD, YYYY");





// let date = moment().date();
// let day = moment().day();
// let month = moment().month();
// let year = moment().year();

// console.log(day);
// console.log(date);
// console.log(now);
// console.log(hour);








$("#currentDay").html(`
    <h3> ${now} </h3>
`);

for (let i=9; i <= 17; i++) {
    let iTime = moment(i, 'HH:mm').format("h:mm a")
    
    let classColor;
    let plannerHour = moment().hour();
    
    
    if (i < moment().hour()) {
        classColor = "past";
    }
    else if (i === moment().hour()) {
        classColor = "present";
    }
    else {
        classColor = "future";
    }
    










    $("#planner-container").append( `
    <div class="row">
        <div class="hour 9 col">${iTime}</div>
        <textarea class="textarea col ${classColor}"></textarea>
        <button class="saveBtn col">Save</button>
     </div>
    `)
}



