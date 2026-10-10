# Куда что заливать

```
images/og/              ← 18 файлов превью (новая папка)
index.html              ← заменить
index-kz.html           ← заменить
szhatie.html            ← заменить
skorost.html            ← заменить
sajty.html              ← НОВЫЙ файл
google-ads.html         ← НОВЫЙ файл
olx.html                ← НОВЫЙ файл
uslugi/ (12 файлов)     ← заменить
```

## Какое превью у какой ссылки

| Ссылка | Превью |
|---|---|
| anuken.kz/ | glavnaya.jpg |
| anuken.kz/sajty.html | sajty.jpg |
| anuken.kz/google-ads.html | google-ads.jpg |
| anuken.kz/olx.html | olx.jpg |
| anuken.kz/uslugi/landing.html | landing.jpg |
| anuken.kz/uslugi/multistranichnyj-sajt.html | multistr.jpg |
| anuken.kz/uslugi/mnogostranichnyj-sajt.html | mnogostr.jpg |
| anuken.kz/uslugi/internet-magazin.html | magazin.jpg |
| anuken.kz/uslugi/dizajn-i-analitika.html | dizajn.jpg |
| anuken.kz/uslugi/dorabotka-sajta.html | dorabotka.jpg |
| anuken.kz/uslugi/google-ads-nastrojka.html | ads-nastrojka.jpg |
| anuken.kz/uslugi/zashchita-ot-fejk-klikov.html | zashchita.jpg |
| anuken.kz/uslugi/google-ads-analitika.html | ads-analitika.jpg |
| anuken.kz/uslugi/google-ads-vedenie.html | ads-vedenie.jpg |
| anuken.kz/uslugi/olx-prodvizhenie.html | olx-top.jpg |
| anuken.kz/uslugi/olx-oformlenie.html | olx-oform.jpg |
| anuken.kz/szhatie.html | szhatie.jpg |
| anuken.kz/skorost.html | skorost.jpg |

## Про три новых файла

Мессенджеры не видят якорь после решётки: ссылка `anuken.kz/#google-ads`
для них равна `anuken.kz/`, поэтому своё превью к ней прицепить нельзя.

Поэтому вместо `anuken.kz/#google-ads` рассылай **`anuken.kz/google-ads.html`** —
это короткая страница со своим превью, которая мгновенно открывает нужный раздел.
Для человека разницы нет, для мессенджера есть.

То же самое с `sajty.html` и `olx.html`.

Страницы закрыты от индексации (noindex) и canonical ведёт на главную,
так что в поиске дублей не будет.

## После заливки

Мессенджеры кэшируют превью надолго. Чтобы увидеть новое сразу:

- **Telegram** — напиши боту @WebpageBot и отправь ему ссылку
- **WhatsApp** — кэш сам обновится за несколько часов, вручную не сбросить
- **Facebook** — developers.facebook.com/tools/debug/
