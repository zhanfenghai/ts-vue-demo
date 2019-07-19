import Vue from 'vue'
import Hello from './components/Hello.vue'
import {test} from './util/test'

let v = new Vue({
  el: '#app',
  template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello :name="name" :initialEnthusiasm="5" />
    </hello>`,
    data: {
        name: test().name
    },
    components:{
      Hello
    }
})