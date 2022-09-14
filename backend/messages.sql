-- -----------------------------------------------------
-- Schema messages_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `messages_db` DEFAULT CHARACTER SET utf8 ;
USE `messages_db` ;

-- -----------------------------------------------------
-- Table `messages_db`.`messages`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `messages_db`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(255) NOT NULL,
  `user_mail` VARCHAR(255) NOT NULL,
  `user_number` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

