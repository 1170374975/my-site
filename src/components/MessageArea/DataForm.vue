<template>
<!-- 在表单里面，按回车提交、点击按钮提交 ,表单提交默认会刷新页码，可以阻止默认行为-->
  <form 
    id="data-form-container"
    ref="form"
    @submit.prevent="handleSubmit" 
    class="data-form-container">
    <div class="form-item">
      <div class="input-area">
        <input type="text" maxlength="10" v-model="formData.nickname" placeholder="用户昵称" />
        <span class="tip">{{ formData.nickname.length }}/10</span>
      </div>
      <div class="error">{{ error.nickname }}</div>
    </div>
    <div class="form-item">
      <div class="text-area">
        <textarea maxlength="300" v-model="formData.content" placeholder="输入内容"></textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
      </div>
      <div class="error">{{ error.content }}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <!-- disabled不能点击 -->
        <button :disabled="isSubmition">{{ isSubmition ? "提交中···" : "提交"}}</button>
        
      </div>
    </div>
  </form>
</template>

<script>
import { showMessage } from '@/utils';
export default {
  data() {
    return {
      formData: {
        nickname: '',
        content: ''
      },
      error: {
        nickname: '',
        content: ''
      },
      isSubmition: false,  //是否正在提交中
    }
  },
  methods: {
    handleSubmit(){
      // console.log('提交表单');
      this.error.nickname = this.formData.nickname ? '' : '请填写昵称' ;
      this.error.content = this.formData.content ? '' : '请填写内容';
      if(this.error.nickname || this.error.content) {
        return; //有错误消息
      }
      this.isSubmition = true; //防止重复提交
      //让父组件来处理事件，父组件处理完成，调用回调函数，这边再继续处理
      this.$emit('submit', this.formData, (successMsg) => {
        //提交成功后
        this.$showMessage({
          type: 'success',
          content: successMsg,
          duration: 1000,
          container: this.$refs.form,
          callback: () => {
            this.isSubmition = false;
            this.formData.nickname = '';
            this.formData.content = '';
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container {
  margin-bottom: 20px;
  overflow: hidden;
  .form-item {
    margin-bottom: 8px;
    
  }
  .input-area {
    width: 50%;
    position: relative;
  }
  .text-area {
    position: relative;
  }
  input, textarea {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed @gray;
    outline: none;
    color: @words;
    font-size: 14px;
    border-radius: 4px;
    &:focus{
      border-color: @primary;
    }
  }
  input {
    padding: 0 15px;
    height: 40px;
  }
  textarea{
    height: 120px;
    padding: 8px 15px;
    resize: none;//调整大小
  }
  .tip {
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: #b4b8bc;
    font-size: 12px;
  }
  .error{
    margin-top: 6px;
    color: @danger;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }
  button {
    position: relative;
    cursor: pointer;
    border: none;
    outline: none;
    width: 100px;
    height: 34px;
    color: #fff;
    border-radius: 4px;
    background: @primary;
    &:hover{
      background: darken(@primary, 10%);
    }
    &:disabled{
      background: lighten(@primary, 20%);
      cursor: not-allowed;
    }
  }
}
</style>