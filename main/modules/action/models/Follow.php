<?php
class Action_Model_Follow extends Quac_Db_Table {
	protected $_name='q_follow';
	protected $_primary='id';
	protected $_secondname='q_followmeta';
	public function __construct($entity=null) {
		parent::__construct ($entity);
	
	}
	
}

?>