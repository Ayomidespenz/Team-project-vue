<template>
    <div>
    <HeroSection />
    <OurCompany />
    <DiscoverLoans/>
    <CustomerSays/>
    <LatestPost/>
    <Home />
    <Footer/>
    </div>
</template>

<script>
import Home from '../components/Home.vue';
import Login from '../auth/login.vue'
import HeroSection from '../components/HeroSection.vue';
import OurCompany from '../components/OurCompany.vue';
import DiscoverLoans from '../components/DiscoverLoans.vue';
import CustomerSays from '../components/CustomerSays.vue';
import LatestPost from '../components/LatestPost.vue';


export default {
  components: {
    Home,
    Login,
    HeroSection,
    OurCompany,
    DiscoverLoans,
    CustomerSays,
    LatestPost
  }
}
</script>

<style lang="scss" scoped>

</style>