<script setup lang="ts">
import FamilyIcon from 'vue-material-design-icons/AccountGroup.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarkerOutline.vue';
import ParkingIcon from 'vue-material-design-icons/CarOutline.vue';
</script>

<template>
    <div class="about-view">
        <h1>Über Uns</h1>

        <section class="intro">
            <p>
                Unser Haus befindet sich in Egloffstein, einem anerkannten und alt bewiesenen Luftkurort im idyllischen
                Trubachtal und liegt im Süden der Fränkischen Schweiz, dem Erholungsgebiet schlechthin in Deutschland.
            </p>
            <p>
                Unser Gästehaus verfügt über 3 DZ mit Balkon und 2 EZ.
            </p>
        </section>

        <section class="nature">
            <h3>Erholung in der Natur</h3>
            <p>
                Hier kann man sich an der unberührten Natur erfreuen. Es gibt zahllose Sport- und Freizeitmöglichkeiten
                und
                Kulturelles wird ebenfalls genügend geboten. Hier kommt jeder auf seine Kosten.
            </p>
        </section>

        <section class="facilities">
            <h3>Park- & Abstellmöglichkeiten</h3>
            <div class="facility">
                <ParkingIcon class="icon" :size="50" />
                <div class="text">
                    <p>2 Pkw-Parkplätze befinden sich neben dem Haus. Weitere Parkmöglichkeiten sind hangseitig
                        unterhalb des Hauses auf der Straße verfügbar.</p>
                    <p>Eine abschließbare Garage für Motor- und Fahrräder kann kostenfrei genutzt werden.</p>
                </div>
            </div>
        </section>

        <section class="family-friendly">
            <h3>Familienfreundliches Haus</h3>
            <div class="facility">
                <FamilyIcon class="icon" :size="50" />
                <div class="text">
                    <ul>
                        <li>Familienanschluss</li>
                        <li>Viele Wanderwege</li>
                        <li>Abenteuerliches Wandern</li>
                        <li>Erholung pur</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="location">
            <h3>Unsere Lage</h3>
            <p>
                Hier finden Sie einige Entfernungen und nahegelegene Einrichtungen:
            </p>
            <div class="location-details">
                <div class="item">
                    <MapMarkerIcon class="icon" :size="40" />
                    <p>Tourist-Information, Egloffstein - 511 m</p>
                </div>
                <div class="item">
                    <MapMarkerIcon class="icon" :size="40" />
                    <p>Gasthof zur Post, Egloffstein - 977 m</p>
                </div>
                <div class="item">
                    <MapMarkerIcon class="icon" :size="40" />
                    <p>Bäckerei Konditorei Café Wirth, Egloffstein - 978 m</p>
                </div>
                <div class="item">
                    <MapMarkerIcon class="icon" :size="40" />
                    <p>Kurgarten, Egloffstein - 1 km</p>
                </div>
                <div class="item">
                    <MapMarkerIcon class="icon" :size="40" />
                    <p>Tankstelle, Egloffstein - 1.3 km</p>
                </div>
                <div class="item">
                    <MapMarkerIcon class="icon" :size="40" />
                    <p>Krankenhaus, Forchheim - 17 km</p>
                </div>
                <div class="item">
                    <MapMarkerIcon class="icon" :size="40" />
                    <p>Krankenhaus, Ebermannstadt - 14 km</p>
                </div>
            </div>
        </section>

        <section class="travel">
            <h3>Anreise</h3>
            <p>
                Mit dem Auto steigen Sie problemlos von der A3, Ausfahrt Höchstadt Ost ins Urlaubsvergnügen ein. Von der
                A9,
                Ausfahrt Pegnitz und der A73, Ausfahrt Forchheim über die B470 sind Sie in 20 Minuten bei uns.
            </p>
            <p>
                Mit der Bahn fahren Sie auf der Strecke Nürnberg - Forchheim und Nürnberg - Gräfenberg, von dort bringt
                Sie jeweils der Linienbus in rund 20 Minuten bis zu uns.
            </p>
            <p>
                Über den Flughafen Nürnberg haben Sie Anschluss an den nationalen und internationalen Flugverkehr.
            </p>
        </section>
    </div>
</template>

<style scoped>
.about-view {
    padding: 3rem;
    max-width: 2000px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    color: #333;
}

/* Heading Styles */
h1 {
    text-align: center;
    color: #008c05;
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 700;
}

h3 {
    font-size: 2rem;
    color: #007d03;
    margin-bottom: 1rem;
    font-weight: 600;
}

/* Paragraph Styles */
p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 1.5rem;
}

/* Section Styling */
section {
    margin-top: 3rem;
}

/* Facility Section */
.facility {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    background-color: #ffffff;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.facility .icon {
    color: #008c05;
    margin-right: 1rem;
}

.text {
    font-size: 1.2rem;
}

.text p {
    margin-bottom: 1rem;
}

/* List Styling for Family-Friendly */
ul {
    list-style-type: disc;
    padding-left: 20px;
}

ul li {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

/* Location Details */
.location-details .item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.location-details .icon {
    color: #008c05;
    margin-right: 1rem;
}

.location-details p {
    font-size: 1.2rem;
    color: #333;
}

/* Travel Section */
.travel {
    font-size: 1.2rem;
    line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
    h1 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    p,
    ul li {
        font-size: 1.1rem;
    }

    .facility {
        flex-direction: column;
        align-items: flex-start;
    }

    .facility .icon {
        margin-bottom: 1rem;
    }

    .text {
        margin-left: 0;
    }
}
</style>
