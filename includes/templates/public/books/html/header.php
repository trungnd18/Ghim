<?php echo $this->doctype() ?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  	<?php echo $this->headTitle() ?>
       	<?php echo $this->headMeta() ?>
		<?php echo $this->headLink() ?>
		<?php echo $this->headScript() ?>
    	<script>
		$(document).ready(function(){
			$(".lightbox").lightbox();
		});

	</script>
</head>

<body>
<div class="body">
	<div id="top">
    	<div class="site" style="position:relative;">
        	www.zend.vn
        </div>
    </div>
    
    <div id="banner">
    	<div class="logo">
        	<a href="#"><img src="<?php echo $this->imgUrl;?>/logo.png" /></a>
        </div>
        <div class="clr"></div>
    </div>

	<div id="menu">
   	  <div class="line-1">
        	<ul class="menu-top">
            	<li class="active">
                	<a href="#" class="menuTop">
                        <span class="menuTL"> </span>
                        <span class="menuTC">Home</span>
                        <span class="menuTR"> </span>
                    </a>
                </li>
                <li>
                	<a href="#" class="menuTop">
                        <span class="menuTL"> </span>
                        <span class="menuTC">About Us</span>
                        <span class="menuTR"> </span>
                    </a>
                </li>
                <li>
                	<a href="#" class="menuTop">
                        <span class="menuTL"> </span>
                        <span class="menuTC">Products</span>
                        <span class="menuTR"> </span>
                    </a>
                </li>
                <li>
                	<a href="#" class="menuTop">
                        <span class="menuTL"> </span>
                        <span class="menuTC">News</span>
                        <span class="menuTR"> </span>
                    </a>
                </li>
                <li>
                	<a href="#" class="menuTop">
                        <span class="menuTL"> </span>
                        <span class="menuTC">Contact</span>
                        <span class="menuTR"> </span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="line-2"></div>
    </div>