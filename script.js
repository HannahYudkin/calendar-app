var now = moment().format("dddd, MMMM DD, YYYY");

$("#currentDay").html(`
    <h3> ${now} </h3>
`);

for (let i = 9; i <= 17; i++) {
  let iTime = moment(i, "HH:mm").format("h:mm a");

  let classColor;
  let value;


  if (localStorage.getItem(moment(i, "HH:mm").format("h:mm"))) {
    value = localStorage.getItem(moment(i, "HH:mm").format("h:mm"));
  } else {
    value = "";
  }

  if (i < moment().hour()) {
    classColor = "past";
  } else if (i === moment().hour()) {
    classColor = "present";
  } else {
    classColor = "future";
  }

  $("#planner-container").append(`
    <div class="row">
        <div class="hour 9 col">${iTime}</div>
        <textarea id = ${iTime} class="textarea col ${classColor}">${value}</textarea>
        <button class="saveBtn col">Save</button>
     </div>
    `);
}

$(document).on("click", ".saveBtn", function() {
  let id = $(this)
    .prev()
    .attr("id");
  let text = $(this)
    .prev()
    .val();
  localStorage.setItem(id, text);
  console.log(id, text);
});
