$(document).ready(function() {
   $("#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    // var result = leapYear(year);
    var leapYear = function(year) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return true;
      } else {
        return false;
      }
    };
    $(".result").text(leapYear(year));
    event.preventDefault();
  });
});
