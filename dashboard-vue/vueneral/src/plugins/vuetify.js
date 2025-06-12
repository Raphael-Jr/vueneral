/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
function getInitialTheme(){
    const saved = localStorage.getItem('theme')
    if(saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    icons:{
        defaultSet: 'mdi',
        aliases,
        sets: {mdi}
    }, 
    theme: {
        defaultTheme: getInitialTheme(),
        themes: {
            light: {dark:false},
            dark: {dark:true}
        }
    }
})