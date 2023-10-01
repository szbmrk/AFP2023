-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Okt 01. 12:52
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `cscsere`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `fegyver`
--

CREATE TABLE `fegyver` (
  `fegyverId` int(11) NOT NULL,
  `fegyverNev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `fegyver`
--

INSERT INTO `fegyver` (`fegyverId`, `fegyverNev`) VALUES
(1, 'test');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `userId` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `passwd` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`userId`, `username`, `passwd`, `email`) VALUES
(2, 'test', 'test', 'test@gmail.com'),
(3, 'test1', 'test1', 'test1@gmail.com');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `inventory`
--

CREATE TABLE `inventory` (
  `skinId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `inventory`
--

INSERT INTO `inventory` (`skinId`, `userId`) VALUES
(1, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `offerek`
--

CREATE TABLE `offerek` (
  `offerId` int(11) NOT NULL,
  `fromUserId` int(11) NOT NULL,
  `fromSkinId` int(11) NOT NULL,
  `toUserId` int(11) NOT NULL,
  `toSkinId` int(11) NOT NULL,
  `elfogadva` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `offerek`
--

INSERT INTO `offerek` (`offerId`, `fromUserId`, `fromSkinId`, `toUserId`, `toSkinId`, `elfogadva`) VALUES
(1, 2, 1, 3, 2, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ritkasag`
--

CREATE TABLE `ritkasag` (
  `ritkasagId` int(11) NOT NULL,
  `ritkasagNev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `ritkasag`
--

INSERT INTO `ritkasag` (`ritkasagId`, `ritkasagNev`) VALUES
(1, 'test_ritkasag');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `skinek`
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
-- A tábla adatainak kiíratása `skinek`
--

INSERT INTO `skinek` (`skinId`, `kep`, `nev`, `ritkasagId`, `ertek`, `fegyverId`) VALUES
(1, 'asd.jpg', 'test_fegyver_1', 1, 99, 1),
(2, 'asd1.jpg', 'test_fegyver_2', 1, 100, 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `fegyver`
--
ALTER TABLE `fegyver`
  ADD PRIMARY KEY (`fegyverId`);

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`userId`);

--
-- A tábla indexei `inventory`
--
ALTER TABLE `inventory`
  ADD KEY `fk_user_id` (`userId`),
  ADD KEY `fk_skin_id` (`skinId`);

--
-- A tábla indexei `offerek`
--
ALTER TABLE `offerek`
  ADD PRIMARY KEY (`offerId`),
  ADD KEY `fk_fromUser_id` (`fromUserId`),
  ADD KEY `fk_toUser_id` (`toUserId`),
  ADD KEY `fk_fromSkin_id` (`fromSkinId`),
  ADD KEY `fk_toSkin_id` (`toSkinId`);

--
-- A tábla indexei `ritkasag`
--
ALTER TABLE `ritkasag`
  ADD PRIMARY KEY (`ritkasagId`);

--
-- A tábla indexei `skinek`
--
ALTER TABLE `skinek`
  ADD PRIMARY KEY (`skinId`),
  ADD KEY `fk_fegyver` (`fegyverId`),
  ADD KEY `fk_ritkasag` (`ritkasagId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `fegyver`
--
ALTER TABLE `fegyver`
  MODIFY `fegyverId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `offerek`
--
ALTER TABLE `offerek`
  MODIFY `offerId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `ritkasag`
--
ALTER TABLE `ritkasag`
  MODIFY `ritkasagId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `skinek`
--
ALTER TABLE `skinek`
  MODIFY `skinId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `fk_skin_id` FOREIGN KEY (`skinId`) REFERENCES `skinek` (`skinId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`userId`) REFERENCES `felhasznalok` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `offerek`
--
ALTER TABLE `offerek`
  ADD CONSTRAINT `fk_fromSkin_id` FOREIGN KEY (`fromSkinId`) REFERENCES `skinek` (`skinId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_fromUser_id` FOREIGN KEY (`fromUserId`) REFERENCES `felhasznalok` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_toSkin_id` FOREIGN KEY (`toSkinId`) REFERENCES `skinek` (`skinId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_toUser_id` FOREIGN KEY (`toUserId`) REFERENCES `felhasznalok` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `skinek`
--
ALTER TABLE `skinek`
  ADD CONSTRAINT `fk_fegyver` FOREIGN KEY (`fegyverId`) REFERENCES `fegyver` (`fegyverId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_ritkasag` FOREIGN KEY (`ritkasagId`) REFERENCES `ritkasag` (`ritkasagId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
