var filter, input, ul, li, a, i, title txtValue;

function search() {
    title = document.querySelector("title");
    input = document.querySelector("#input").value;
    if (input == "moneys") {
      title.innerText = "$$$$$$$$$$$$";
    }
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
