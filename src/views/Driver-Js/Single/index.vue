<template>
  <div>
    <h2>Component Example</h2>
    <div>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="name" />
    </div>

    <div>
      <label for="email">Email</label>
      <input id="email" type="email" v-model="email" />
    </div>

    <div>
      <button @click="submitForm">Submit</button>
      <button @click="resetForm">Reset</button>
    </div>

    <div id="myElement" style="border: 2px solid red">
      <p><strong>Name:</strong>{{ name }}</p>
      <p><strong>Email:</strong>{{ email }}</p>
      <p><strong>Password:</strong>{{ password }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueDriver from 'vue-driver.js';
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

let driver: any = null;
onMounted(() => {
  driver = new Driver();
});

const name = ref('Knife')
const email = ref('ychag@example.com')
const password = ref('khnfie')

const submitForm = () => {

  driver.highlight({
    element: '#myElement',
    popover: {
      title: 'Title for the Popover',
      description: 'Description for the Popover',
      position: 'left',
    },
  });

}

const resetForm = () => {
  name.value = ''
  email.value = ''
  password.value = ''
}
</script>
