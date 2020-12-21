document.addEventListener("DOMContentLoaded", () => {
    const input: HTMLElement = document.querySelector("#textLabel");
    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            console.log(input.value);
            input.value = "";
        }
    })
})
$(function () {
    const availableTags: string[] = [
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
