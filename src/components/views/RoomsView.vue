<template>
    <div class="rooms-view">
        <div class="main-container">
            <h1>Zimmer Preise 2025</h1>
            <div class="info">
                <p><strong>pro Person und Nacht</strong></p>
                <p><strong>Check-In:</strong> 14:00 Uhr - 20:00 Uhr</p>
                <p><strong>Check-Out:</strong> bis 10:30 Uhr</p>
                <p><strong>Ausschließlich Barzahlung möglich</strong></p>
                <p><strong>Mindestaufenthalt: 2 Nächte</strong></p>
            </div>
            <!-- Additional Information -->
            <section class="additional-info">
                <h3>Zusätzliche Informationen</h3>
                <ul>
                    <li>Die Zimmerpreise beinhalten immer ein reichhaltiges Frühstück.</li>
                    <li>Frühstück von 8:00 Uhr - 10:00 Uhr.</li>
                    <li>WLAN vorhanden.</li>
                    <li>Kurabgabe pro Tag und Person ab 14 Jahren: 1 €.</li>
                    <li>Hunde auf Anfrage gegen Aufpreis von 8 € pro Tag.</li>
                    <li>Babyreisebett auf Anfrage gegen Aufpreis von 6 € pro Tag.</li>
                </ul>
            </section>
            <!-- Room 2 and 4 -->
            <section class="room-type">
                <h3>Doppelzimmer mit eigenem Bad<br> Zimmer 2 und 4</h3>
                <BedIcon class="icon" :size="40" />
                <div class="room-description">
                    <p>mit WC / Dusche / TV / Balkon / Föhn / Handtücher <br> (Zimmer 4 mit Schlafsofa für Kinder)</p>
                    <div class="pricing">
                        <p><strong>bis 3 Tage:</strong> 34,00 €</p>
                        <p><strong>ab 4 Tage:</strong> 32,00 €</p>
                    </div>
                </div>
                <!-- Image Gallery for Room 2 and 4 -->
                <div class="room-images">
                    <div class="room-name">Zimmer 2</div>
                    <img src="../../../res/Zimmer2.JPG" alt="Zimmer 2" @click="openModal('../../../res/Zimmer2.JPG')" />

                    <div class="room-name">Zimmer 4</div>
                    <img src="../../../res/Zimmer4.JPG" alt="Zimmer 4" @click="openModal('../../../res/Zimmer4.JPG')" />
                </div>

            </section>

            <!-- Room 3 -->
            <section class="room-type">
                <h3>Doppelzimmer mit Etagendusche
                    <br>Zimmer 3
                </h3>
                <BedIcon class="icon" :size="40" />
                <div class="room-description">
                    <p> mit <a href="#etagendusche-wc"> Etagendusche</a> / TV / Balkon / Föhn / Handtücher und
                        Waschgelegenheit im Zimmer
                    </p>
                    <div class="pricing">
                        <p><strong>bis 3 Tage:</strong> 33,00 €</p>
                        <p><strong>ab 4 Tage:</strong> 31,00 €</p>
                    </div>
                </div>
                <!-- Image Gallery for Room 3 -->
                <div class="room-images">
                    <div class="room-name">Zimmer 3</div>
                    <img src="../../../res/Zimmer3.JPG" alt="Zimmer 3" @click="openModal('../../../res/Zimmer3.JPG')" />
                    <img src="../../../res/Zimmer3_2.JPG" alt="Zimmer 3 Bild 2"
                        @click="openModal('../../../res/Zimmer3_2.JPG')" />
                </div>
            </section>

            <!-- Room 1 and 5 -->
            <section class="room-type">
                <h3>Einzelzimmer mit Etagendusche <br>
                    Zimmer 1 und 5</h3>
                <BedIcon class="icon" :size="40" />
                <div class="room-description">
                    <p>mit <a href="#etagendusche-wc"> Etagendusche </a> / TV / Handtücher und Waschgelegenheit im
                        Zimmer
                    </p>
                    <div class="pricing">
                        <p><strong>bis 3 Tage:</strong> 33,00 €</p>
                        <p><strong>ab 4 Tage:</strong> 31,00 €</p>
                    </div>
                </div>
                <!-- Image Gallery for Room 1 and 5 -->
                <div class="room-images">
                    <div class="room-name">Zimmer 5</div>
                    <img src="../../../res/Zimmer5.JPG" alt="Zimmer 5" @click="openModal('../../../res/Zimmer5.JPG')" />
                    <div class="room-name">Zimmer 1</div>
                    <img src="../../../res/Zimmer1.JPG" alt="Zimmer 5" @click="openModal('../../../res/Zimmer1.JPG')" />
                </div>
            </section>
            <h3 id="etagendusche-wc">Badezimmer - Etagendusche & Extra WC</h3>
            <div class="bathroom-images">
                <img src="../../../res/EtagenBad.JPG" alt="Etagen Bad"
                    @click="openModal('../../../res/EtagenBad.JPG')" />
                <img src="../../../res/EtagenWc.JPG" alt="Etagen WC" @click="openModal('../../../res/EtagenWc.JPG')" />
            </div>

            <h3>Weitere Bilder</h3>
            <div class="room-images">
                <img src="../../../res/HausFrontSchild.JPG" alt="Haus Front Schild"
                    @click="openModal('../../../res/HausFrontSchild.JPG')" />
                <img src="../../../res/Frühstücksraum2.jpg" alt="Frühstücksraum 2"
                    @click="openModal('../../../res/Frühstücksraum2.jpg')" />
                <img src="../../../res/HausWaldLage.JPG" alt="Haus Wald Lage"
                    @click="openModal('../../../res/HausWaldLage.JPG')" />
                <img src="../../../res/HausFrontGarten.JPG" alt="Haus Front Garten"
                    @click="openModal('../../../res/HausFrontGarten.JPG')" />
            </div>
        </div>

        <!-- Image Modal (Zoom) -->
        <div v-if="showModal" class="modal" @click="closeModal">
            <div class="modal-content">
                <img :src="currentImage" alt="Room Image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BedIcon from 'vue-material-design-icons/BedOutline.vue';

const showModal = ref(false);
const currentImage = ref('');

const openModal = (imageUrl: string) => {
    currentImage.value = imageUrl;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
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
    justify-content: center;
    /* Ensure all content is centered */
}

.room-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* Space between room name and image */
}


.room-images img {
    width: 80%;
    margin: 5px;
    /* Reduce size of gallery images */
    max-width: 700px;
    /* Set max width for gallery images */
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    display: block;
    /* Ensures image is centered inside the div */
    margin-left: auto;
    margin-right: auto;
}

.room-name {
    text-decoration: underline;
    font-size: 1.5rem;
    /* Increase the font size for better visibility */
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    /* Increase space between the title and the images */
}

.bathroom-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* Centers images horizontally */
    align-items: center;
    /* Ensures images are aligned in the center vertically */
    margin-top: 20px;
    /* Adds space above the images */
}

.bathroom-images img {
    width: 50%;
    /* Adjusted to make room for spacing */
    margin: 10px;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    display: block;
}

.room-images img:hover {
    transform: scale(1.05);
    /* Slight zoom effect on hover */
}

/* Modal Styles */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    visibility: hidden;
    /* Initially hidden */
    opacity: 0;
    /* Initially hidden */
    transition: opacity 0.3s ease;
}

.modal.show {
    visibility: visible;
    /* Make visible when 'show' class is added */
    opacity: 1;
    /* Fade in effect */
}

.modal-content {
    position: relative;
    max-width: 90%;
    /* Ensure it doesn't go out of the screen */
    max-height: 80%;
    /* Max height to avoid taking up too much screen space */
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.modal-content img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: zoom-out;
}

/* For the closing button inside the modal */
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.close-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

h1,
h3 {
    color: #007d03;
}
</style>
