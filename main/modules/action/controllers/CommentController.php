<?php

class Action_CommentController extends Quac_Controller_Action {

	public function init(){
		$this->_helper->layout ()->disableLayout ();
		$this->getHelper('viewRenderer')->setNoRender();
	}
	public function indexAction(){
		
		echo "trsst";
	}
	public function addAction(){
		
	}
	public function removeAction(){
		echo "trung";
	}
	public function editAction(){
		
	}
	public function getAction(){
	
	}
}

?>