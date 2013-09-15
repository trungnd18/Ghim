<?php
class Error_PageNotFoundController extends Zend_Controller_Action{

	public function indexAction(){
		//$this->_helper->layout()->disableLayout();
		echo "<h1>Error 404: page not found</h1>";
	}
}