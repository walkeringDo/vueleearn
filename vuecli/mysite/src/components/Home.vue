<template>
    <div class="home">
          <h1>home</h1>
        <h2>{{msg}}</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home'
    }
  }
}
</script>
