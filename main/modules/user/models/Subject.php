<?php
/**
 * 
 * @author Đức Trung
 * Xử lý liên quan đến subject
 *
 */
class User_Model_Subject extends Quac_Db_Table {
	
	protected $_name='q_subject';
	protected $_secondname='q_subjectmeta';
	protected $_primary='id';
	public function __construct($entity=null) {
		parent::__construct ($entity);
	
	}	
}

?>