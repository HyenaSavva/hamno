document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector("#textLabel");
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            console.log(input.value);
            input.value = "";
        }
    });
});
$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#textLabel").autocomplete({
        source: availableTags
    });
});
