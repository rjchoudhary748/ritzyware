-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2022 at 06:15 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ritzyware`
--

-- --------------------------------------------------------

--
-- Table structure for table `client_imag`
--

CREATE TABLE `client_imag` (
  `id` int(11) NOT NULL,
  `img` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client_imag`
--

INSERT INTO `client_imag` (`id`, `img`) VALUES
(3, '/uploads/logo1.png'),
(4, '/uploads/logo2.png'),
(5, '/uploads/logo3.png'),
(6, '/uploads/logo4.png'),
(7, '/uploads/logo5.png'),
(8, '/uploads/logo6.png'),
(9, '/uploads/logo7.png'),
(10, '/uploads/logo8.png'),
(11, '/uploads/logo9.png'),
(12, '/uploads/logo10.png'),
(13, '/uploads/logo11.png');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `link` varchar(250) NOT NULL,
  `img` varchar(250) NOT NULL,
  `cat` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `name`, `link`, `img`, `cat`) VALUES
(2, 'Protfolio 1', 'https://www.google.com/', '/uploads/portfolio1.jpg', 'App'),
(3, 'Protfolio 2', 'https://www.google.com/', '/uploads/portfolio2.jpg', 'Print'),
(4, 'Protfolio 3', 'https://www.google.com/', '/uploads/portfolio3.jpg', 'Web'),
(5, 'Protfolio 4', 'https://www.google.com/', '/uploads/portfolio4.jpg', 'Web'),
(6, 'Protfolio 5', 'https://www.google.com/', '/uploads/portfolio5.jpg', 'Logo'),
(7, 'Protfolio 6', 'https://www.google.com/', '/uploads/portfolio6.jpg', 'Strategy'),
(8, 'Protfolio 7', 'https://www.google.com/', '/uploads/portfolio7.jpg', 'Strategy'),
(9, 'Protfolio 8', 'https://www.google.com/', '/uploads/portfolio3.jpg', 'Logo'),
(10, 'Protfolio 9', 'https://www.google.com/', '/uploads/portfolio4.jpg', 'Logo'),
(11, 'Protfolio 10', 'https://www.google.com/', '/uploads/portfolio1.jpg', 'App');

-- --------------------------------------------------------

--
-- Table structure for table `protflio_cat`
--

CREATE TABLE `protflio_cat` (
  `id` int(11) NOT NULL,
  `cate_name` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `protflio_cat`
--

INSERT INTO `protflio_cat` (`id`, `cate_name`) VALUES
(1, 'App'),
(2, 'Web'),
(3, 'Print'),
(4, 'Strategy'),
(5, 'Logo');

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `text` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `name`, `text`) VALUES
(1, 'Bishal Madhab', 'I got the opportunity to work with Pulkit for a web application and website development project for our start-up. Our overall experience with Pulkit was very satisfactory. Our project was complicated to some extent and involved integration of GIS app'),
(2, 'Sreejan Guha Niyogi', 'This is the first time I worked with Pulkit and the experience has been really satisfying. The project was a complex one but Pulkit approached it as his own and even contributed his own ideas. If you are looking for a reliable developer then loo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `client_imag`
--
ALTER TABLE `client_imag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `protflio_cat`
--
ALTER TABLE `protflio_cat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client_imag`
--
ALTER TABLE `client_imag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `protflio_cat`
--
ALTER TABLE `protflio_cat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
