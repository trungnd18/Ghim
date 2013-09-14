<?php
/**
 * 
 * @author Nguyễn Đức Trung
 * @version 1.0
 */

class Boards_IndexController extends Quac_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
    	$this->_helper->layout ()->disableLayout ();
		$this->getHelper ( 'viewRenderer' )->setNoRender ();
    	$user= new Boards_Model_Board();
			
    }

}

