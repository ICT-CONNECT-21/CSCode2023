$(document).ready(function () {
  $("#school").on("change", function (event) {
    var school = $("#school").find(":selected").val();
    $.ajax({
      url: "/findSubjects",
      data: { school: school },
      success: function (result) {
        var $el = $("#subject");
        if (result) {
          $el.empty();
          $el.append($("<option></option>").attr("value", ""));
          $.each(result, function (index, value) {
            $el.append($("<option></option>").attr("value", value["kyoka_code"]).text(value["kyoka_nm"]));
          });
        }
      },
      fail: function () {},
    });
  });
  // モーダルウィンドウを開く
  $(".js-modal-open").on("click", function () {
    var target = $(this).data("target");
    var modal = document.getElementById(target);
    scrollPosition = $(window).scrollTop();

    $("body").addClass("fixed").css({ top: -scrollPosition });
    $(modal).fadeIn();
    return false;
  });

  // モーダルウィンドウを閉じる
  $(".js-modal-close").on("click", function () {
    $("body").removeClass("fixed");
    window.scrollTo(0, scrollPosition);
    $(".js-modal").fadeOut();
    return false;
  });
});
