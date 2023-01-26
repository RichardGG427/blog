<template>
    <div class="comment-box">
        <div v-if="isSignIn===0" class="signInText">Login and Comment</div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                isSignIn:0
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.comment-box {
    padding: 50px 30px;
    -webkit-box-shadow: 0 0px 3px rgba(0, 0, 0, 0.157), 0 0px 3px rgba(0, 0, 0, 0.227);
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.157), 0 0px 3px rgba(0, 0, 0, 0.227);
    background: #fafafa;
    .signInText {
        text-align: center;
        color: #3b99fc;
        font-size: 18px;
        cursor: pointer;
    }
}
</style>