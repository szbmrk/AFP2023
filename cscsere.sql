-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Okt 01. 14:11
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
-- Tábla szerkezet ehhez a táblához `fegyver`
--

CREATE TABLE `FEGYVER` (
    `FEGYVERID` INT(11) NOT NULL,
    `FEGYVERNEV` VARCHAR(255) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COLLATE=UTF8_HUNGARIAN_CI;

--
-- A tábla adatainak kiíratása `fegyver`
--

INSERT INTO `FEGYVER` (
    `FEGYVERID`,
    `FEGYVERNEV`
) VALUES (
    1,
    'Knife'
),
(
    2,
    'Gloves'
),
(
    3,
    'CZ75-Auto'
),
(
    4,
    'Desert Eagle'
),
(
    5,
    'Dual Berettas'
),
(
    6,
    'Five-SeveN'
),
(
    7,
    'Glock-18'
),
(
    8,
    'P2000'
),
(
    9,
    'P250'
),
(
    10,
    'R8 Revolver'
),
(
    11,
    'Tec-9'
),
(
    12,
    'USP-S'
),
(
    13,
    'AK-47'
),
(
    14,
    'AUG'
),
(
    15,
    'AWP'
),
(
    16,
    'FAMAS'
),
(
    17,
    'G3SG1'
),
(
    18,
    'Galil AR'
),
(
    19,
    'M4A1-S'
),
(
    20,
    'M4A4'
),
(
    21,
    'SCAR-20'
),
(
    22,
    'SG 553'
),
(
    23,
    'SSG 08'
),
(
    24,
    'MAC-10'
),
(
    25,
    'MP5-SD'
),
(
    26,
    'MP7'
),
(
    27,
    'MP9'
),
(
    28,
    'PP-Bizon'
),
(
    29,
    'P90'
),
(
    30,
    'UMP-45'
),
(
    31,
    'MAG-7'
),
(
    32,
    'Nova'
),
(
    33,
    'Sawed-Off'
),
(
    34,
    'XM1014'
),
(
    35,
    'M249'
),
(
    36,
    'Negev'
);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `FELHASZNALOK` (
    `USERID` INT(11) NOT NULL,
    `USERNAME` VARCHAR(255) NOT NULL,
    `PASSWD` VARCHAR(255) NOT NULL,
    `EMAIL` VARCHAR(255) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COLLATE=UTF8_HUNGARIAN_CI;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `inventory`
--

CREATE TABLE `INVENTORY` (
    `SKINID` INT(11) NOT NULL,
    `USERID` INT(11) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COLLATE=UTF8_HUNGARIAN_CI;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `offerek`
--

CREATE TABLE `OFFEREK` (
    `OFFERID` INT(11) NOT NULL,
    `FROMUSERID` INT(11) NOT NULL,
    `FROMSKINID` INT(11) NOT NULL,
    `TOUSERID` INT(11) NOT NULL,
    `TOSKINID` INT(11) NOT NULL,
    `ELFOGADVA` TINYINT(1) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COLLATE=UTF8_HUNGARIAN_CI;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ritkasag`
--

CREATE TABLE `RITKASAG` (
    `RITKASAGID` INT(11) NOT NULL,
    `RITKASAGNEV` VARCHAR(255) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COLLATE=UTF8_HUNGARIAN_CI;

--
-- A tábla adatainak kiíratása `ritkasag`
--

INSERT INTO `RITKASAG` (
    `RITKASAGID`,
    `RITKASAGNEV`
) VALUES (
    1,
    'Mil-spec'
),
(
    2,
    'Restricted'
),
(
    3,
    'Classified'
),
(
    4,
    'Covert'
),
(
    5,
    'Contraband'
);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `skinek`
--

CREATE TABLE `SKINEK` (
    `SKINID` INT(11) NOT NULL,
    `KEP` VARCHAR(255) NOT NULL,
    `NEV` VARCHAR(255) NOT NULL,
    `RITKASAGID` INT(11) NOT NULL,
    `ERTEK` FLOAT NOT NULL,
    `FEGYVERID` INT(11) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COLLATE=UTF8_HUNGARIAN_CI;

--
-- A tábla adatainak kiíratása `skinek`
--

INSERT INTO `SKINEK` (
    `SKINID`,
    `KEP`,
    `NEV`,
    `RITKASAGID`,
    `ERTEK`,
    `FEGYVERID`
) VALUES (
    1,
    'nomad_knife_slaughter.png',
    'Nomad Knife | Slaughter',
    5,
    718.3,
    1
),
(
    2,
    'skeleton_knife_crimson_web.png',
    'Skeleton Knife | Crimson Web',
    5,
    3968.14,
    1
),
(
    3,
    'survival_knife_blue_steel.png',
    'Survival Knife | Blue Steel',
    5,
    293.94,
    1
),
(
    4,
    'paracord_knife_forest_ddpat.png',
    'Paracord Knife | Forest DDPAT',
    5,
    326.07,
    1
),
(
    5,
    'classic_knife_urban_masked.png',
    'Classic Knife | Urban Masked',
    5,
    324.55,
    1
),
(
    6,
    'bayonet_gamma_doppler.png',
    'Bayonet | Gamma Doppler',
    5,
    1240.96,
    1
),
(
    7,
    'bowie_knife_freehand.png',
    'Bowie Knife | Freehand',
    5,
    239.2,
    1
),
(
    8,
    'butterfly_knife_marble_fade.png',
    'Butterfly Knife | Marble Fade',
    5,
    2174.3,
    1
),
(
    9,
    'falchion_knife_black_laminate.png',
    'Falchion Knife | Black Laminate',
    5,
    246.09,
    1
),
(
    10,
    'flip_knife_ultraviolet.png',
    'Flip Knife | Ultraviolet',
    5,
    392.23,
    1
),
(
    11,
    'gut_knife_safari_mesh.png',
    'Gut Knife | Safari Mesh',
    5,
    345.04,
    1
),
(
    12,
    'huntsman_knife_tiger_tooth.png',
    'Huntsman Knife | Tiger Tooth',
    5,
    421.89,
    1
),
(
    13,
    'karambit_lore.png',
    'Karambit | Lore',
    5,
    3166.25,
    1
),
(
    14,
    'm9_bayonet_autotronic.png',
    'M9 Bayonet | Autotronic',
    5,
    1890.3,
    1
),
(
    15,
    'navaja_knife_boreal_forest.png',
    'Navaja Knife | Boreal Forest',
    5,
    141.67,
    1
),
(
    16,
    'shadow_daggers_night.png',
    'Shadow Daggers | Night',
    5,
    1682,
    1
),
(
    17,
    'stiletto_knife_case_hardened.png',
    'Stiletto Knife | Case Hardened',
    5,
    944.2,
    1
),
(
    18,
    'talon_knife_doppler.png',
    'Talon Knife | Doppler',
    5,
    1333.59,
    1
),
(
    19,
    'ursus_knife_fade.png',
    'Ursus Knife | Fade',
    5,
    999.14,
    1
),
(
    20,
    'broken_fang_gloves_jade.png',
    'Broken Fang Gloves | Jade',
    5,
    311.43,
    2
),
(
    21,
    'driver_gloves_black_tie.png',
    'Driver Gloves | Black Tie',
    5,
    720.1,
    2
),
(
    22,
    'hand_wraps_caution!.png',
    'Hand Wraps | CAUTION!',
    5,
    548.18,
    2
),
(
    23,
    'driver_gloves_king_snake.png',
    'Driver Gloves | King Snake',
    5,
    1794.24,
    2
),
(
    24,
    'hand_wraps_duct_tape.png',
    'Hand Wraps | Duct Tape',
    5,
    1455.05,
    2
),
(
    25,
    'moto_gloves_turtle.png',
    'Moto Gloves | Turtle',
    5,
    494.43,
    2
),
(
    26,
    'sport_gloves_vice.png',
    'Sport Gloves | Vice',
    5,
    4990.39,
    2
),
(
    27,
    'moto_gloves_spearmint.png',
    'Moto Gloves | Spearmint',
    5,
    5576.38,
    2
),
(
    28,
    'specialist_gloves_emerald_web.png',
    'Specialist Gloves | Emerald Web',
    5,
    1725.23,
    2
),
(
    29,
    'sport_gloves_pandora\'S_BOX.PNG', 'SPORT GLOVES | PANDORA\'s Box',
    5,
    13232.1,
    2
),
(
    30,
    'cz75-auto_polymer.png',
    'Polymer',
    1,
    0.33,
    3
),
(
    31,
    'desert_eagle_code_red.png',
    'Code Red',
    4,
    97.38,
    4
),
(
    32,
    'desert_eagle_kumicho_dragon.png',
    'Kumicho Dragon',
    3,
    43.83,
    4
),
(
    33,
    'desert_eagle_oxide_blaze.png',
    'Oxide Blaze',
    1,
    0.57,
    4
),
(
    34,
    'duel_berettas_shred.png',
    'Shred',
    1,
    0.44,
    5
),
(
    35,
    'dual_berettas_royal_consorts.png',
    'Royal Consorts',
    2,
    3.84,
    5
),
(
    36,
    'five-seven_monkey_business.png',
    'Monkey Business',
    3,
    16.02,
    6
),
(
    37,
    'five-seven_capillary.png',
    'Capillary',
    1,
    0.34,
    6
),
(
    38,
    'glock-18_wasteland_rebel.png',
    'Wasteland Rebel',
    4,
    9.43,
    7
),
(
    39,
    'glock-18_bunsen_burner.png',
    'Bunsen Burner',
    1,
    2.76,
    7
),
(
    40,
    'p2000_ivory.png',
    'Ivory',
    1,
    0.84,
    8
),
(
    41,
    'p2000_gnarled.png',
    'Gnarled',
    1,
    0.28,
    8
),
(
    42,
    'p250_asiimov.png',
    'Asiimov',
    3,
    21.57,
    9
),
(
    43,
    'p250_cassette.png',
    'Cassette',
    1,
    0.24,
    9
),
(
    44,
    'r8_revolver_survivalist.png',
    'Survivalist',
    1,
    0.53,
    10
),
(
    45,
    'r8_revolver_fade.png',
    'Fade',
    4,
    27.01,
    10
),
(
    46,
    'tec-9_bamboozle.png',
    'Bamboozle',
    2,
    1.52,
    11
),
(
    47,
    'tec-9_fubar.png',
    'Fubar',
    1,
    1.27,
    11
),
(
    48,
    'usp-s_kill_confirmed.png',
    'Kill Confirmed',
    4,
    225.04,
    12
),
(
    49,
    'usp-s_cortex.png',
    'Cortex',
    3,
    12.73,
    12
),
(
    50,
    'usp-s_cyrex.png',
    'Cyrex',
    2,
    4.06,
    12
),
(
    51,
    'usp-s_torque.png',
    'Torque',
    1,
    1.89,
    12
),
(
    52,
    'ak-47_neon_revolution.png',
    'Neon Revolution',
    4,
    74.35,
    13
),
(
    53,
    'ak-47_vulcan.png',
    'Vulcan',
    4,
    1020.14,
    13
),
(
    54,
    'ak-47_frontside_misty.png',
    'Frontside Misty',
    3,
    78.83,
    13
),
(
    55,
    'ak-47_redline.png',
    'Redline',
    3,
    93.56,
    13
),
(
    56,
    'ak-47_elite_build.png',
    'Elite Build',
    1,
    6.49,
    13
),
(
    57,
    'aug_chameleon.png',
    'Chameleon',
    4,
    6.6,
    14
),
(
    62,
    'aug_arctic_wolf.png',
    'Arctic Wolf',
    2,
    7,
    14
),
(
    63,
    'aug_plague.png',
    'Plague',
    1,
    1.36,
    14
),
(
    64,
    'awp_containment_breach.png',
    'Containment Breach',
    4,
    578.89,
    15
),
(
    65,
    'awp_hyper_beast.png',
    'Hyper Beast',
    4,
    126.64,
    15
),
(
    66,
    'awp_dragon_lore.png',
    'Dragon Lore',
    4,
    13043.1,
    15
),
(
    67,
    'awp_fever_dream.png',
    'Fever Dream',
    3,
    14.97,
    15
),
(
    68,
    'awp_atheris.png',
    'Atheris',
    2,
    17.24,
    15
),
(
    69,
    'awp_safari_mesh.png',
    'Safari Mesh',
    1,
    3.38,
    15
),
(
    70,
    'famas_roll_cage.png',
    'Roll Cage',
    4,
    18.22,
    16
),
(
    71,
    'famas_survivor_z.png',
    'Survivor Z',
    1,
    0.67,
    16
),
(
    72,
    'famas_mecha_industries.png',
    'Mecha Industries',
    3,
    9.78,
    16
),
(
    73,
    'g3sg1_stinger.png',
    'Stinger',
    2,
    1.57,
    17
),
(
    76,
    'g3sg1_desert_storm.png',
    'Desert Storm',
    1,
    0.14,
    17
),
(
    77,
    'galil_ar_chatterbox.png',
    'Chatterbox',
    4,
    69.51,
    18
),
(
    78,
    'galil_ar_eco.png',
    'Eco',
    3,
    32.45,
    18
),
(
    79,
    'galil_ar_kami.png',
    'Kami',
    1,
    3.44,
    18
),
(
    80,
    'm4a1-s_mecha_industries.png',
    'Mecha Industries',
    4,
    86.6,
    19
),
(
    81,
    'm4a1-s_nightmare.png',
    'Nightmare',
    3,
    51.08,
    19
),
(
    82,
    'm4a1-s_flashback.png',
    'Flashback',
    2,
    3.77,
    19
),
(
    83,
    'm4a4_howl.png',
    'Howl',
    4,
    6521.53,
    20
),
(
    84,
    'm4a4_the_emperor.png',
    'The Emperor',
    4,
    184.77,
    20
),
(
    85,
    'm4a4_desolate_space.png',
    'Desolate Space',
    3,
    32.03,
    20
),
(
    86,
    'm4a4_evil_daimyo.png',
    'Evil Daimyo',
    2,
    5.05,
    20
),
(
    87,
    'm4a4_poly_mag.png',
    'Poly Mag',
    1,
    0.68,
    20
),
(
    88,
    'scar-20_powercore.png',
    'Powercore',
    2,
    2.06,
    21
),
(
    89,
    'scar-20_outbreak.png',
    'Outbreak',
    1,
    0.37,
    21
),
(
    90,
    'sg_553_darkwing.png',
    'Darkwing',
    2,
    2.3,
    22
),
(
    91,
    'sg_553_aerial.png',
    'Aerial',
    1,
    0.34,
    22
),
(
    92,
    'sg_553_army_sheen.png',
    'Army Sheen',
    1,
    0.05,
    22
),
(
    93,
    'ssg_08_blood_in_water.png',
    'Blood in the Water',
    4,
    80.02,
    23
),
(
    94,
    'ssg_08_abyss.png',
    'Abyss',
    1,
    4.01,
    23
),
(
    95,
    'ssg_08_acid_fade.png',
    'Acid Fade',
    1,
    2.4,
    23
),
(
    96,
    'mac-10_disco_tech.png',
    'Disco Tech',
    3,
    17.99,
    24
),
(
    97,
    'mac-10_lapis_gator.png',
    'Lapis Gator',
    1,
    0.91,
    24
),
(
    98,
    'mp5-sd_phosphor.png',
    'Phosphor',
    3,
    11.81,
    25
),
(
    99,
    'mp5-sd_condition_zero.png',
    'Condition Zero',
    1,
    1.43,
    25
),
(
    100,
    'mp7_bloodsport.png',
    'Bloodsport',
    4,
    4.6,
    26
),
(
    101,
    'mp7_powercore.png',
    'Powercore',
    2,
    3.39,
    26
),
(
    102,
    'mp7_cirrus.png',
    'Cirrus',
    1,
    0.81,
    26
),
(
    103,
    'mp9_hypnotic.png',
    'Hypnotic',
    2,
    15,
    27
),
(
    104,
    'mp9_bioleak.png',
    'Bioleak',
    1,
    0.3,
    27
),
(
    105,
    'pp-bizon_runic.png',
    'Runic',
    1,
    0.3,
    28
),
(
    106,
    'pp-bizon_fuel_rod.png',
    'Fuel Rod',
    2,
    3.77,
    28
),
(
    107,
    'p90_asiimov.png',
    'Asiimov',
    4,
    42.19,
    29
),
(
    108,
    'p90_chopper.png',
    'Chopper',
    2,
    2.09,
    29
),
(
    109,
    'p90_grim.png',
    'Grim',
    1,
    0.86,
    29
),
(
    110,
    'ump-45_arctic_wolf.png',
    'Arctic Wolf',
    2,
    1.64,
    30
),
(
    111,
    'ump-45_labyrinth.png',
    'UMP-45 | Labyrinth',
    1,
    0.27,
    30
),
(
    112,
    'mag-7_swag-7.png',
    'SWAG-7',
    2,
    1.96,
    31
),
(
    113,
    'mag-7_popdog.png',
    'Popdog',
    1,
    0.29,
    31
),
(
    114,
    'nova_toy_soldier.png',
    'Toy Soldier',
    2,
    3.98,
    32
),
(
    115,
    'nova_wood_fired.png',
    'Wood Fired',
    1,
    0.27,
    32
),
(
    116,
    'sawed-off_the_kraken.png',
    'The Kraken',
    4,
    8.8,
    33
),
(
    117,
    'sawed-off_yorick.png',
    'Yorick',
    1,
    0.55,
    33
),
(
    118,
    'xm1014_seasons.png',
    'Seasons',
    2,
    2.79,
    34
),
(
    119,
    'xm1014_slipstream.png',
    'Slipstream',
    1,
    0.34,
    34
),
(
    120,
    'm249_spectre.png',
    'Spectre',
    1,
    0.29,
    35
),
(
    121,
    'negev_power_loader.png',
    'Power Loader',
    2,
    5.26,
    36
),
(
    122,
    'negev_man-o\'-WAR.PNG', 'MAN-O\'-war',
    1,
    0.13,
    36
);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `fegyver`
--
ALTER TABLE `FEGYVER` ADD PRIMARY KEY (`FEGYVERID`);

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `FELHASZNALOK` ADD PRIMARY KEY (`USERID`);

--
-- A tábla indexei `inventory`
--
ALTER TABLE `INVENTORY` ADD KEY `FK_USER_ID` (`USERID`), ADD KEY `FK_SKIN_ID` (`SKINID`);

--
-- A tábla indexei `offerek`
--
ALTER TABLE `OFFEREK` ADD PRIMARY KEY (`OFFERID`), ADD KEY `FK_FROMUSER_ID` (`FROMUSERID`), ADD KEY `FK_TOUSER_ID` (`TOUSERID`), ADD KEY `FK_FROMSKIN_ID` (`FROMSKINID`), ADD KEY `FK_TOSKIN_ID` (`TOSKINID`);

--
-- A tábla indexei `ritkasag`
--
ALTER TABLE `RITKASAG` ADD PRIMARY KEY (`RITKASAGID`);

--
-- A tábla indexei `skinek`
--
ALTER TABLE `SKINEK` ADD PRIMARY KEY (`SKINID`), ADD KEY `FK_FEGYVER` (`FEGYVERID`), ADD KEY `FK_RITKASAG` (`RITKASAGID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `fegyver`
--
ALTER TABLE `FEGYVER` MODIFY `FEGYVERID` INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `FELHASZNALOK` MODIFY `USERID` INT(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `ritkasag`

ALTER TABLE `OFFEREK` MODIFY `OFFERID` INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--

ALTER TABLE `RITKASAG` MODIFY `RITKASAGID` INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `skinek`
--
ALTER TABLE `SKINEK` MODIFY `SKINID` INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `inventory`
--
ALTER TABLE `INVENTORY` ADD CONSTRAINT `FK_SKIN_ID` FOREIGN KEY (`SKINID`) REFERENCES `SKINEK` (`SKINID`) ON DELETE CASCADE ON UPDATE CASCADE, ADD CONSTRAINT `FK_USER_ID` FOREIGN KEY (`USERID`) REFERENCES `FELHASZNALOK` (`USERID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `offerek`
--
ALTER TABLE `OFFEREK` ADD CONSTRAINT `FK_FROMSKIN_ID` FOREIGN KEY (`FROMSKINID`) REFERENCES `SKINEK` (`SKINID`) ON DELETE CASCADE ON UPDATE CASCADE, ADD CONSTRAINT `FK_FROMUSER_ID` FOREIGN KEY (`FROMUSERID`) REFERENCES `FELHASZNALOK` (`USERID`) ON DELETE CASCADE ON UPDATE CASCADE, ADD CONSTRAINT `FK_TOSKIN_ID` FOREIGN KEY (`TOSKINID`) REFERENCES `SKINEK` (`SKINID`) ON DELETE CASCADE ON UPDATE CASCADE, ADD CONSTRAINT `FK_TOUSER_ID` FOREIGN KEY (`TOUSERID`) REFERENCES `FELHASZNALOK` (`USERID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `skinek`
--
ALTER TABLE `SKINEK` ADD CONSTRAINT `FK_FEGYVER` FOREIGN KEY (`FEGYVERID`) REFERENCES `FEGYVER` (`FEGYVERID`) ON DELETE CASCADE ON UPDATE CASCADE, ADD CONSTRAINT `FK_RITKASAG` FOREIGN KEY (`RITKASAGID`) REFERENCES `RITKASAG` (`RITKASAGID`) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;