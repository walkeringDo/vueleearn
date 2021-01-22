<template>
    <div class="h2">
          <h1>about</h1>
        <h2>{{msg}}</h2>
        <router-link to="/home"><button>home</button></router-link>
    </div>
</template>

<script>
export default {
  name: 'H2',
  data () {
    return {
      msg: 'Welcome to H2'
    }
  }
}
</script>
