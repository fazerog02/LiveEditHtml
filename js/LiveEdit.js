let __LiveEditHtml__editor = document.getElementById("--LiveEditHtml--editor");
let __LiveEditHtml__preview = document.getElementById("--LiveEditHtml--preview");
__LiveEditHtml__editor.value = "<!--your code goes here-->";

let __LiveEditHtml__interval = setInterval(__LiveEditHtml__LivePreview, 1000);

function __LiveEditHtml__LivePreview(){
    if(document.getElementById("--LiveEditHtml--LivePreviewSwitch").checked){
        __LiveEditHtml__editor = document.getElementById("--LiveEditHtml--editor");
        __LiveEditHtml__preview.innerHTML = __LiveEditHtml__editor.value;
    }
}

function __LiveEditHtml__DownloadHtml(){
    let __LiveEditHtml__editor = document.getElementById("--LiveEditHtml--editor");
    let __LiveEditHtml__downloadButton = document.getElementById("--LiveEditHtml--downloadButton");
    let __LiveEditHtml__html =
        "<!DOCTYPE html>\n" +
        "<html>\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "</head>\n" +
        "<body>\n" +
        __LiveEditHtml__editor.value + "\n" +
        "</body>\n" +
        "</html>";
    let __LiveEditHtml__blob = new Blob([__LiveEditHtml__html], {"type": "text/plain"});
    let now_year = new Date().getFullYear();
        let now_month = new Date().getMonth() + 1;
        let now_date = new Date().getDate();
        let now_hour = new Date().getHours();
        let now_minute = new Date().getMinutes();
        let now_second = new Date().getSeconds();
        let nowString = now_year.toString() + "_" +
            now_month.toString() + "_" +
            now_date.toString() + "_" +
            now_hour.toString() + "_" +
            now_minute.toString() + "_" +
            now_second.toString();
        __LiveEditHtml__downloadButton.download = nowString + ".html";
        __LiveEditHtml__downloadButton.href = window.URL.createObjectURL(__LiveEditHtml__blob);
}
