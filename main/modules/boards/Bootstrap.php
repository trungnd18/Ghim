<?php
class Boards_Bootstrap extends Zend_Application_Module_Bootstrap
{
	protected function _initLoadRouter(){
		$config = new Zend_Config_Ini(CONFIG_PATH . '/app-router.ini','thietlap');
		$objRouter = new Zend_Controller_Router_Rewrite();
		$router = $objRouter->addConfig($config,'routes');
		$front = Zend_Controller_Front::getInstance();
		$front->setRouter($router);
	}
}
