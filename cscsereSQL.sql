-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 21, 2023 at 12:49 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cscsere`
--

-- --------------------------------------------------------

--
-- Table structure for table `fegyver`
--

CREATE TABLE `fegyver` (
  `fegyverId` int(11) NOT NULL,
  `fegyverNev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `skinId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `offerek`
--

CREATE TABLE `offerek` (
  `fromUserId` int(11) NOT NULL,
  `fromSkinId` int(11) NOT NULL,
  `toUserId` int(11) NOT NULL,
  `toSkinId` int(11) NOT NULL,
  `elfogadva` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ritkasag`
--

CREATE TABLE `ritkasag` (
  `ritkasagId` int(11) NOT NULL,
  `ritkasagNev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Table structure for table `skinek`
--

CREATE TABLE `skinek` (
  `skinId` int(11) NOT NULL,
  `kep` varchar(255) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `ritkasagId` int(11) NOT NULL,
  `ertek` int(11) NOT NULL,
  `fegyverId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fegyver`
--
ALTER TABLE `fegyver`
  ADD PRIMARY KEY (`fegyverId`);

--
-- Indexes for table `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD KEY `fk_user_id` (`userId`),
  ADD KEY `fk_skin_id` (`skinId`);

--
-- Indexes for table `offerek`
--
ALTER TABLE `offerek`
  ADD KEY `fk_fromUser_id` (`fromUserId`),
  ADD KEY `fk_toUser_id` (`toUserId`),
  ADD KEY `fk_fromSkin_id` (`fromSkinId`),
  ADD KEY `fk_toSkin_id` (`toSkinId`);

--
-- Indexes for table `ritkasag`
--
ALTER TABLE `ritkasag`
  ADD PRIMARY KEY (`ritkasagId`);

--
-- Indexes for table `skinek`
--
ALTER TABLE `skinek`
  ADD PRIMARY KEY (`skinId`),
  ADD KEY `fk_fegyver` (`fegyverId`),
  ADD KEY `fk_ritkasag` (`ritkasagId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fegyver`
--
ALTER TABLE `fegyver`
  MODIFY `fegyverId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ritkasag`
--
ALTER TABLE `ritkasag`
  MODIFY `ritkasagId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `skinek`
--
ALTER TABLE `skinek`
  MODIFY `skinId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `fk_skin_id` FOREIGN KEY (`skinId`) REFERENCES `skinek` (`skinId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`userId`) REFERENCES `felhasznalok` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `offerek`
--
ALTER TABLE `offerek`
  ADD CONSTRAINT `fk_fromSkin_id` FOREIGN KEY (`fromSkinId`) REFERENCES `skinek` (`skinId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_fromUser_id` FOREIGN KEY (`fromUserId`) REFERENCES `felhasznalok` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_toSkin_id` FOREIGN KEY (`toSkinId`) REFERENCES `skinek` (`skinId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_toUser_id` FOREIGN KEY (`toUserId`) REFERENCES `felhasznalok` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `skinek`
--
ALTER TABLE `skinek`
  ADD CONSTRAINT `fk_fegyver` FOREIGN KEY (`fegyverId`) REFERENCES `fegyver` (`fegyverId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_ritkasag` FOREIGN KEY (`ritkasagId`) REFERENCES `ritkasag` (`ritkasagId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
