const html_code = document.getElementById('htmlTextArea');
const css_code = document.getElementById('cssTextArea');
const js_code = document.getElementById('jsTextArea');
const result = document.querySelector('#result');

function showTextArea(language) {
    var textAreas = document.getElementsByClassName('code-textarea');
    for (var i = 0; i < textAreas.length; i++) {
      textAreas[i].style.display = 'none';
    }

    var selectedTextArea = document.getElementById(language + 'TextArea');
    selectedTextArea.style.display = 'block';

    if (language === "html") {
        selectedTextArea.placeholder = "HTML code";
      } else if (language === "css") {
        selectedTextArea.placeholder = "CSS code";
      } else if (language === "js") {
        selectedTextArea.placeholder = "JavaScript code";
      }
  }

function run() {
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}

html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;

run();
