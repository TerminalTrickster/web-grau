<template>
    <div class="rooms-view">
        <div class="main-container">
            <!-- Left side text container -->
            <div class="text-container">
                <h1>Zimmer & Preise</h1>
                <p>
                    Entdecken Sie unsere gemütlichen Zimmer, die Ihnen einen angenehmen Aufenthalt in der Fränkischen
                    Schweiz bieten. Unsere Zimmer sind komfortabel und gut ausgestattet, damit Sie sich wie zu Hause
                    fühlen.
                </p>
                <h3>Preise</h3>
                <p>Unsere Preise variieren je nach Saison und Zimmerkategorie. Kontaktieren Sie uns für aktuelle Preise
                    und Verfügbarkeiten.</p>
            </div>

            <!-- Right side image carousel -->
            <div class="carousel">
                <div class="carousel-images" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <img class="hero" src="../../../res/EtagenBad.JPG" alt="Haus Front 1" />
                    <img class="hero" src="../../../res/EtagenBad2.jpeg" alt="Haus Front 2" />
                    <img class="hero" src="../../../res/EtagenWc.jpg" alt="Haus Front 3" />
                    <img class="hero" src="../../../res/Frühstücksraum.jpg" alt="Frühstücksraum 1" />
                    <img class="hero" src="../../../res/Frühstücksraum2.jpg" alt="Frühstücksraum 2" />
                    <img class="hero" src="../../../res/Zimmer2.JPG" alt="Zimmer 2" />
                    <img class="hero" src="../../../res/Zimmer3_2.JPG" alt="Zimmer 3.2" />
                    <img class="hero" src="../../../res/Zimmer3.JPG" alt="Zimmer 3" />
                    <img class="hero" src="../../../res/Zimmer4.JPG" alt="Zimmer 4" />
                    <img class="hero" src="../../../res/Zimmer5.JPG" alt="Zimmer 5" />
                    <img class="hero" src="../../../res/Zimmer6.JPG" alt="Zimmer 6" />
                    <img class="hero" src="../../../res/Zimmer6_2.JPG" alt="Zimmer 6.2" />
                </div>
                <!-- Navigation buttons -->
                <button class="prev" @click="moveToPrev">‹</button>
                <button class="next" @click="moveToNext">›</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoomsView',
    data() {
        return {
            currentIndex: 0,
            totalImages: 12,  // Update to the number of images you have (12 images now)
        };
    },
    methods: {
        moveToPrev() {
            this.currentIndex = (this.currentIndex === 0) ? this.totalImages - 1 : this.currentIndex - 1;
        },
        moveToNext() {
            this.currentIndex = (this.currentIndex === this.totalImages - 1) ? 0 : this.currentIndex + 1;
        },
    },
};
</script>

<style scoped>
/* Prevent vertical and horizontal scrollbars */
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.rooms-view {
    padding: 20px;
}

.main-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: auto;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
}

.text-container {
    width: 45%;
    padding: 20px;
    box-sizing: border-box;
}

.text-container h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.text-container p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}

.text-container h3 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
}

.carousel {
    width: 50%;
    height: auto;
    position: relative;
    overflow: hidden;
}

.carousel-images {
    display: flex;
    flex-direction: row;
    transition: transform 0.5s ease-in-out;
}

.hero {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 10px;
}

button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .main-container {
        flex-direction: column;
        align-items: center;
    }

    .text-container {
        width: 80%;
        text-align: center;
    }

    .carousel {
        width: 80%;
    }

    .hero {
        width: 100%;
    }
}
</style>
