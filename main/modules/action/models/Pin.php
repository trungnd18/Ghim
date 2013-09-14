<?php

class Action_Model_Pin extends Quac_Db_Table {
	protected $_name='q_pin';
	protected $_primary='id';
	protected $_secondname='q_pinmeta';
	public function __construct($entity=null) {
		parent::__construct ($entity);
	}
	
}

?>