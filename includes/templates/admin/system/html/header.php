<?php echo $this->doctype() ?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
       	<?php echo $this->headTitle() ?>
       	<?php echo $this->headMeta() ?>
		<?php echo $this->headLink() ?>
		<?php echo $this->headScript() ?>
    </head>
    <body id="minwidth-body">
   
        <div id="border-top" class="h_green">
            <div>
                <div>
                    <span class="version">Version 1.0 Alpha</span>
                    <span class="title" style="padding-left:20px">Seahog cms</span>
                </div>
            </div>
        </div>
        <div id="header-box">
            <div id="module-status">
                <span class="preview">
                    <a target="_blank" href="#">Preview</a>
                </span>
                <a href="#">
                    <span class="no-unread-messages">0</span>
                </a>
                <span class="loggedin-users">1</span>
                <span class="logout">
                    <a href="<?php echo $this->baseUrl('/default/public/logout');?>">Logout</a>
                </span>
            </div>
            <div id="module-menu">

                <!-- BEGIN: Menu -->
                <ul class="menuTiny" id="menuTiny">
                    <li><a href="#" class="menuTinyLink">Main</a>
                        <ul>
                            <li><a href="<?php echo $this->baseUrl('/default/index/index/');?>">Front End</a></li>
                            <li><a href="<?php echo $this->baseUrl('/default/admin/index/');?>">Back End</a></li>

                        </ul>
                    </li>
                    <li><a href="#" class="menuTinyLink">Member</a>
                        <ul>
                            <li><a href="<?php echo $this->baseUrl('/default/admin-group/index/');?>">Group manager</a></li>
                            <li><a href="<?php echo $this->baseUrl('/default/admin-user/index/');?>">User manager</a></li>
                            <li><a href="<?php echo $this->baseUrl('/default/admin-permission/index/');?>">Permission</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="menuTinyLink">Products</a>
                        <ul>
                            <li><a href="<?php echo $this->baseUrl('/shopping/admin-category/index/');?>">Category manager</a></li>
                            <li><a href="<?php echo $this->baseUrl('/shopping/admin-item/index/');?>">Product manager</a></li>
                            <li><a href="<?php echo $this->baseUrl('/shopping/admin-bill/index/');?>">Bill</a></li>
                        </ul>
                    </li>
                </ul>

                <script type="text/javascript">
                    var menu=new menu.dd("menu");
                    menu.init("menuTiny","menuTinyHover");
                </script><!-- END: Menu -->				




            </div>
            <div class="clr"></div>
        </div>