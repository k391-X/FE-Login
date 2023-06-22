<template>
    <div class="">
        <div id="hamburger-container">
            Hamburger
        </div>
        <div id="breadcrumb-container">
            Breadcrumb
        </div>
        <div id="tags-view-container">
            Tags View
        </div>
        <p>The guide is useful for some people who entered the project for the time. You can briefly introduce the features of the project. Demo is based on
            <a href="https://github.com/kamranahmedse/driver.js">driver.js</a>
        </p>
        <button id="button-show" style="margin-top: 10px" @click.prevent.stop="guide">
            Show Guide
        </button>
    </div>
</template>

<script setup lang="ts">
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.js';

const driverInstance = new Driver({ animate: true });

const guide = () => {
    const steps = [
        {
            element: '#button-show',
            popover: {
                title: 'Show Guide',
                content: 'The guide is useful for some people who entered the project for the time.',
                position: 'top',
            }
        },
        {
            element: '#hamburger-container',
            popover: {
                title: 'Hamburger',
                description: 'Open && Close sidebar',
                position: 'bottom'
            }
        },
        {
            element: '#breadcrumb-container',
            popover: {
                title: 'Breadcrumb',
                description: 'Indicate the current page location',
                position: 'bottom'
            }
        },
        {
            element: '#tags-view-container',
            popover: {
                title: 'Tags View',
                description: 'The history of the page you visited',
                position: 'bottom'
            },
            padding: 0
        }
    ];

    driverInstance.defineSteps(steps);
    driverInstance.start();
}
</script>