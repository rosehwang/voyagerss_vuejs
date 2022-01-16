<template>
  <div class="container">
    <header class="jumbotron">
      <h3>id : {{content.accountid}}</h3>
      <h3>user name : {{content.name}}</h3>
      <h3>email : {{content.email}}</h3>
      <h3>phone : {{content.phone}}</h3>
    </header>
  </div>
</template>

<script>
import {account} from '@/service/auth'; 

export default {
  name: 'profile',
  data() {
    return {
      content: {
        accountid:'',
        name:'',
        email:'',
        phone :''
      }
    }
  },
  mounted() {
    account.fetch()
    .then((response)=>{
        this.content = response.data;
    })
    .catch(response => {
      throw Error(response)
    })
  }
};
</script>
