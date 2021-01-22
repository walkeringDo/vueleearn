<template>
    <div class="h1">
          <h1>about</h1>
        <h2>{{msg}}</h2>
        <router-link to="/home"><button>home</button></router-link>
    </div>
</template>

<script>
export default {
  name: 'H1',
  data () {
    return {
      msg: 'Welcome to H1'
    }
  }
}
</script>
