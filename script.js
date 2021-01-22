document.addEventListener("DOMContentLoaded", function(){

  $("#data-form").submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "http://34.198.60.157:3300/api/userid",
      data: $("#data-input").serialize(),
      success: function (msg) {
        window.location.href="http://34.198.60.157:4200/"
      },
      error: function () {
        alert("error");
      }
    });
  });
});