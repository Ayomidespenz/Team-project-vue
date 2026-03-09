<template>
    <div>
        <Navbar />
        <login />
        <Footer />
    </div>
</template>

<script>
import login from '../auth/login.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        login,
        Navbar,
        Footer
    }
}
</script>

<style scoped></style>