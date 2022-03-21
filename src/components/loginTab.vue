<template>
  <div class="pt-4">Please enter your login information</div>
  <Form class="d-grid p-4 text-end" @submit="onsubmit">
    <Filed
      name="account"
      type="text"
      :rules="isRequired"
      class="form-control"
      placeholder="account"
/>
 <ErrorMessage name="account" class="text-danger" />
    <Field
      name="password"
      type="password"
      :rules="isRequired"
      class="form-control mt-3"
      placeholder="password"
    />
<ErrorMessage name="password" class="text-danger" />
    <button class="btn btn-primary mt-3" type="submit">login</button>
 </Form>
  <div class="pb-4">
    <a href="#" class="link-dark">忘記密碼?</a>
  </div>
</template>
