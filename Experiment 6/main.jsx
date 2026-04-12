function changeHeading(){
    let text = document.getElementById("inputText").value;

    if(text !== ""){
        document.getElementById("heading").innerText = text;
    }
}

function changeBackground(){
    document.body.style.backgroundColor = "#dbeafe";
}

function increaseFont(){
    let para = document.getElementById("para");
    let size = window.getComputedStyle(para).fontSize;
    size = parseFloat(size) + 2;
    para.style.fontSize = size + "px";
}

function toggleParagraph(){
    let para = document.getElementById("para");

    if(para.style.display === "none"){
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

function resetPage(){
    location.reload();
}