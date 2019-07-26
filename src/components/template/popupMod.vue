<template>
	<el-dialog class="popupMod" :title="popData.title" :visible.sync="showPopup" :width="popData.width" :before-close="cancel">
		<slot></slot>
		<div slot="footer" class="dialog-footer" :hidden="ifHideBtn">
          <el-button v-on:click="cancel">{{popData.cancelTxt}}</el-button>
          <el-button type="primary"  @click="confirm">{{popData.confirmTxt}}</el-button>
        </div>
	</el-dialog>
</template>
<script>
	export default {
		data(){
			return {
				showPopup: false,
				popData:{}
			}
		},
		props: ['title','width','cancelTxt','confirmTxt','ifHideBtn'],   //传入参数：标题string，宽度string，取消文字string，确认文字string,是否显示按钮boonlean
		ready(){},
		watch: {
			title(newName, oldName) {
				this.popData.title = newName;
			}
		},
		methods:{
			show(call){
				this.popData.title = this.title||"";
				this.popData.width = this.width||"500px";
				this.popData.cancelTxt = this.cancelTxt||"取消";
				this.popData.confirmTxt = this.confirmTxt||"确认";
				this.showPopup=true;
				if(call && typeof(call)==='function') setTimeout(call)
			},
			hide(){
				this.showPopup=false;
				this.popData = {};
			},
			cancel(){
				this.$emit("cancel");
				this.hide();
			},
			confirm(){
				this.$emit("confirm");
				this.show();
			}
		}
	}
</script>

<style>
	.popupMod .el-dialog__header{
		background-color: #DCE1E8;
		font-weight: bold;
	}
</style>