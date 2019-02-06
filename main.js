function output() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var language = document.getElementById("selectLanguage").value;
    var highlighted = language == "auto" ? hljs.highlightAuto(input) : hljs.highlightAuto(input, [language]);
    output.innerHTML = highlighted.value;
    changeStyle();
}

function changeStyle() {
    var css = document.getElementById("css");
    css.setAttribute("href", "styles/" + document.getElementById("selectStyle").value + ".css");
}

window.onload = function () {
    var selectLanguage = document.getElementById("selectLanguage");
    var option = document.createElement("option");
    option.value = "auto";
    option.text = "auto";
    option.setAttribute("selected", "");
    selectLanguage.appendChild(option);
    hljs.listLanguages().forEach(function (language) {
        var option = document.createElement("option");
        option.value = language;
        option.text = language;
        selectLanguage.appendChild(option);
    });

    var listStyle = ["a11y-dark", "a11y-light", "agate", "an-old-hope", "androidstudio", "arduino-light", "arta", "ascetic", "atelier-cave-dark", "atelier-cave-light", "atelier-dune-dark", "atelier-dune-light", "atelier-estuary-dark", "atelier-estuary-light", "atelier-forest-dark", "atelier-forest-light", "atelier-heath-dark", "atelier-heath-light", "atelier-lakeside-dark", "atelier-lakeside-light", "atelier-plateau-dark", "atelier-plateau-light", "atelier-savanna-dark", "atelier-savanna-light", "atelier-seaside-dark", "atelier-seaside-light", "atelier-sulphurpool-dark", "atelier-sulphurpool-light", "atom-one-dark-reasonable", "atom-one-dark", "atom-one-light", "brown-paper", "codepen-embed", "color-brewer", "darcula", "dark", "darkula", "default", "docco", "dracula", "far", "foundation", "github-gist", "github", "gml", "googlecode", "grayscale", "gruvbox-dark", "gruvbox-light", "hopscotch", "hybrid", "idea", "ir-black", "isbl-editor-dark", "isbl-editor-light", "kimbie.dark", "kimbie.light", "lightfair", "magula", "mono-blue", "monokai-sublime", "monokai", "nord", "obsidian", "ocean", "paraiso-dark", "paraiso-light", "pojoaque", "purebasic", "qtcreator_dark", "qtcreator_light", "railscasts", "rainbow", "routeros", "school-book", "shades-of-purple", "solarized-dark", "solarized-light", "sunburst", "tomorrow-night-blue", "tomorrow-night-bright", "tomorrow-night-eighties", "tomorrow-night", "tomorrow", "vs", "vs2015", "xcode", "xt256", "zenburn"];
    var selectStyle = document.getElementById("selectStyle");
    listStyle.forEach(function (style) {
        var option = document.createElement("option");
        option.value = style;
        option.text = style;
        if (style == "monokai-sublime") option.setAttribute("selected", "");
        selectStyle.appendChild(option);
    });
}

function copyCode(){
    var output = document.getElementById("output");
    var range = document.createRange();
    range.selectNodeContents(output);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}
