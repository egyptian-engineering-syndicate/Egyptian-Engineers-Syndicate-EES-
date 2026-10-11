# Image credits

- `login-construction.jpg`: photo by Acton Crawford on Unsplash, used under the Unsplash License: https://unsplash.com/photos/A4xwAcZOAyo

## `trips/` — placeholders

Temporary stand-ins for the trip photos that `features/trips/data/trips-page.content.ts`
will stop hardcoding once Directus assets are wired up. All from Wikimedia Commons:

- `trips/hajj-lottery.jpg`: "The Kaaba during Hajj - edited" by Adli Wahid (edited by Basile Morin), CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:The_Kaaba_during_Hajj_-_edited.jpg
- `trips/mecca.jpg`: "Kaaba, Makkah3" by Moataz Egbaria (معتز اغبارية), CC BY-SA 3.0 — https://commons.wikimedia.org/wiki/File:Kaaba,_Makkah3.jpg
- `trips/mecca-haram.jpg`: "Supplicating Pilgrim at Masjid Al Haram. Mecca, Saudi Arabia" by Ali Mansuri, CC BY-SA 2.5 — https://commons.wikimedia.org/wiki/File:Supplicating_Pilgrim_at_Masjid_Al_Haram._Mecca,_Saudi_Arabia.jpg
- `trips/istanbul.jpg`: "20101106 Galata Tower Istanbul Turkey Panorama" by User:Ggia, CC BY-SA 3.0 — https://commons.wikimedia.org/wiki/File:20101106_Galata_Tower_Istanbul_Turkey_Panorama.jpg
- `trips/istanbul-galata.jpg`: "Galata Tower January 2015" by Martin Falbisoner, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Galata_Tower_January_2015.JPG
- `trips/dubai.jpg`: "Dubai Skyline 2016" by Tonenight, CC BY-SA 4.0 — https://commons.wikimedia.org/wiki/File:Dubai_Skyline_2016.jpg
- `trips/hurghada.jpg`: "Hurghada, Qesm Hurghada, Red Sea Governorate, Egypt - panoramio (145)" by Максим Улитин, CC BY 3.0 — https://commons.wikimedia.org/wiki/File:Hurghada,_Qesm_Hurghada,_Red_Sea_Governorate,_Egypt_-_panoramio_(145).jpg
- `trips/luxor.jpg`: "Luxor Temple R04" by Marc Ryckaert, CC BY 3.0 — https://commons.wikimedia.org/wiki/File:Luxor_Temple_R04.jpg
- `trips/tbilisi.jpg`: "20110421 Tbilisi Georgia Panoramic" by User:Ggia, CC BY-SA 3.0 — https://commons.wikimedia.org/wiki/File:20110421_Tbilisi_Georgia_Panoramic.jpg

## `committees/` — placeholders

Temporary stand-ins for the committee photos that
`features/committees/data/*.content.ts` will stop hardcoding once Directus assets
are wired up. All CC0, via Wikimedia Commons' Unsplash imports:

- `committees/committee-building.jpg`: "Squares and lines (Unsplash)" by Joel Filipe, CC0 — https://commons.wikimedia.org/wiki/File:Squares_and_lines_(Unsplash).jpg
- `committees/member-1.jpg`: "Elegant man in the autumn (Unsplash)" by Joshua Reddekopp, CC0 — https://commons.wikimedia.org/wiki/File:Elegant_man_in_the_autumn_(Unsplash).jpg
- `committees/member-2.jpg`: "Man with a white beard and glasses, by Angelina Litvin, 2015-10-05 (Unsplash)" by Angelina Litvin, CC0 — https://commons.wikimedia.org/wiki/File:Man_with_a_white_beard_and_glasses,_by_Angelina_Litvin,_2015-10-05_(Unsplash).jpg

## `about/` — syndicate board

Board portraits under `about/board/` were supplied for the About page
(`features/about`). `about/intro.jpg` and `about/goals.jpg` temporarily reuse
`committees/committee-building.jpg` until Directus assets replace them.

## `clubs/` — placeholders

Temporary stand-ins for club photos in `features/clubs`. They currently reuse
existing trip/construction images until Directus assets replace them:

- `clubs/volleyball.jpg` ← `trips/hurghada.jpg`
- `clubs/golf-carts.jpg` ← `trips/luxor.jpg`
- `clubs/golf.jpg` ← `trips/dubai.jpg`
- `clubs/tennis.jpg` ← `trips/istanbul-galata.jpg`
- `clubs/cultural.jpg` ← `login-construction.jpg`

## Training courses — placeholder

The training feature has no photos of its own yet: every course in
`features/training/data/training-page.content.ts` points at
`login-construction.jpg` above, so the cards and the course hero have something to
show. Replace it with per-course Directus assets — one image per course — when the
CMS wiring lands, and record the new credits here.
