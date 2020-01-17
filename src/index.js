import "./styles.css";
import "./styles.scss";

$(".app").hide();

$(document).ready(function() {
  $(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");

    $(".app").fadeIn("slow");
    $(".app > .header > .title").animate({ fontSize: "120px" }, 800);

    setTimeout(() => {
      $(".app > .header > .motto").animate({ fontSize: "50px" });
      setTimeout(() => {
        $(".app > .header > .motto").animate({ fontSize: "30px" });
      }, 200);
    }, 1500);
  });

  $(".app > .contact > .contact-form > .contact-form-button").click(event => {
    event.preventDefault();
  });

  $(".app > .contact > .contact-form > a.open-modal").click(function(event) {
    $(this).modal({
      fadeDuration: 250
    });
    return false;
  });

  $(".app > .footer > .not-clickable").click(e => {
    e.preventDefault();
  });
});
