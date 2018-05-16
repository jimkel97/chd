    $(document).ready(function () {

      $(".verifyC").hide();
      $(".verifyP").hide();
      $(".1").show();

      $(".verifyP").click(function () {
        $(".verifyC").hide(100);
        $(this).children().first().show(100);
      });

      $(".verifyC").click(function () {
        $(this).remove();
        $(this).next().show(100);
      });

      $(".editC").hide();
      $(".1").show();

      $(".editP").click(function () {
        $(".editC").hide(100);
        $(this).children().first().show(100);
      });

      $(".editC").click(function () {
        $(this).remove();
        $(this).next().show(100);
      });


    });