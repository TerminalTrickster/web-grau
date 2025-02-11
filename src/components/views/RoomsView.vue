<template>
    <div class="rooms-view">
        <div class="main-container">
            <h1>Zimmer Preise 2025</h1>
            <div class="info">
                <p><strong>pro Person und Nacht</strong></p>
                <p><strong>Check-In:</strong> 14:00 Uhr - 20:00 Uhr</p>
                <p><strong>Check-Out:</strong> bis 10:30 Uhr</p>
                <p><strong>!! ausschließlich Barzahlung möglich !!</strong></p>
            </div>

            <section class="room-type">
                <h3>2 Doppelzimmer (Zimmer 2 und 4)</h3>
                <BedIcon class="icon" :size="40" />
                <div class="room-description">
                    <p>mit WC/Dusche/TV/Balkon/Föhn/Handtücher <br> (Zimmer 4 mit Schlafcouch für Kinder)</p>
                    <div class="pricing">
                        <p><strong>bis 3 Tage:</strong> 32,00 €</p>
                        <p><strong>ab 4 Tage:</strong> 30,00 €</p>
                    </div>
                </div>
            </section>

            <section class="room-type">
                <h3>1 Doppelzimmer (Zimmer 3)</h3>
                <BedIcon class="icon" :size="40" />
                <div class="room-description">
                    <p>mit Etagendusche/TV/Balkon/Föhn/Handtücher und Waschgelegenheit im Zimmer</p>
                    <div class="pricing">
                        <p><strong>bis 3 Tage:</strong> 31,00 €</p>
                        <p><strong>ab 4 Tage:</strong> 29,00 €</p>
                    </div>
                </div>
            </section>

            <section class="room-type">
                <h3>2 Einzelzimmer (Zimmer 1 und 5)</h3>
                <BedIcon class="icon" :size="40" />
                <div class="room-description">
                    <p>mit Etagendusche/TV/Handtücher und Waschgelegenheit im Zimmer</p>
                    <div class="pricing">
                        <p><strong>bis 3 Tage:</strong> 31,00 €</p>
                        <p><strong>ab 4 Tage:</strong> 20,00 €</p>
                    </div>
                </div>
            </section>

            <section class="additional-info">
                <h3>Zusätzliche Informationen</h3>
                <ul>
                    <li>Die Zimmerpreise beinhalten immer ein reichhaltiges Frühstück.</li>
                    <li>Frühstück von 8:00 Uhr - 10:00 Uhr.</li>
                    <li>WLAN vorhanden.</li>
                    <li>Kurabgabe pro Tag und Person ab 14 Jahren: 1 €.</li>
                    <li>Hunde auf Anfrage gegen Aufpreis von 8 € pro Tag.</li>
                    <li>Babyreisebett auf Anfrage gegen Aufpreis von 5 € pro Tag.</li>
                </ul>
            </section>
        </div>

        <!-- Image Gallery Section -->
        <div class="image-container">
            <h3>Bildergalerie</h3>
            <div class="gallery">
                <img src="../../../res/EtagenBad.JPG" alt="Etagen Bad" />
                <img src="../../../res/Frühstücksraum.JPG" alt="Frühstücksraum" />
                <img src="../../../res/HausFront.JPG" alt="Haus Front" />
                <img src="../../../res/HausFrontSchild.JPG" alt="Haus Front Schild" />
                <img src="../../../res/Zimmer3.JPG" alt="Zimmer 3" />
                <img src="../../../res/Zimmer5.JPG" alt="Zimmer 5" />
                <img src="../../../res/EtagenBad2.jpeg" alt="Etagen Bad 2" />
                <img src="../../../res/Frühstücksraum2.jpg" alt="Frühstücksraum 2" />
                <img src="../../../res/HausFront2.jpeg" alt="Haus Front 2" />
                <img src="../../../res/HausWaldLage.JPG" alt="Haus Wald Lage" />
                <img src="../../../res/Zimmer3_2.JPG" alt="Zimmer 3 2" />
                <img src="../../../res/Zimmer6.JPG" alt="Zimmer 6" />
                <img src="../../../res/EtagenWc.JPG" alt="Etagen WC" />

                <img src="../../../res/HausFrontGarten.JPG" alt="Haus Front Garten" />
                <img src="../../../res/Zimmer2.JPG" alt="Zimmer 2" />
                <img src="../../../res/Zimmer4.JPG" alt="Zimmer 4" />
                <img src="../../../res/Zimmer6_2.JPG" alt="Zimmer 6 2" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BedIcon from 'vue-material-design-icons/BedOutline.vue';  // Replacing HotelIcon with BedIcon
</script>

<style scoped>
.rooms-view {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 3rem;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    color: #333;
}

.main-container {
    flex: 1 1 60%;
    /* Ensures the main content takes up 60% of the width */
}

.image-container {
    flex: 1 1 35%;
    /* Ensures the image container takes up 35% of the width */
    padding-left: 2rem;
    overflow-y: auto;
}

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

.room-type {
    margin-top: 2rem;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.room-type .icon {
    color: #008c05;
    margin-right: 1rem;
}

.room-description p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.pricing p {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    color: #333;
}

.pricing strong {
    font-weight: 700;
}

.additional-info ul {
    list-style-type: disc;
    padding-left: 20px;
}

.additional-info li {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

section {
    margin-top: 2rem;
}

.info p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 1rem;
}

/* Gallery Styles */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    justify-items: center;
}

.gallery img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
    .rooms-view {
        flex-direction: column;
    }

    .main-container {
        flex: 1 1 100%;
    }

    .image-container {
        flex: 1 1 100%;
        padding-left: 0;
    }

    h1 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    .room-description p,
    .pricing p,
    .additional-info li {
        font-size: 1.1rem;
    }

    .room-type {
        padding: 1.5rem;
    }
}
</style>
