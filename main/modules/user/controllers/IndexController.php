<?php
/**
 *
 * @author Nguyễn Đức Trung
 * @version 1.0
 */
class IndexController extends Quac_Controller_Action {
	private $board;
	public function init() {
		/*
		 * Initialize action controller here
		 */
	}
	public function indexAction() {

		$template_path = TEMPLATE_PATH . "/public/system";
		$this->loadTemplate ( $template_path, 'template.ini', 'template' );
		//		$board= new Boards_Model_Board();
		//		Zend_Debug::dump($board->getBoard(array('_secondname'=>'q_boardmeta','id'=>1)));
	}
	public function pollAction() {
		$this->_helper->layout ()->disableLayout ();
		$this->getHelper ( 'viewRenderer' )->setNoRender ();
		$requestedTimestamp = isset ( $_GET [ 'timestamp' ] ) ? strtotime($_GET [ 'timestamp' ]) : null;

		define ( 'MESSAGE_POLL_MICROSECONDS', 500000 );
		define ( 'MESSAGE_TIMEOUT_SECONDS', 30 );
		define ( 'MESSAGE_TIMEOUT_SECONDS_BUFFER', 5 );
		set_time_limit ( MESSAGE_TIMEOUT_SECONDS + MESSAGE_TIMEOUT_SECONDS_BUFFER );
		$counter = MESSAGE_TIMEOUT_SECONDS;
		$user= new User_Model_User();
		$arrData=$lastData=$user->getNewData ();
		while ( $counter > 0 ) {
			if (strtotime($arrData['time'])>$requestedTimestamp) {
				//Thoát khỏi vòng lặp nếu có dữ liệu mới
				$arrData=$user->getNewData();
				break;
			} else {
				usleep ( MESSAGE_POLL_MICROSECONDS );
				$counter -= MESSAGE_POLL_MICROSECONDS / 1000000;
			}
		}

		if (isset ( $arrData )) {
			echo json_encode($arrData);
		}
		
	}

}

