CREATE TABLE IF NOT EXISTS `things` (
  `thing_id` int(11) NOT NULL auto_increment,
  `user_id` int(11) NOT NULL,
  `added_dt` DATETIME NOT NULL,
  `name` varchar(255),
  `description` varchar(1000),
  PRIMARY KEY (`thing_id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8 AUTO_INCREMENT=1;
