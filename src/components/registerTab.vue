<template>

<form class="d-grid p-4 text-end" @submit="onSubmit">
    
    <div class="row">
      <div class="col-md-6">
        <input type="account" name="account" placeholder="account" v-model="account">
   </div>
   </div>
<div class="row">
      <div class="col-md-6">
        <input type="password" name="password" placeholder="password" v-model="password">
</div>
   </div>   
   <div class="row">
      <div class="col-md-6">
        <input type="email" name="email" placeholder="email" v-model="mail">
</div>
   </div>        
</form>
</template>
