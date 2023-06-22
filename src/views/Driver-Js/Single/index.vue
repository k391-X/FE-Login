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
      <button @click="handleClick">Submit</button>
      <button @click="resetForm">Reset</button>
    </div>

    <div id="myElement" ref="myElement" style="border: 2px solid red">
      <p><strong>Name:</strong>{{ name }}</p>
      <p><strong>Email:</strong>{{ email }}</p>
      <p><strong>Password:</strong>{{ password }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { singleHighlight } from '../../../utils/index';
import { HighlightOptions, popoverPosition } from '../../../utils/types';

const name = ref('Knife')
const email = ref('ychag@example.com')
const password = ref('khnfie')


const handleClick = () => {
  let highlightOptions: HighlightOptions = {
        title: 'Click to button',
        description: 'Click to button to viewer',
        position: popoverPosition('bottom')
    };
  singleHighlight('email', highlightOptions);
}

const resetForm = () => {
  name.value = ''
  email.value = ''
  password.value = ''
}
</script>
