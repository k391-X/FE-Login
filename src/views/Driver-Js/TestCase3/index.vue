<template>
    <div id="container">
        <h1>Welcome to My App</h1>
        <button id="startButton" @click="startTour">Get Started</button>
        <p id="message">This is a sample paragraph</p>
    </div>
</template>

<script setup lang="ts">
import { singleHighlight, stepGuild } from '../../../utils/index.ts';
// import { setPosition } from '../../../utils/types';
import { steps } from './step';

const startTour = () => {
    stepGuild(steps);
};

const highlighted = () => {
    let highlightOptions = {
        title: 'Did you know?',
        description: 'Created by driverJS',
        position: 'asdasdasd'
    };
    singleHighlight('startButton');
};


</script>