<template>
  <nav class="navbar">
    <div class="navbar-left">
      <input type="search" placeholder="Search..." class="search-input" />
    </div>
    <div class="navbar-right">
      <ul>
        <li>
          <router-link to="/docs">Docs</router-link>
        </li>
        <li>
         <img src="../dashboard/dashboard-img/bell.png" alt="">
        </li>
         <div class="org">
          <img src="../dashboard/dashboard-img/organization.png" alt="">
          <h2>Adedoyin</h2>
          <label for="org"></label>
          <select name="org" id="org"> 
    <!-- <option value="Switch Organization"></option> -->
    <option value=""><router-link to="/">
      
    </router-link>profile</option>
    <option value="">settings</option>
    <option value="">Logout</option>
  </select>
</div>



      </ul>
    </div>
  </nav>
  <nav class="side-bar">
    <div class="logo">
          <Icon
            class="animate__animated animate__heartBeat"
            icon="mdi:dollar"
            width="24"
          />
          <h2 class="loan">Loan<span class="loan-day">day.</span></h2>
        </div>

        <div class="org">
          <img src="../dashboard/dashboard-img/organization.png" alt="">
          <label for="org"></label>
          <select name="org" id="org">
    <option value="Switch Organization">Switch Organization</option>
    <option value="Organization 1">Organization 1</option>
    <option value="Organization 2">Organization 2</option>
  </select>
        </div>
        <hr>
        <div class="dash">
          <img src="../dashboard/dashboard-img/decision.png" alt="">
          <h2>
            Dashboard
          </h2>
        </div>
        <h2 style="padding: 15px 25px ;">CUSTOMERS</h2>

        <div class="user">
          <img src="../dashboard/dashboard-img/user.png" alt="">
          <h2>Users</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/guarantor.png" alt="">
          <h2>Guarantor</h2>
        </div>
         <div class="user">
          <img src="../dashboard/dashboard-img/loan.png" alt="">
          <h2>Loans</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/decision.png" alt="">
          <h2>Decision Models</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/savings.png" alt="">
          <h2>Savings</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/request.png" alt="">
          <h2>Loan Requset</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/whitelist.png" alt="">
          <h2>Whitelist</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/karma.png" alt="">
          <h2>Karma</h2>
        </div>
         <h2 style="padding: 15px 25px ;">BUSINESSES</h2>
         <div class="user">
          <img src="../dashboard/dashboard-img/organization11.png" alt="">
          <h2>Organization</h2>
        </div>
         <div class="user">
          <img src="../dashboard/dashboard-img/l-product.png" alt="">
          <h2>Loan Products</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/s-prod.png" alt="">
          <h2>Savings Product</h2>
        </div>
         <div class="user">
          <img src="../dashboard/dashboard-img/fees.png" alt="">
          <h2>Fees and Charges</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/transaction.png" alt="">
          <h2>Transaction</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/service.png" alt="">
          <h2>Services</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/s-account.png" alt="">
          <h2>Service Account</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/savings.png" alt="">
          <h2>Settlement</h2>
        </div>
         <div class="user">
          <img src="../dashboard/dashboard-img/report.png" alt="">
          <h2>Report</h2>
        </div>
         <h2 style="padding: 15px 25px ;">Settings</h2>
         <div class="user">
          <img src="../dashboard/dashboard-img/preferrence.png" alt="">
          <h2>Prefference</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/fee-pricing.png" alt="">
          <h2>Fees and pricing</h2>
        </div>
        <div class="user">
          <img src="../dashboard/dashboard-img/audit-log.png" alt="">
          <h2>Audit Logs</h2>
        </div>
        
  </nav>
</template>

<script>
// import Dashboard from '../../views/Dashboard'
export default {
  // components: { Dashboard },
  // name: 'Navbar'
}
</script>

<style scoped>
.navbar {
    height: 90px;
    width: 100%;
  background-color: grey;
  padding: 10px 20px;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  position: fixed;
  top:0 ;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.navbar-right ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.navbar-right li {
  margin-left: 20px;
}

.navbar-right a {
  text-decoration: none;
  color: #333;
}

.navbar-right i {
  font-size: 18px;
  cursor: pointer;
}
.side-bar{
    width: 350px;
    background-color: grey;
      border-bottom: 2px solid black;
      height: 100vh;
      position: fixed;
      top:0 ;
      overflow-y: auto;
      z-index: 2;
      /* border: 2px solid red; */
}
.logo {
  gap: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;
}
.loan {
  font-size: 40px;
  align-items: center;
  font-weight: bold;
  letter-spacing: 2px;
  width: 100%;
}

.loan-day {
  color: #88c417;
}
.animate__animated {
  border-radius: 50%;
  background: #88c417;
  width: 35px;
  height: 35px;
  color: white;
}
.org{
display: flex;
 gap: 10px; 
 width: 70%;
  justify-content: center;
  border: 1px solid #88c417;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
}
.dash{
  display: flex;
 gap: 10px; 
 width: 70%;
 padding: 20px 30px 10px;
 /* margin: 0 20px; */
 background-color: rgb(140, 194, 23);
 width: 100%;
 /* justify-content: center; */
}
.user{
  display: flex;
  gap: 10px;
  padding: 8px 30px 10px;
  /* border: 2px solid #88c417; */
}
.user:hover {
  background-color: white;
}
</style>