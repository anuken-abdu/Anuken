# Медиафайлы сайта anuken.kz

Справочник всех картинок, иконок и аудио: точные имена, размеры и вес.
Имена жёстко прописаны в коде — переименовывать нельзя, файл просто не найдётся.
Регистр важен: `01-Himzona.JPG` и `01-himzona.jpg` для хостинга это разные файлы.

Для каждой картинки желательны две версии: `.jpg` (обязательно) и `.webp` (сайт возьмёт его,
если браузер поддерживает — весит в 3–5 раз меньше). Если `.webp` нет, подставится `.jpg`.

Готовить файлы удобно через свой же инструмент: **anuken.kz/szhatie.html**

---

## Структура папок

```
images/
  hero-1.jpg .. hero-4.jpg     фоны первого экрана
  og-banner.jpg                превью ссылки в мессенджерах
  favicon.png                  иконка во вкладке
  ico-szhatie.png              иконка в меню
  ico-skorost.png              иконка в меню
  portfolio/                   28 скриншотов сайтов
  reviews/                     4 скриншота отзывов
audio/                         6 голосовых отзывов
```

---

## 1. Фоны первого экрана

Формат 1600×900 (горизонтальный), JPG + WebP, до 150 КБ.

| Файл | Где используется |
|---|---|
| `images/hero-1.jpg` | Раздел «Сайты» на главной |
| `images/hero-2.jpg` | Раздел «Google Ads» |
| `images/hero-3.jpg` | Раздел «OLX» |
| `images/hero-4.jpg` | Все 12 страниц услуг, «Сжатие фото», «Проверка скорости» |

Есть также вертикальные версии `hero-1-mob.jpg` и `hero-4-mob.jpg` (900×1400) —
сейчас в коде не используются, лежат про запас под мобильную версию фона.

## 2. Служебные

| Файл | Размер | Формат | Вес | Что это |
|---|---|---|---|---|
| `images/og-banner.jpg` | 1200×630 | JPG | до 120 КБ | превью при отправке ссылки в WhatsApp и Telegram |
| `images/favicon.png` | 180×180 | PNG | до 20 КБ | иконка сайта во вкладке браузера |
| `images/ico-szhatie.png` | 96×96 | PNG прозрачный | до 15 КБ | иконка «Сжатие фото» в меню |
| `images/ico-skorost.png` | 96×96 | PNG прозрачный | до 15 КБ | иконка «Проверка скорости» в меню |

Иконки меню одноцветные — сайт перекрашивает их в белый через CSS.
Если иконки цветные, в `assets/style.css` найди `filter:brightness(0) invert(1)` и удали строку.

## 3. Портфолио — 28 файлов

Скриншот главной страницы каждого сайта. Формат **640×400** (16:10), JPG + WebP, до 60 КБ.
Порядок в таблице = порядок карточек на сайте.

| № | Файл | Сайт |
|---|---|---|
| 01 | `images/portfolio/01-himzona.jpg` | хз.kz |
| 02 | `images/portfolio/02-labanalyt.jpg` | labanalyt.kz |
| 03 | `images/portfolio/03-ok-remont.jpg` | ok-remont.kz |
| 04 | `images/portfolio/04-qazautorent.jpg` | qazautorent.kz |
| 05 | `images/portfolio/05-cleaning-almaty.jpg` | cleaning-almaty.kz |
| 06 | `images/portfolio/06-ocean-cleaning.jpg` | ocean-cleaning.kz |
| 07 | `images/portfolio/07-megaperevozki.jpg` | megaperevozki.kz |
| 08 | `images/portfolio/08-arenda-krana.jpg` | arenda-krana.kz |
| 09 | `images/portfolio/09-autokran-almaty.jpg` | autokran-almaty.kz |
| 10 | `images/portfolio/10-diz-astana.jpg` | diz-astana.kz |
| 11 | `images/portfolio/11-dezclub.jpg` | dezclub.kz |
| 12 | `images/portfolio/12-sanitex.jpg` | sanitex.kz |
| 13 | `images/portfolio/13-moskit-setki.jpg` | moskit-setki.kz |
| 14 | `images/portfolio/14-prometall.jpg` | pro-met-all.kz |
| 15 | `images/portfolio/15-astanajas.jpg` | astanajas.kz |
| 16 | `images/portfolio/16-ventasgroup.jpg` | ventasgroup.kz |
| 17 | `images/portfolio/17-kaz-cold.jpg` | kaz-cold.kz |
| 18 | `images/portfolio/18-service-master.jpg` | service-master.kz |
| 19 | `images/portfolio/19-manipuliator.jpg` | manipuliator.kz |
| 20 | `images/portfolio/20-autovishka.jpg` | autovishka.kz |
| 21 | `images/portfolio/21-perevozz.jpg` | perevozz.kz |
| 22 | `images/portfolio/22-astanaevak.jpg` | astanaevak.kz |
| 23 | `images/portfolio/23-medvezhatnik.jpg` | medvezhatnik.vercel.app |
| 24 | `images/portfolio/24-tez-evaku.jpg` | tez-evaku.vercel.app |
| 25 | `images/portfolio/25-1999.jpg` | 1999.kz |
| 26 | `images/portfolio/26-evakuator-aktobe.jpg` | evakuator-aktobe.vercel.app |
| 27 | `images/portfolio/27-manipulator-evakuator.jpg` | manipulator-evakuator.vercel.app |
| 28 | `images/portfolio/28-manipulyator-three.jpg` | manipulyator-three.vercel.app |

Отдельно: `22-astanaevak.jpg` используется дважды — как карточка портфолио
и как демо-картинка в секции «Сборка сайта за 5 дней» на главной.

## 4. Скриншоты отзывов — 4 файла

Скриншоты переписки с клиентами. Формат **600×800** (вертикальный), JPG + WebP, до 80 КБ.
Показываются в разделе **Google Ads → Отзывы**, по нажатию открываются на весь экран.

| № | Файл |
|---|---|
| 1 | `images/reviews/otzyv-01.jpg` |
| 2 | `images/reviews/otzyv-02.jpg` |
| 3 | `images/reviews/otzyv-03.jpg` |
| 4 | `images/reviews/otzyv-04.jpg` |

## 5. Голосовые отзывы — 6 файлов

Формат **MP3**, 64 kbps моно, до 500 КБ. Подписи на сайте — просто «Отзыв 1» … «Отзыв 6».

| Подпись | Файл |
|---|---|
| Отзыв 1 | `audio/otzyv-golos-1.mp3` |
| Отзыв 2 | `audio/otzyv-golos-2.mp3` |
| Отзыв 3 | `audio/otzyv-golos-3.mp3` |
| Отзыв 4 | `audio/otzyv-golos-4.mp3` |
| Отзыв 5 | `audio/otzyv-golos-5.mp3` |
| Отзыв 6 | `audio/otzyv-golos-6.mp3` |

Голосовые из WhatsApp приходят в `.opus` или `.ogg` — их обязательно перевести в `.mp3`,
иначе на iPhone не воспроизведутся.

---

## Сводка по размерам

| Что | Размер | Формат | Макс. вес |
|---|---|---|---|
| Фон первого экрана | 1600×900 | JPG + WebP | 150 КБ |
| Фон для телефона (запас) | 900×1400 | JPG + WebP | 150 КБ |
| Превью ссылки | 1200×630 | JPG | 120 КБ |
| Карточка портфолио | 640×400 | JPG + WebP | 60 КБ |
| Скриншот отзыва | 600×800 | JPG + WebP | 80 КБ |
| Иконка сайта | 180×180 | PNG | 20 КБ |
| Иконка меню | 96×96 | PNG прозрачный | 15 КБ |
| Голосовой отзыв | — | MP3 64 kbps моно | 500 КБ |

**Правило:** ни один файл на сайте не должен весить больше 250 КБ.
Общий вес всех картинок — до 4 МБ. Именно из-за тяжёлых фото сайт грузился долго.

## Если готовишь вручную

```bash
# портфолио
cd images/portfolio
mogrify -resize 640x400^ -gravity center -extent 640x400 -quality 76 -strip *.jpg

# отзывы
cd ../reviews
mogrify -resize 600x800^ -gravity center -extent 600x800 -quality 76 -strip *.jpg

# фоны
cd ..
mogrify -resize 1600x900^ -gravity center -extent 1600x900 -quality 74 -strip hero-*.jpg

# webp-версии для всего
for f in $(find . -name "*.jpg"); do cwebp -q 74 "$f" -o "${f%.jpg}.webp"; done
```

Флаг `-strip` убирает геометки и данные камеры — минус 5–15 КБ на файле бесплатно.
