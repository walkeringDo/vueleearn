<template>
    <div class="about">
          <h1>about</h1>
        <h2>{{msg}}</h2>
        <router-link to="/home"><button>home</button></router-link>
    </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to About'
    }
  }
}
</script>
