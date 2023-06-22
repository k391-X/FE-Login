<template>
    <div>
        <h1>Welcome to My App</h1>
        <button ref="startButton" id="startButton" @click="startTour">Get Started</button>
        <p ref="message" id="message">This is a sample paragraph</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import driver from 'driver.js';

const startButtonRef = ref(null);
const messageRef = ref(null);

const startTour = () => {
    const steps = [
        {
            element: '#startButton',
            popover: {
                title: 'Welcome!',
                description: 'Click this button to get started.',
                position: 'bottom'
            }
        },
        {
            element: '#message',
            popover: {
                title: 'Important Message',
                description: 'Read this message carefully.',
                position: 'top'
            }
        }
    ];

    const driverInstance = new driver({ animate: true });
    driverInstance.defineSteps(steps);
    driverInstance.start();
};
</script>