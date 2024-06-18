import './bootstrap';
import { createApp } from 'vue';
import root from './vue/root.vue';

document.addEventListener("DOMContentLoaded", function() {
    createApp(root).mount('#root');
});
