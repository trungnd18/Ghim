<?php

/**
 * 
 * @author Đức Trung
 * Class tương tác với cơ sở dữ liệu của bảng q_subject
 * Làm việc với các topic
 */
class Subject_Model_Topic extends Quac_Db_Table {
	protected $_primary="id"; // Khóa chính
	protected $_name='q_subject';// Tên bảng chính
	protected $_secondname='q_subjectmeta'; // tên bảng meta
	protected $_type='topic';
	public function __construct($entity=null) {
		parent::__construct ($entity=null);
	
	}
}

?>