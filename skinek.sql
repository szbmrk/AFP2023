-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Okt 01. 13:10
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.0.28

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
-- Tábla szerkezet ehhez a táblához `skinek`
--

CREATE TABLE `skinek` (
  `skinId` int(11) NOT NULL,
  `kep` varchar(255) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `ritkasagId` int(11) NOT NULL,
  `ertek` float NOT NULL,
  `fegyverId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `skinek`
--

INSERT INTO `skinek` (`skinId`, `kep`, `nev`, `ritkasagId`, `ertek`, `fegyverId`) VALUES
(1, 'nomad_knife_slaughter.png', 'Nomad Knife | Slaughter', 5, 718.3, 1),
(2, 'skeleton_knife_crimson_web.png', 'Skeleton Knife | Crimson Web', 5, 3968.14, 1),
(3, 'survival_knife_blue_steel.png', 'Survival Knife | Blue Steel', 5, 293.94, 1),
(4, 'paracord_knife_forest_ddpat.png', 'Paracord Knife | Forest DDPAT', 5, 326.07, 1),
(5, 'classic_knife_urban_masked.png', 'Classic Knife | Urban Masked', 5, 324.55, 1),
(6, 'bayonet_gamma_doppler.png', 'Bayonet | Gamma Doppler', 5, 1240.96, 1),
(7, 'bowie_knife_freehand.png', 'Bowie Knife | Freehand', 5, 239.2, 1),
(8, 'butterfly_knife_marble_fade.png', 'Butterfly Knife | Marble Fade', 5, 2174.3, 1),
(9, 'falchion_knife_black_laminate.png', 'Falchion Knife | Black Laminate', 5, 246.09, 1),
(10, 'flip_knife_ultraviolet.png', 'Flip Knife | Ultraviolet', 5, 392.23, 1),
(11, 'gut_knife_safari_mesh.png', 'Gut Knife | Safari Mesh', 5, 345.04, 1),
(12, 'huntsman_knife_tiger_tooth.png', 'Huntsman Knife | Tiger Tooth', 5, 421.89, 1),
(13, 'karambit_lore.png', 'Karambit | Lore', 5, 3166.25, 1),
(14, 'm9_bayonet_autotronic.png', 'M9 Bayonet | Autotronic', 5, 1890.3, 1),
(15, 'navaja_knife_boreal_forest.png', 'Navaja Knife | Boreal Forest', 5, 141.67, 1),
(16, 'shadow_daggers_night.png', 'Shadow Daggers | Night', 5, 1682, 1),
(17, 'stiletto_knife_case_hardened.png', 'Stiletto Knife | Case Hardened', 5, 944.2, 1),
(18, 'talon_knife_doppler.png', 'Talon Knife | Doppler', 5, 1333.59, 1),
(19, 'ursus_knife_fade.png', 'Ursus Knife | Fade', 5, 999.14, 1),
(20, 'broken_fang_gloves_jade.png', 'Broken Fang Gloves | Jade', 5, 311.43, 2),
(21, 'driver_gloves_black_tie.png', 'Driver Gloves | Black Tie', 5, 720.1, 2),
(22, 'hand_wraps_caution!.png', 'Hand Wraps | CAUTION!', 5, 548.18, 2),
(23, 'driver_gloves_king_snake.png', 'Driver Gloves | King Snake', 5, 1794.24, 2),
(24, 'hand_wraps_duct_tape.png', 'Hand Wraps | Duct Tape', 5, 1455.05, 2),
(25, 'moto_gloves_turtle.png', 'Moto Gloves | Turtle', 5, 494.43, 2),
(26, 'sport_gloves_vice.png', 'Sport Gloves | Vice', 5, 4990.39, 2),
(27, 'moto_gloves_spearmint.png', 'Moto Gloves | Spearmint', 5, 5576.38, 2),
(28, 'specialist_gloves_emerald_web.png', 'Specialist Gloves | Emerald Web', 5, 1725.23, 2),
(29, 'sport_gloves_pandora\'s_box.png', 'Sport Gloves | Pandora\'s Box', 5, 13232.1, 2),
(30, 'cz75-auto_polymer.png', 'Polymer', 1, 0.33, 3),
(31, 'desert_eagle_code_red.png', 'Code Red', 4, 97.38, 4),
(32, 'desert_eagle_kumicho_dragon.png', 'Kumicho Dragon', 3, 43.83, 4),
(33, 'desert_eagle_oxide_blaze.png', 'Oxide Blaze', 1, 0.57, 4),
(34, 'duel_berettas_shred.png', 'Shred', 1, 0.44, 5),
(35, 'dual_berettas_royal_consorts.png', 'Royal Consorts', 2, 3.84, 5),
(36, 'five-seven_monkey_business.png', 'Monkey Business', 3, 16.02, 6),
(37, 'five-seven_capillary.png', 'Capillary', 1, 0.34, 6),
(38, 'glock-18_wasteland_rebel.png', 'Wasteland Rebel', 4, 9.43, 7),
(39, 'glock-18_bunsen_burner.png', 'Bunsen Burner', 1, 2.76, 7),
(40, 'p2000_ivory.png', 'Ivory', 1, 0.84, 8),
(41, 'p2000_gnarled.png', 'Gnarled', 1, 0.28, 8),
(42, 'p250_asiimov.png', 'Asiimov', 3, 21.57, 9),
(43, 'p250_cassette.png', 'Cassette', 1, 0.24, 9),
(44, 'r8_revolver_survivalist.png', 'Survivalist', 1, 0.53, 10),
(45, 'r8_revolver_fade.png', 'Fade', 4, 27.01, 10),
(46, 'tec-9_bamboozle.png', 'Bamboozle', 2, 1.52, 11),
(47, 'tec-9_fubar.png', 'Fubar', 1, 1.27, 11),
(48, 'usp-s_kill_confirmed.png', 'Kill Confirmed', 4, 225.04, 12),
(49, 'usp-s_cortex.png', 'Cortex', 3, 12.73, 12),
(50, 'usp-s_cyrex.png', 'Cyrex', 2, 4.06, 12),
(51, 'usp-s_torque.png', 'Torque', 1, 1.89, 12),
(52, 'ak-47_neon_revolution.png', 'Neon Revolution', 4, 74.35, 13),
(53, 'ak-47_vulcan.png', 'Vulcan', 4, 1020.14, 13),
(54, 'ak-47_frontside_misty.png', 'Frontside Misty', 3, 78.83, 13),
(55, 'ak-47_redline.png', 'Redline', 3, 93.56, 13),
(56, 'ak-47_elite_build.png', 'Elite Build', 1, 6.49, 13),
(57, 'aug_chameleon.png', 'Chameleon', 4, 6.6, 14);

--
-- Indexek a kiírt táblákhoz
--

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
-- AUTO_INCREMENT a táblához `skinek`
--
ALTER TABLE `skinek`
  MODIFY `skinId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- Megkötések a kiírt táblákhoz
--

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
