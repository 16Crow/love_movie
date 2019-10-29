<template>
  <div class="main">
    <Header title="我的"></Header>
    <Login></Login>
    <Tab-Bar></Tab-Bar>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'
export default {
  name: 'Mine',
  components: {
    Header,
    TabBar,
    Login
  }
}
</script>

<style>

</style>