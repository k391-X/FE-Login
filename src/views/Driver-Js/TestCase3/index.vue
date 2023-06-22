<template>
    <div id="container">
        <h1>Welcome to My App</h1>
        <button id="startButton" @click="startTour">Get Started</button>
        <p id="message">This is a sample paragraph</p>
    </div>
</template>

<script setup lang="ts">
import { singleHighlight, stepGuild } from '../../../utils/index.ts';
import { PopoverPosition } from '../../../utils/types';
import { steps } from './step';

const startTour = () => {
    stepGuild(steps);
};

const position: PopoverPosition = 'top';

const highlighted = () => {
    let highlightOptions = {
        title: 'Click to button',
        description: 'Click to button to viewer',
        position: position
    };
    singleHighlight('startButton',highlightOptions);
};


</script>