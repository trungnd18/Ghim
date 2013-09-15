<?php

class Action_LikeController extends Quac_Controller_Action {
	
	protected $_param;
	public function init() {
		$this->_helper->layout ()->disableLayout ();
		$this->getHelper ( 'viewRenderer' )->setNoRender ();
		$this->_param = $this->_request->getParams ();
	}
	public function indexAction() {
		Zend_Debug::dump ( $this->_param );
	}
	public function addAction() {
	
	}
	public function removeAction() {
	
	}
	public function editAction() {
	
	}
}

?>