<template>
  <div class="contact-container">
    <a :href="contact.href"
      v-for="contact in contactItems"
      :key="contact.icon"
    >
      <IconText :type="contact.icon" :text="contact.text" :src="contact.src" :iconSize="contact.iconSize" />
    </a>
  </div>
</template>

<script>
import IconText from '@/components/IconText';
import qqCode from '@/assets/qq.jpg';
import weixinCode from '@/assets/weixin.jpg';


export default {
  components: {
    IconText
  },
  data() {
    return {
      contactItems: [
        {
          icon: 'github',
          iconSize: 26,
          text: '1170374975',
          src: '',
          href: 'https://github.com/1170374975'
        },
        {
          icon: 'mail',
          iconSize: 26,
          text: 'w1170374975@gmail.com',
          src: '',
          href: 'mailto:w1170374975@gmail.com'
        },
        {
          icon: 'qq',
          iconSize: 26,
          text: '1170374975',
          src: qqCode,
          href: 'tencent://message/?Menu=yes&uin=$1170374975&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45'
        },
        {
          icon: 'weixin',
          iconSize: 26,
          text: '1170374975ni',
          src: weixinCode,
          href: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container{
  list-style: none;
  padding: 20px;
  margin: 14px 0;
  font-size: 13px;
  a{
    cursor: pointer;
    color: @gray;
    display: flex;
  }
}

</style>