<?php
class Action_Model_Like extends Quac_Db_Table {
	protected $_name='q_like';
	protected $_primary='id';
	protected $_secondname='q_likemeta';
	public function __construct($entity=null) {
		parent::__construct ($entity);
	
	}
}

?>