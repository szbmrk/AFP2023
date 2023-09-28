# 1. Áttekintés
A kis projekt ötlete egy React-Node.js alapú webalkalmazás tervezése és fejlesztése, amely a Counter-Strike skinekkel foglalkozik. Az alkalmazás lehetővé teszi a felhasználók számára, hogy regisztrálás után véletlenszerű skint kapjanak, és cseréljenek skineket egymással. Az adatokat statikusan tároljuk az adatbázisban. A skinek érték alapján lesznek besorolva, a felhasználók csak azonos értékű skineket tudnak egymással cserélgeti.
Az egész webalkalmazás React-Node.js és MYSQL segítségével lesz létrehozva.
# 2. Jelenlegi helyzet
Az elmúlt időszakban észrevettük, hogy számos kamu (scam) oldal jelenik meg, amelyek hasonló szolgáltatásokat kínálnak, mint amit mi tervezünk. Ezek az oldalak általában arra összpontosítanak, hogy megtévesszék és átverjék a felhasználókat, gyakran pénzügyi veszteséggel járva.
Ennek fényében kiemelten fontos számunkra, hogy olyan webalkalmazást hozzunk létre, amelyben a felhasználók teljes mértékben megbízhatnak. Ez azt jelenti, hogy minden lépésben az átláthatóság és a biztonság az elsődleges szempont lesz.
# 3. Vágyálom rendszer
Az ideális rendszerben a felhasználók gyorsan és egyszerűen regisztrálhatnak, majd azonnal belemerülhetnek az alkalmazás élményébe. A kezelőfelület intenzív, azonban nem zavaróan zsúfolt, így a felhasználó könnyedén megtalálja a számára lényeges funkciókat.
## Véletlenszerű skin kiosztás: 
A "Véletlenszerű skin kiosztás" egy izgalmas funkció, amit a platformunkon kínálunk. Amikor egy felhasználó újonnan csatlakozik és sikeresen befejezi a regisztrációt, azonnal jutalmazzuk az elkötelezettségéért. Automatikusan odaítélünk neki egy véletlenszerű skint az adatbázisunkban található számos lehetőség közül. Ez nem csak egy kellemes meglepetés a felhasználó számára, de egyben remek alkalmat is teremt arra, hogy azonnal belevágjon a platform használatába. A kiosztott skint a felhasználói profilján belül könnyedén megtekintheti, és eldöntheti, hogy megtartja, cseréli vagy ajánlatot tesz másik skinre.
## Skincsere platform: 
Ezen az innovatív platformon a felhasználók nem csak listázhatják és bemutathatják saját skineiket, hanem lehetőségük nyílik arra is, hogy mások által feltöltött skinekre ajánlatot tegyenek. Emellett természetesen fogadhatnak ajánlatokat a saját skineikre, így interaktívan cserélhetnek vagy adhatnak-vesznek a közösségen belül.
# 4. Funkcionális követelmény
- Felhasználó kezelés
    - Regisztráció/Bejelentkezés
    - Véletlenszerű skineket kap a felhasználó regisztrációkor
        - Adott ritkaságokból adott mennyiséget kap
- Csere felhasználók között
    - A felhasználók csere ajánlatokat tehetnek és fogadhatnak el

# 5. Fogalomtár
## Counter-Strike: 
- Első nézetű többjátékos online lövöldözős játék, amelyet a Valve és a Hidden Path Entertainment fejlesztett és adott ki 2012-ben. A játék két csapat, a terroristák és a counter-terroristák közötti összecsapásra koncentrál, különböző küldetéseken keresztül.
## Skin:
- A Counter-Strike: Global Offensive játékon belüli fegyverek és egyéb tárgyak testreszabását lehetővé tevő grafikai bevonatok. Ezek a skinek befolyásolják a fegyverek megjelenését, de nem adnak semmilyen előnyt a játékban. A játékosok megvásárolhatják, elcserélhetik vagy eladhatják ezeket a skineket a Steam Közösségi Piacon vagy más platformokon.
## Skin érték:
- A skinek értéke a ritkaságukon, minőségükön és keresettségükön alapszik. Néhány skin rendkívül ritka és keresett, ami magas piaci értéket képvisel, míg mások kevésbé értékesek. Az értéket a játékosok közötti kereslet-kínálat is befolyásolja, valamint az események, mint például a nagyobb CS:GO versenyek.
# 6. Rendszerre vonatkozó törvények, szabványok, ajánlások
## Törvények
- AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE

- Az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény 4.§ (1) és (2) bekezdései.

## Rendszerszabványok, ajánlások
- Trello
- Discord
- Github
- Visual studio code
- React-Node.js
- XAMPP
- Tetszőleges mock-up programok (képernyő tervhez)

# 8. Riportok

## Riportok
**Q:** Milyen weboldalt képzelt el? 

**A:** CSGO skinekkel foglalkozó oldal lesz. Az oldal funkciói a következők lehetnek:
## Skin Listázás és Csere: 
    A felhasználók képesek listázni és bemutatni saját skineiket, és ajánlatokat tehetnek mások skineire. Másfelől pedig ajánlatokat is fogadhatnak saját skineikre.

**Q:** Az interneten már számos ilyen  létezik. Miért szeretne még egy ilyen oldalt létrehozni? 

**A:** Mert nagyon sok ilyen fajta oldal csak becsap és ellopják a CSGO fiókokat így azt gondoltuk mi csinálunk egy oldalt amin biztonságosan lehet tradelni anélkül hogy valaki meglógna a skinjeinkel/fiókunkkal.

**Q:** Tervez az oldalnak asztali vagy telefonos alkalmazást?

**A:** Nem, hiszen az oldal reszponzív, tehát telefonon és számítógépen is egyszerűen kezelhető.



