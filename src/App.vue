<template>
  <HeaderComponent />
  <div v-if="session">
    <router-view/>
  </div>
  <div v-else>
    <AuthAdminFormComponent />
  </div>
</template>

<script>
  import AuthAdminFormComponent from '@/components/AuthAdminFormComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';

  export default{
    data() {
      return {
        session: localStorage.getItem('user_email')
      }
    },
    components: {
      AuthAdminFormComponent,
      HeaderComponent
    }
  }
</script>


