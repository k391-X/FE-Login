<template>
    <div id="container">
        <h1>Welcome to My App</h1>
        <button id="startButton" @click="handleClick">Get Started</button>
        <p :class="{ 'text-driver': onDriver }" id="message">This is a sample paragraph</p>
    </div>
</template>

<script setup lang="ts">
import { singleHighlight, stepGuild } from '../../../utils/index.ts';
// import { setPosition } from '../../../utils/types';
import { steps } from './step';
import { ref, onMounted } from 'vue';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import { useRouter } from 'vue-router';

const router = useRouter();

const onDriver = ref(false);

const startTour = () => {
    stepGuild(steps);
};

// const highlighted = () => {
//     let highlightOptions = {
//         title: 'Did you know?',
//         description: 'Created by driverJS',
//         position: 'asdasdasd'
//     };
//     singleHighlight('startButton');
// };

const handleClick = () => {

    // router.push('/login');
    const driver = new Driver({
        className: 'text-driver'

        // onHighlightStarted: () => {
        //     onDriver.value = true;
        // }
    });

    driver.defineSteps(steps);
    driver.start();
}

const steps = [
    {
        element: '#startButton',
        stateBackground: "#7fffd4",
        popover: {
            title: 'Welcome!',
            description: `<a><i class="fa-solid fa-plane"></i></a>`,
            position: 'bottom-right'
        },
        onDeselected: () => {
            router.push('/login');
        }
    },
    // {
    //     element: '#message',
    //     stateBackground: '#F70707',
    //     popover: {
    //         title: 'Important Message',
    //         description: 'Read this message carefully.',
    //         position: 'top'
    //     }
    // }
];


</script>

<style>
.text-driver {
    color: black;
}
</style>