<template>
    <div class="welcome-container">
        <!-- Welcome Text and Image Section -->
        <div class="intro-section">

            <div class="intro-text">
                <h1>Herzlich Willkommen</h1>
                <h2>in der Fränkischen Schweiz</h2>
                <img src="../../../res/HausFront.JPG" alt="Haus Front" class="intro-image" />
                <p>
                    Es freut uns, dass Sie den Weg zu unserer familiengeführten Pension gefunden haben. <br>
                    Wir wünschen Ihnen einen angenehmen Aufenthalt und würden uns freuen,
                    Sie in unserem Haus begrüßen zu dürfen.
                </p>
                <h3>Ihre Pension Grau</h3>
            </div>
        </div>

        <!-- Optional: Add more sections here -->
    </div>
</template>

<script>
</script>

<style scoped>
/* Style the main welcome container */
.welcome-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f9f9f9;
    font-family: 'Arial', sans-serif;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Welcome section with image and text */
.intro-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    margin: 2rem;
    overflow: hidden;
}

/* Styling for the intro image */
.intro-image {
    width: 100%;
    max-width: 800px;
    /* Ensure the image is not too large */
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    margin-bottom: 1.5rem;
}

/* Text section styling */
.intro-text {
    color: #333;
}

.intro-text h1 {
    font-size: 2.5rem;
    color: #008c05;
    margin: 0;
    font-weight: 700;
}

.intro-text h2 {
    font-size: 2rem;
    color: #007d03;
    margin-top: 0.5rem;
}

.intro-text p {
    font-size: 1.2rem;
    margin-top: 1rem;
    line-height: 1.6;
}

.intro-text h3 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    color: #008c05;
    font-weight: 600;
}

/* Responsive Design */
@media (max-width: 768px) {
    .intro-section {
        padding: 1.5rem;
        max-width: 100%;
    }

    .intro-text h1 {
        font-size: 2rem;
    }

    .intro-text h2 {
        font-size: 1.5rem;
    }

    .intro-text p {
        font-size: 1rem;
    }

    .intro-text h3 {
        font-size: 1.2rem;
    }
}
</style>
