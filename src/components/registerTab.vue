<template>
<div class="pt-4">Please enter your register information</div>
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
   <button class="btn btn-primary mt-3" type="submit" :disabled="isDisabled">
      confirm
    </button>
</form>
</template>
