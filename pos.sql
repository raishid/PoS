-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 08-03-2022 a las 22:00:02
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `category_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Amortiguadores', 'Amortiguadores Americanos, Asiaticos y Europeos.', '2022-03-03 21:33:50', NULL),
(2, 'Terminales Externos', NULL, '2022-03-03 21:34:18', NULL),
(3, 'Terminales Internos', 'Terminales internos (Rotula)', '2022-03-03 21:34:36', NULL),
(4, 'Anillos de motor', 'Anillos de motores Estandar, 050, 075 100', '2022-03-03 21:34:57', NULL),
(5, 'Aceites Chevron', 'Aceites marca Chevron', '2022-03-08 16:57:24', '2022-03-08 16:57:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dni` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `credit` int(255) DEFAULT NULL,
  `bill` float NOT NULL DEFAULT '0',
  `purchases` int(11) NOT NULL DEFAULT '0',
  `last_purchase` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni_unique` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `name`, `dni`, `email`, `phone`, `address`, `credit`, `bill`, `purchases`, `last_purchase`, `created_at`, `updated_at`) VALUES
(3, 'Yissel Lezama', 26409393, NULL, '+(58)412-049-75-72', 'Manguito III', 100, 0, 0, NULL, '2022-03-06 01:44:43', '2022-03-06 01:44:43'),
(4, 'Nancy Contreras', 6370174, '', '+(58)412-013-66-92', 'Manguito III', 100, 0, 1, '2022-03-09 01:58:47', '2022-03-06 02:04:41', '2022-03-09 01:59:24'),
(10, 'Maria Rivero', 12054382, NULL, NULL, 'Charallave', NULL, 0, 0, NULL, '2022-03-07 09:07:58', '2022-03-07 09:07:58'),
(11, 'Lisbeth Velazco', 13135698, NULL, NULL, 'Cua', NULL, 0, 2, '2022-03-09 01:23:26', '2022-03-08 20:59:17', '2022-03-09 01:23:26'),
(12, 'Luis Daniel David', 26226267, NULL, NULL, 'Charallave', NULL, 0, 1, '2022-03-09 01:24:01', '2022-03-08 21:02:12', '2022-03-09 01:24:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `category_id` int(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `stock` int(255) NOT NULL,
  `cost` float NOT NULL,
  `price` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sku_unique` (`sku`),
  KEY `sku_index` (`sku`),
  KEY `fk_category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `sku`, `name`, `description`, `category_id`, `image`, `stock`, `cost`, `price`, `created_at`, `updated_at`) VALUES
(1, '5699', 'Silicon Gris', 'Silicon gris 180 gr Economico', 4, NULL, 99, 1, 2, '2022-03-05 10:33:08', '2022-03-09 01:23:26'),
(2, '82194', 'Silicon Gris Permatec o Loctite', 'Silicon gris permatec o loctite 180 gr', 4, NULL, 98, 1.5, 3.51, '2022-03-05 10:38:14', '2022-03-09 01:59:24'),
(10, '6895-020', 'Anillos Corsa/Aveo 020', 'Anillos de Corsa/Aveo Medida 020/050', 4, NULL, 0, 10, 20, '2022-03-05 11:20:49', '2022-03-05 11:21:15'),
(11, 'A-LD-20/50-CHEV', 'Aceite 20/50 Chevron', 'Aceite de 1 Litro marca Chevron', 5, NULL, 16, 3, 5, '2022-03-08 20:58:11', '2022-03-09 01:24:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

DROP TABLE IF EXISTS `sales`;
CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `id_sale` bigint(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `customer_id` int(255) NOT NULL,
  `tax` float NOT NULL,
  `net` float NOT NULL,
  `total` float NOT NULL,
  `method` varchar(255) NOT NULL,
  `id_transaction` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_sale` (`id_sale`),
  KEY `fk_user_sale` (`user_id`),
  KEY `fk_customer_sale` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `id_sale`, `user_id`, `customer_id`, `tax`, `net`, `total`, `method`, `id_transaction`, `created_at`, `updated_at`) VALUES
(11, 220001, 1, 11, 16, 20, 23.2, 'cash', NULL, '2022-03-08 21:10:13', '2022-03-09 00:59:54'),
(13, 220002, 1, 11, 16, 2, 2.32, 'cash', NULL, '2022-03-09 01:23:26', '2022-03-09 01:23:26'),
(14, 220003, 1, 12, 16, 20, 23.2, 'debit', '08032022004', '2022-03-09 01:24:01', '2022-03-09 01:24:01'),
(17, 220005, 1, 4, 16, 7.02, 8.14, 'debit', '08032022002', '2022-03-09 01:58:47', '2022-03-09 01:58:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales_products`
--

DROP TABLE IF EXISTS `sales_products`;
CREATE TABLE IF NOT EXISTS `sales_products` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `sale_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_id` (`product_id`),
  KEY `fk_sale_id` (`sale_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sales_products`
--

INSERT INTO `sales_products` (`id`, `sale_id`, `product_id`, `quantity`) VALUES
(18, 11, 11, 4),
(19, 13, 1, 1),
(20, 14, 11, 4),
(24, 17, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(25) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `state` int(1) NOT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password`, `role`, `pic`, `state`, `last_login`, `date`) VALUES
(1, 'Administrador', 'admin', '$2y$10$sbtYhr6DQ8hoZRhlJuKG1eEA7JQIdQzRbM7B.5OF7kGsPsKvGTgHW', '1', '', 1, '2022-03-08 22:39:05', '2022-02-19 23:34:13'),
(8, 'Assistant', 'adm2', '$2y$10$zn1HWhX3q1Ra3COOX/MFuesPQW2kGR6y19BleEqt/mOgbP6JOjskC', '2', '/assets/images/anonymous.png', 1, '2022-03-08 22:38:47', '2022-03-08 22:10:51');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `fk_customer_sale` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_sale` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `sales_products`
--
ALTER TABLE `sales_products`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sale_id` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
