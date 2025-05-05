// Produkte in drei Kategorien
const eingabeProdukte = [
    { name: "Maus", bild: "Produkte/bilder/Eingabe/maus.jpg" },
    { name: "Tastatur", bild: "Produkte/bilder/Eingabe/tastatur.jpeg" },
    { name: "Mikrofon", bild: "Produkte/bilder/Eingabe/mikrofon.jpeg" },
    { name: "Mousepad", bild: "Produkte/bilder/Eingabe/mousepad.jpeg" }
];

const ausgabeProdukte = [                                                        
    { name: "Bildschirm", bild: "Produkte/bilder/Ausgabe/bildschirm.jpeg" },
    { name: "Lautsprecher", bild: "Produkte/bilder/Ausgabe/lautsprecher.jpeg" },
    { name: "Beamer", bild: "Produkte/bilder/Ausgabe/beamer.jpeg" },
    { name: "Headset", bild: "Produkte/bilder/Ausgabe/headset.jpe	g" }
];

const netzwerkProdukte = [
    { name: "Router", bild: "Produkte/bilder/Netzwerk/router.jpeg" },
    { name: "WLAN-Verstärker", bild: "Produkte/bilder/Netzwerk/wlan-verstaerker.png" },
    { name: "Splitter", bild: "Produkte/bilder/Netzwerk/splitter.jpg" },
    { name: "LAN-Kabel", bild: "Produkte/bilder/Netzwerk/lan-kabel.jpeg" }
];

// HTML in die Seite einfügen
function ladeProdukte() {
    const grid = document.querySelector('.product-grid');

    const spalte1 = document.createElement('div');
    spalte1.classList.add('column');
    eingabeProdukte.forEach(produkt => {
        spalte1.appendChild(erstelleProdukt(produkt));
    });

    const spalte2 = document.createElement('div');
    spalte2.classList.add('column');
    ausgabeProdukte.forEach(produkt => {
        spalte2.appendChild(erstelleProdukt(produkt));
    });

    const spalte3 = document.createElement('div');
    spalte3.classList.add('column');
    netzwerkProdukte.forEach(produkt => {
        spalte3.appendChild(erstelleProdukt(produkt));
    });

    grid.appendChild(spalte1);
    grid.appendChild(spalte2);
    grid.appendChild(spalte3);
}

// Produkt-Karte erstellen
function erstelleProdukt(produkt) {
    const div = document.createElement('div');
    div.classList.add('product');

    const img = document.createElement('img');
    img.src = produkt.bild;
    img.alt = produkt.name;

    const p = document.createElement('p');
    p.textContent = produkt.name;

    div.appendChild(img);
    div.appendChild(p);

    return div;
}

// Button-Logik
document.addEventListener('DOMContentLoaded', () => {
    ladeProdukte();

    const moreButton = document.getElementById('moreButton');
    moreButton.addEventListener('click', () => {
        // Benutzer zur Eingabe-Seite weiterleiten
        window.location.href = "Eingabe/index.html";
    });
});
