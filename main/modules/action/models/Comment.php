<?php
class Action_Model_Comment extends Quac_Db_Table {
	protected $_name='q_comment';
	protected $_primary='id';
	protected $_secondname='q_commentmeta';
	public function __construct($entity=null) {
		parent::__construct ($entity);
	
	}
}

?>