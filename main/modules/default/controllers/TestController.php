<?php

class TestController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
    	echo realpath(dirname(__FILE__));
        // action bodyho 
        echo "trung";
    }
	public function loginAction(){
		echo "Login";
	}

}

