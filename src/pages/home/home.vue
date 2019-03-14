<template>
<div class="cm_home_bg">
    <div class="home_list">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="6" v-for="vlist in list" :key="vlist.name">
                <el-card shadow="always">
                    <div @click="gotoVcr(vlist.url)">
                        {{vlist.name}}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div >
</div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            list: [
                {name: '星海', url: 'vcr1'},
                {name: '西港', url: 'vcr1'},
                {name: '河口', url: 'vcr1'},
                {name: '天山', url: 'vcr1'}
            ]
        }
    },
    methods: {
        gotoVcr(curUrl) {
            console.log(curUrl)
            this.$router.push(curUrl)
        }
    }
}
</script>
<style lang="scss">
    .cm_home_bg{
        height: 100vh;
        background: url('../../assets/a1.jpeg') fixed
    }
    .home_list{
        position: absolute;
        top:5em;
        z-index: 3000;
        width: 100%;
        font-size: 1.4em;
        color: aliceblue;
        .el-row{
            padding: 1em;
            .el-card{
                margin-top:.6em;
            }
        }
    }
    .el-row {
    margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .homepage-hero-module,
    .video-container {
        position: relative;
        height: 100vh;
        overflow: hidden;
    }
    .video-container .poster img,
    .video-container video {
        z-index: 0;
        position: absolute;
    }
    .video-container .filter {
        z-index: 1;
        position: absolute;
        background: rgba(0, 0, 0, 0.4);
    }
</style>
