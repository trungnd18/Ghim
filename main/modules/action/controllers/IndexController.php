<?php
/**
 * 
 * @author Nguyễn Đức Trung
 * @version 1.0
 */
class Action_IndexController extends Quac_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }
    public function indexAction()
    {
    	
    	Zend_Debug::dump($this->getRequest());
    }
	public function loginAction(){
		echo "Login";
		
	}

}

