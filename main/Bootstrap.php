<?php
/**
 * 
 * @author Nguyễn Đức Trung
 */
class Bootstrap extends Zend_Application_Bootstrap_Bootstrap {
	/*
	 * Hàm thiết lập cấu hình database cho ứng dụng
	 */
	protected function _initDb() {
		
		$optionResources = $this->getOption ( 'resources' );
		$dbOption = $optionResources ['db'];
		$adapter = $dbOption ['adapter'];
		$config = $dbOption ['params'];
		$db = Zend_Db::factory ( $adapter, $config );
		$db->setFetchMode ( Zend_Db::FETCH_ASSOC );
		$db->query ( "SET NAMES 'utf8'" );
		$db->query ( "SET CHARACTER SET 'utf8'" );
		Zend_Registry::set ( 'connectDb', $db );
		Zend_Db_Table::setDefaultAdapter ( $db );
		return $db;
	}
	/*
	 * Hàm thực hiện load module error phục vụ ứng dụng
	 */
	public function _initAutoload(){
		$front = Zend_Controller_Front::getInstance();
		$front->registerPlugin(new Zend_Controller_Plugin_ErrorHandler(array(
				'module'     => 'error',
				'controller' => 'error',
				'action'     => 'error'
		)));
	
	}
}

