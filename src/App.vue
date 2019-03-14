<template>
    <div id="app">
        <cm-header></cm-header>
        <router-view/>
    </div>
</template>
<script>
import cmHeader from '@/pages/home/header'
export default {
    name: 'App',
    components: {cmHeader}
}
</script>
