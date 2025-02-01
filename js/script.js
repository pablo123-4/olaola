let size = 100

document.getElementById("botonRojo").addEventListener("click", function () {
    size += 50;
    this.style.width = size + "px";
    this.style.height = (size / 2) + "px";
    this.style.fontsize = (16 + size / 20) + "px";
})

