DROP DATABASE IF EXISTS music_db;

CREATE DATABASE music_db;
USE music_db;
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
	`id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `name` varchar(50) NOT NULL,
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
	`id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `name` varchar(50) NOT NULL,
PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `colors`;
CREATE TABLE `colors` (
	`id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `name` varchar(50) NOT NULL,
PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
	`id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `name` text NOT NULL,
  `price` float(10) NOT NULL,
  `discount` int(11) NOT NULL DEFAULT 0,
  `stock` int(11) NOT NULL DEFAULT 0,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT 'default.jpg',
  `id_color` int(11) ,
  `id_categories` int(11) ,
  `id_brand` int(11) , 
   PRIMARY KEY (`id`),
   KEY `products_brand_id_foreign` (`id_brand`),
   KEY `products_categories_id_foreign` (`id_categories`),
   KEY `products_color_id_foreign` (`id_color`),
   CONSTRAINT `products_brand_id_foreign` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id`),
   CONSTRAINT `products_categories_id_foreign` FOREIGN KEY (`id_categories`) REFERENCES `categories` (`id`),
   CONSTRAINT `products_color_id_foreign` FOREIGN KEY (`id_color`) REFERENCES `colors` (`id`)
);


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
   `id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password`text NOT NULL ,
  `image` varchar(100) NOT NULL DEFAULT 'default.jpg',
  `admin` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`(
   `id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `id_user` int(11) NOT NULL,
  `total` float(11) NOT NULL,
  `date` datetime, 
   PRIMARY KEY (`id`),
   KEY `orders_user_id_foreign` (`id_user`),
   CONSTRAINT `orders_user_id_foreignn` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
);

DROP TABLE IF EXISTS `orderProducts`;
CREATE TABLE `orderProducts`(
	`id` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `id_order` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` float(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orderproduct_order_id_foreign` (`id_order`),
  KEY `orderproduct_product_id_foreign` (`id_product`),
  CONSTRAINT `orderproduct_order_id_foreign` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id`),
  CONSTRAINT `orderproduct_product_id_foreign` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
);