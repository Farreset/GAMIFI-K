-- phpMyAdmin SQL Dump
-- version 4.0.4.2
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 16-05-2022 a las 11:40:52
-- Versión del servidor: 5.6.13
-- Versión de PHP: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `ajesty`
--
CREATE DATABASE IF NOT EXISTS `ajesty` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `ajesty`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE IF NOT EXISTS `alumnos` (
  `id_alumno` int(30) NOT NULL AUTO_INCREMENT,
  `nick` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `fname` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `lname` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `fecha` date NOT NULL,
  `pssw` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `psswConf` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `avatar` longblob NOT NULL,
  PRIMARY KEY (`id_alumno`),
  UNIQUE KEY `nick` (`nick`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id_alumno`, `nick`, `fname`, `lname`, `mail`, `fecha`, `pssw`, `psswConf`, `avatar`) VALUES
(0, 'Alu', 'Alumno', 'Escolar', 'alumno@gmail.com', '2022-05-16', '12345678', '12345678', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE IF NOT EXISTS `articulos` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `precio` float DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entregas`
--

CREATE TABLE IF NOT EXISTS `entregas` (
  `id_ent` int(30) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) COLLATE utf8_spanish_ci NOT NULL,
  `id_ranking` int(30) NOT NULL,
  PRIMARY KEY (`id_ent`,`id_ranking`),
  KEY `id_fk` (`id_ranking`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=18 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrega_alumno`
--

CREATE TABLE IF NOT EXISTS `entrega_alumno` (
  `id_alumno` int(10) NOT NULL,
  `id_entrega` int(10) NOT NULL,
  `puntos` int(20) NOT NULL,
  PRIMARY KEY (`id_alumno`,`id_entrega`),
  KEY `id_entrega_fk` (`id_entrega`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE IF NOT EXISTS `profesores` (
  `id_profesor` int(30) NOT NULL AUTO_INCREMENT,
  `nick` varchar(30) CHARACTER SET utf32 COLLATE utf32_spanish_ci NOT NULL,
  `fname` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `lname` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `mail` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `centro` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `pssw` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `psswConf` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `avatar` mediumblob NOT NULL,
  PRIMARY KEY (`id_profesor`),
  UNIQUE KEY `nick` (`nick`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=18 ;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id_profesor`, `nick`, `fname`, `lname`, `mail`, `centro`, `pssw`, `psswConf`, `avatar`) VALUES
(0, 'Profe', 'Profezor', 'Academico', 'profe@gmail.com', 'Ilerna', '12345678', '12345678', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ranking`
--

CREATE TABLE IF NOT EXISTS `ranking` (
  `id_r` int(11) NOT NULL AUTO_INCREMENT,
  `name_r` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `cont_r` int(30) NOT NULL,
  `codigo` int(40) NOT NULL,
  PRIMARY KEY (`id_r`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=29 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `r_alumno`
--

CREATE TABLE IF NOT EXISTS `r_alumno` (
  `id_alumno` int(30) NOT NULL,
  `id_r` int(30) NOT NULL,
  PRIMARY KEY (`id_alumno`,`id_r`),
  KEY `r_a_fk` (`id_r`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `r_profesor`
--

CREATE TABLE IF NOT EXISTS `r_profesor` (
  `id_profesor` int(30) NOT NULL,
  `id_r` int(30) NOT NULL,
  PRIMARY KEY (`id_profesor`,`id_r`),
  KEY `r_p_fk` (`id_r`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `entregas`
--
ALTER TABLE `entregas`
  ADD CONSTRAINT `id_fk` FOREIGN KEY (`id_ranking`) REFERENCES `ranking` (`id_r`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `entrega_alumno`
--
ALTER TABLE `entrega_alumno`
  ADD CONSTRAINT `id_alumno_entrega_fk` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id_alumno`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_entrega_fk` FOREIGN KEY (`id_entrega`) REFERENCES `entregas` (`id_ent`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `r_alumno`
--
ALTER TABLE `r_alumno`
  ADD CONSTRAINT `r_alumno_fk` FOREIGN KEY (`id_alumno`) REFERENCES `alumnos` (`id_alumno`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `r_a_fk` FOREIGN KEY (`id_r`) REFERENCES `ranking` (`id_r`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `r_profesor`
--
ALTER TABLE `r_profesor`
  ADD CONSTRAINT `r_profesor_fk` FOREIGN KEY (`id_profesor`) REFERENCES `profesores` (`id_profesor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `r_p_fk` FOREIGN KEY (`id_r`) REFERENCES `ranking` (`id_r`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
