<?php

class Action_Model_Vote extends Quac_Db_Table {
	protected $_name='q_vote';
	protected $_primary='id';
	protected $_secondname='q_votemeta';
	public function __construct($entity=null) {
		parent::__construct ($entity);
	
	}
}

?>