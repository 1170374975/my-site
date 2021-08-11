<template>
 <!-- <Icon type="home" />  -->
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
    home: 'icon-home',
    success: 'icon-querenyuanzhengqueduigoutijiaochenggongwancheng',
    error: 'icon-cuowu',
    close: 'icon-guanbi',
    warn: 'icon-jinggao',
    info: 'icon-xinxi',
    blog: 'icon-blog',
    code: 'icon-code',
    about: 'icon-set_about_hov',
    weixin: 'icon-weixin1',
    mail: 'icon-youxiang1',
    github: 'icon-github',
    qq: 'icon-qq1',
    arrowUp: 'icon-top',
    arrowDown: 'icon-jiantou9',
    empty: 'icon-empty',
    chat: 'icon-liuyan'
};
//types得到一个数组['home','success','error',·····]
export const types = Object.keys(classMap);

export default {
    props: {
        type: {
            type: String,
            required: true
        }
    },
    computed: {
        //设置图标的类名
        fontClass() {
            return classMap[this.type]
        }
    }
}
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_2464913_8pb7h2yx8lf.css");
.icon-container{
    font-size: inherit;
}





</style>