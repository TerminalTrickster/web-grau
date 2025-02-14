<script setup lang="ts">
import EmailOutlineIcon from 'vue-material-design-icons/EmailOutline.vue';
import PhoneIcon from 'vue-material-design-icons/Phone.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarkerOutline.vue';
</script>

<template>
    <footer class="footer">
        <!-- Oberer Bereich des Footers -->
        <div class="footer-main">
            <div class="icon-group">
                <a :href="'mailto:gaestehaus-grau@gmx.de'">
                    <EmailOutlineIcon class="icon" :size="50" />
                </a>
                <p>gaestehaus-grau@gmx.de</p>
            </div>
            <div class="icon-group">
                <a :href="'https://www.google.com/maps?q=Gästehaus+Grau,Markgrafenstraße+107,91349+Egloffstein'"
                    target="_blank">
                    <MapMarkerIcon class="icon" :size="50" />
                </a>
                <p>Gästehaus Grau <br> Markgrafenstraße 107 <br> 91349 Egloffstein</p>
            </div>
            <div class="icon-group">
                <a :href="'tel:+4909197439'">
                    <PhoneIcon class="icon" :size="50" />
                </a>
                <p>+4909197439</p>
            </div>
        </div>

        <!-- Unterer Bereich des Footers -->
        <div class="footer-sub">
            <p class="footer-text">© 2024 Gästehaus Grau - Alle Rechte vorbehalten</p>
            <div class="footer-links">
                <router-link to="/agb">Allgemeine Geschäftsbedingungen</router-link>
                <router-link to="/impressum">Impressum</router-link>
            </div>
        </div>
    </footer>
</template>
<style scoped>
/* Footer-Stil */
.footer {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #AFD5AA;
    /* Lighter green - like Bavarian forest */
    border-radius: 1vh;
}

/* Oberer Bereich */
.footer-main {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0vw 1vw;
    flex-wrap: wrap;
    max-height: 70%;
    /* Allow icon groups to wrap on small screens */
}

/* Unterer Bereich */
.footer-sub {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    background-color: #2f5d3b;
    padding: 0.5rem 1rem;
    border-top: 1px solid #ced4da;
    flex-wrap: wrap;
    max-height: 30%;
}

.icon-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
}

.icon {
    height: auto;
    color: #333;
    transition: color 0.3s ease;
}

.icon:hover {
    color: #008c3fc1;
}

.icon-group p {
    margin: 0;
    font-size: 1.2rem;
    font-weight: lighter;
    /* Adjusted for scaling */
    color: #333;
}



.footer-text {
    font-size: 1rem;
    color: #f8f9fa;
    margin: 0;
}

.footer-links {
    display: flex;
    gap: 2rem;
    font-size: 1.1rem;
}

.footer-links a {
    font-size: 1rem;
    color: #f8f9fa;
    text-decoration: none;
    transition: text-decoration 0.3s ease;
}

.footer-links a:hover {
    text-decoration: underline;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .footer-main {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .footer-sub {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        margin-top: 3%;
    }

    .footer-links {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }

    .footer-links a {
        font-size: 1rem;
    }

    .footer-text {
        font-size: 0.9rem;
    }
}
</style>
