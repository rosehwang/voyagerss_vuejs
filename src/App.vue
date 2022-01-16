<template>
  <div>
    <!-- <Navbar/>  -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
// import Navbar from './components/base/Navbar'
import Footer from './components/base/Footer'

export default {
  data() {
    return {}
  },
  created () {
    // if no subcomponents specify a metaInfo.title, this title will be used
    document.title='Financial Aids';
  },
  components: {
    
    // Navbar,
    Footer
  }
}
</script>

<style>
@import url("./assets/css/app.css");
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css");
</style>