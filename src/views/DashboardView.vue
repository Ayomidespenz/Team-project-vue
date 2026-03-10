<template>
    <div class="layout">
      <div class="side-bar">

        <Sidebar/>
      </div>
 <div class="main-content">
 <DashboardContent/>
 </div>
    </div>

   
   
</template>


<script>

import DashboardContent from '../dashboard/dashboardContent.vue';
import Sidebar from '../dashboard/Sidebar.vue'
    export default {
        components:{
           DashboardContent,
           Sidebar
        }
    }
</script>

<style scoped>
.layout {
  margin-top: 90px;
}

.main-content { 
  min-width: 0;
}
.side-bar{
}
</style>