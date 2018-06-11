function Chore(task, time) {
  this.task = task;
  this.time = time;
  this.place = [];
}

function Place(city, state, country) {
  this.city = city;
  this.state = state;
  this.country = country;
}

Place.prototype.thisPlace = function() {
  return this.city + ", " + this.state + ", " + this.country;
}

$(function() {
  $("#toDoForm").submit(function(event) {
    event.preventDefault();
    var task = $("#task").val();
    var time = $("#time").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var country = $("#country").val();

    var newChore = new Chore(task, time);
    var newPlace = new Place(city, state, country);

    newChore.place.push(newPlace);

    
  });

});
