# 1. Áttekintés
A kis projekt ötlete egy React-Node.js alapú webalkalmazás tervezése és fejlesztése, amely a Counter-Strike skinekkel foglalkozik. Az alkalmazás lehetővé teszi a felhasználók számára, hogy regisztrálás után véletlenszerű skint kapjanak, és cseréljenek skineket egymással. Az adatokat statikusan tároljuk az adatbázisban. A skinek érték alapján lesznek besorolva, a felhasználók csak azonos értékű skineket tudnak egymással cserélgeti.
Az egész webalkalmazás React-Node.js és MYSQL segítségével lesz létrehozva.
# 2. Jelenlegi helyzet
Az elmúlt időszakban észrevettük, hogy számos kamu (scam) oldal jelenik meg, amelyek hasonló szolgáltatásokat kínálnak, mint amit mi tervezünk. Ezek az oldalak általában arra összpontosítanak, hogy megtévesszék és átverjék a felhasználókat, gyakran pénzügyi veszteséggel járva.
Ennek fényében kiemelten fontos számunkra, hogy olyan webalkalmazást hozzunk létre, amelyben a felhasználók teljes mértékben megbízhatnak. Ez azt jelenti, hogy minden lépésben az átláthatóság és a biztonság az elsődleges szempont lesz.
# 3. Vágyálom rendszer
Az ideális rendszerben a felhasználók gyorsan és egyszerűen regisztrálhatnak, majd azonnal belemerülhetnek az alkalmazás élményébe. A kezelőfelület intenzív, azonban nem zavaróan zsúfolt, így a felhasználó könnyedén megtalálja a számára lényeges funkciókat.
## Véletlenszerű skin kiosztás: 
Miután a felhasználó sikeresen regisztrált, automatikusan kap egy véletlenszerű skint az adatbázisból, amit a profiljában megtekinthet.
## Skincsere platform: 
A felhasználók képesek lennének listázni a birtokukban lévő skineket, és ajánlatokat tehetnek mások skineire, vagy fogadhatnak ajánlatokat a sajátjaikra
# 4. Funkcionális követelmény
- Felhasználó kezelés
    - Regisztráció/Bejelentkezés
    - Véletlenszerű skineket kap a felhasználó regisztrációkor
        - Adott ritkaságokból adott mennyiséget kap
- Csere felhasználók között
    - A felhasználók csere ajánlatokat tehetnek és fogadhatnak el

# 5. Fogalomtár
## Counter-Strike: 
    - Első nézetű többjátékos online játék, amelyet a Valve fejlesztett és adott ki 2012-ben
## Skin:
    - Fegyverkinézet a játékon belüli megvásárolható fegyverekre.
## Skin érték:
    - A skineknek egy ritkaságuk van, amely meghatározza az értéküket.

