let intervallo;
document.body.onload = () => {
    document.getElementById("togliN").value = document.getElementById("selezionaTogliN").value;
}

document.getElementById("selezionaTogliN").onmouseenter = () => {
    intervallo = setInterval(() => {
        document.getElementById("togliN").value = document.getElementById("selezionaTogliN").value;
    }, 100);
}

document.getElementById("selezionaTogliN").onmouseleave = () => {
    clearInterval(intervallo);
}

document.getElementById("togliN").onmouseleave = () => {
    document.getElementById("selezionaTogliN").value = document.getElementById("togliN").value;
}