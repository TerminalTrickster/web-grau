<template>
    <div class="main-container">
        <!-- Left side text container -->
        <div class="text-container">
            <p>Es freut uns, dass Sie den Weg zu unserer Pension gefunden haben. Wir wünschen Ihnen einen angenehmen
                Aufenthalt und würden uns freuen, Sie in unserem Haus begrüßen zu dürfen.</p>
        </div>

        <!-- Right side image carousel -->
        <div class="carousel">
            <div class="carousel-images" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <img class="hero" src="../../../res/HausFront2.jpeg" alt="Haus Front 1" />
                <img class="hero" src="../../../res/HausFrontGarten.JPG" alt="Haus Front 2" />
                <img class="hero" src="../../../res/HausFrontSchild.JPG" alt="Haus Front 3" />
                <img class="hero" src="../../../res/HausWaldLage.JPG" alt="Haus Front 3" />
            </div>
            <!-- Navigation buttons -->
            <button class="prev" @click="moveToPrev">‹</button>
            <button class="next" @click="moveToNext">›</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoomsView',
    data() {
        return {
            currentIndex: 0,
            totalImages: 3,
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

.main-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    /* Ensure padding doesn't cause overflow */
    overflow: hidden;
}

.text-container {
    width: 45%;
    padding: 20px;
    box-sizing: border-box;
    /* Ensure padding doesn't cause overflow */
}

.text-container h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.text-container h2 {
    font-size: 2rem;
    color: #555;
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

.features {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
}

.feature-item {
    width: 45%;
    text-align: center;
}

.feature-item img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.feature-item p {
    font-size: 1rem;
    color: #555;
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
