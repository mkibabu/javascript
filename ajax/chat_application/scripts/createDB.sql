CREATE DATABASE IF NOT EXISTS `chatdb`;

CREATE USER 'chatuser'@'localhost' IDENTIFIED BY 'chatpass';

GRANT ALL ON chatdb TO 'chatuser'@'localhost';

USE DATABASE chatdb;

CREATE TABLE IF NOT EXISTS `messages`
(
    `id` int(7) NOT NULL auto_increment,
    `user` varchar(255) NOT NULL,
    `msg` text NOT NULL,
    `time` int(9) NOT NULL,
    PRIMARY KEY(`id`)
);
