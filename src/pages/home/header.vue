<template>
    <div class="cm_head">
        <el-row>
            <el-col :span="4" class="cm_head_logo">
                <img src="../../assets/heart.png" alt="logo" @click="gohome">
            </el-col>
            <el-col :span="20"></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'cmHeader',
    methods: {
        gohome() {
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .cm_head
        width 100%
        color #fff
        background:#000
        .cm_head_logo img
            display block
            width 2em
            height 2em
            margin .2em

</style>
