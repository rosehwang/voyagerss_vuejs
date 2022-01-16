<template>
  <div> 
    <button class="btn" v-on="selectType()">한국</button>
    <button class="btn" v-on="selectType()">해외</button>
    <korea/>   
    <global/>
  </div>
</template>

<script>
import Global from '@/components/fn/global.vue'
 import korea from '@/components/fn/korea.vue'

export default {
  name: 'Chart',
  components: {
    korea,
    Global
  },
  methods: {
    selectType(){

    }
  }
}
</script> 
