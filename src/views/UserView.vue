<template>
    <div>
        <PersonalInfo/>
        <Sidebar/>

    </div>
</template>

<script>
import PersonalInfo from '../dashboard/PersonalInfo.vue';
import Sidebar from '../dashboard/Sidebar.vue';



    export default {
        components:{
            PersonalInfo,
            Sidebar
        
        } 
    }
</script>

<style lang="scss" scoped>

</style>