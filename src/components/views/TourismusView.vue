<template>
    <div class="tourismus-view">
        <h1>Tourismus in der Fränkischen Schweiz</h1>

        <section class="intro">
            <p>
                Willkommen in der wunderschönen Fränkischen Schweiz! Entdecken Sie die Sehenswürdigkeiten und
                Aktivitäten, die diese Region zu bieten hat. Von Wanderungen über malerische Dörfer bis hin zu
                historischen Stätten gibt es hier viel zu erleben.
            </p>
        </section>

        <section class="activities">
            <h3>Beliebte Aktivitäten</h3>
            <ul>
                <li>Wandern auf den zahlreichen Wanderwegen</li>
                <li>Besuch der malerischen Burgen und Schlösser</li>
                <li>Besichtigung der Höhlen und Naturdenkmäler</li>
                <li>Genießen Sie die lokale Küche in traditionellen Gasthöfen</li>
                <li>Fahrradtouren durch malerische Landschaften</li>
                <li>Angeln und Bootsfahrten auf den idyllischen Gewässern</li>
            </ul>
        </section>

        <section class="sights">
            <h3>Empfohlene Sehenswürdigkeiten</h3>
            <ul>
                <li>Die Burg Pottenstein</li>
                <li>Die Teufelshöhle</li>
                <li>Die Fränkische Schweiz mit ihren charmanten Dörfern</li>
                <li>Der Rothenberg und der Panoramaweg</li>
                <li>Die Tropfsteinhöhlen von Pottenstein</li>
                <li>Die historische Altstadt von Forchheim</li>
            </ul>
        </section>

        <section class="events">
            <h3>Veranstaltungen & Festivals</h3>
            <p>
                Neben den natürlichen Schönheiten bietet die Fränkische Schweiz auch zahlreiche kulturelle Ereignisse:
            </p>
            <ul>
                <li>Fränkische Schweiz Festival – Ein Highlight für Musik- und Kulturfreunde</li>
                <li>Weinfeste und lokale Märkte</li>
                <li>Hochmittelalterliche Märkte in den Burgen und Schlössern</li>
            </ul>
        </section>

        <section class="location">
            <h3>Regionale Highlights</h3>
            <p>
                Der staatlich anerkannte Luftkurort Egloffstein liegt im malerischen Tal der Trubach. Majestätisch
                überblickt
                die Burg Egloffstein den Ort. Die idyllische Landschaft wird von Fels- und Waldhängen geprägt. Gerade
                für
                Wanderfreunde ist diese Gegend ein Paradies. Von gemütlichen Spaziergängen bis zu herausfordernden
                Routen ist
                alles vorhanden.
            </p>
            <p>
                Der Ort Hundshaupten versteckt sich im Seitental, rundum Wiesen und Wälder und reizvolle Winkel. Über
                Egloffstein
                thront auf steilem Fels die Burg, welche ein beliebtes Ausflugsziel ist.
            </p>
            <p>
                Ein Ziel von Wallfahrern und Kunstfreunden ist Gößweinstein mit seiner prachtvollen Kirche von Balthasar
                Neumann.
                Der Ort Leutenbach, welcher unter dem sagenumwobenen Walberla, inmitten reicher Kirschgärten, ist immer
                ein
                Ausflug wert.
            </p>
        </section>

        <section class="contact">
            <h3>Kontakt</h3>
            <p>Tourist-Information Egloffstein</p>
            <p>Felsenkellerstr. 20, D - 91349 Egloffstein</p>
            <p>Telefon: 09197-202</p>
            <p>Fax: 09197/625491</p>
            <p>E-Mail: <a href="mailto:egloffstein@trubachtal.com">egloffstein@trubachtal.com</a></p>
        </section>
    </div>
</template>

<script>
export default {
    name: "TourismusView",
};
</script>

<style scoped>
.tourismus-view {
    max-width: 2000px;
    padding: 3rem;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0 auto;
    color: #333;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #008c05;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 600;
}

section {
    margin-bottom: 3rem;
}

h3 {
    font-size: 2rem;
    color: #007d03;
    margin-bottom: 1rem;
    font-weight: 600;
}

p {
    font-size: 1.4rem;
    color: #333;
    text-align: justify;
}

ul {
    list-style-type: disc;
    padding-left: 30px;
    font-size: 1.4rem;
    margin-top: 1rem;
}

ul li {
    margin-bottom: 1rem;
}

a {
    color: #008c05;
    text-decoration: none;
    transition: color 0.3s;
}

a:hover {
    color: #005b2b;
}

/* Contact Section */
.contact p {
    font-size: 1.4rem;
    margin: 0.5rem 0;
}

.contact a {
    color: #008c05;
    font-weight: bold;
}

.contact a:hover {
    color: #005b2b;
}

/* Responsive Styles for smaller screens */
@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    ul li {
        font-size: 1.2rem;
    }

    p {
        font-size: 1.2rem;
    }

    .contact p {
        font-size: 1.2rem;
    }
}
</style>
