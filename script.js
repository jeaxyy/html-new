// 1. perubuahan background div
document.getElementById("container1").style.backgroundColor = "red"; 
document.getElementById("container2").style.backgroundColor = "purple"; 

// 2. isi atribut href pada tag <a> menjadi https://www.google.com
const linkElement = document.querySelector("#a a"); 
linkElement.setAttribute("href", "https://www.google.com");

// 3. loop untuk mengubah text, style, size, dan warna background
const paragraphs = document.querySelectorAll("#a p");
paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Paragraf ke-${index + 1}`; 
    paragraph.style.fontStyle = "italic"; 
    paragraph.style.fontSize = `${16 + index * 2}px`; 
    paragraph.style.backgroundColor = index % 2 === 0 ? "lightyellow" : "lightpink"; 
});
const listItems = document.querySelectorAll("#container2 .list");
listItems.forEach((listItem, index) => {
    listItem.textContent = `List Item ${index + 1}`; 
    listItem.style.fontWeight = "bold"; 
    listItem.style.fontSize = `${14 + index * 2}px`; 
    listItem.style.backgroundColor = index % 2 === 0 ? "lightcyan" : "lightgray"; 
});
