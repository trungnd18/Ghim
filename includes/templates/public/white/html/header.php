<?php echo $this->doctype()?>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

<meta property="fb:app_id" content="200363940036022">
		<?php echo $this->headTitle()?>
       	<?php echo $this->headMeta()?>
		<?php echo $this->headLink()?>
		<?php  echo $this->headScript()?>
		

<style type="text/css">
* {
	padding: 0;
	margin: 0;
}
</style>
<script>
$(function () {
	$("#error-post").hide();
    $("a[rel='tag']").tooltip();
});
$(document).ready(function(){
    $('textarea#com').autosize();   
});
function baseUrl(url){
	return "<?php echo $this->baseUrl()?>"+url;
}
</script>
</head>
<body>
	<div id="custom-header"></div>