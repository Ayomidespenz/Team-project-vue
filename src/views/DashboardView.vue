<template>
    <div class="layout">
 <Sidebar/>
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
  display: flex;
  margin-top: 90px;
}

.main-content {
  margin-left: 300px;
  flex: 1;
  min-width: 0;
}
</style>