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

    $("form#checklist .form-group").append("<span><input type='checkbox' class='chore'><p>" + newChore.task + "</p></span>");

    $(".chore").siblings().last().click(function() {
      console.log("here");
      $("ul#description").show().html("<li>" + newChore.task + "</li>" + "<li>" + newChore.time + "</li>" + "<li>" + newChore.place[0].thisPlace() + "</li>");
    });

    // $(".crossOut").last().click(function() {
    //   if($(this).parent().hasClass("strikethrough")){
    //     $(this).parent().removeClass("strikethrough");
    //   } else {
    //     $(this).parent().addClass("strikethrough");
    //   }
    // });

    $(".chore").change(function() {
      if(this.checked) {
        $(this).parent().addClass("strikethrough");
        // alert("checked");
      } else {
        $(this).parent().removeClass("strikethrough");
        // alert("not");
      }
    });

  });

});
