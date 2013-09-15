<?php
/**
 * 
 * @author Nguyễn Đức Trung
 * @version 1.0
 */
class Facebook_IndexController extends Quac_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
    	$abc= new Facebook_Model_Test();
    }
	public function loginAction(){
		echo "Login";
		Zend_Debug::dump($this->getRequest()->getParams());
		
	}

}

