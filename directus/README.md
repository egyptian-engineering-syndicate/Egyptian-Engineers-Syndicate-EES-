# Directus (CMS) — تشغيل محلي

سيرفر Directus بتاع المشروع بيتشغل بـ Docker Compose: Postgres + Redis + Directus في حاوية واحدة لكل خدمة.

## المتطلبات

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) مثبت وشغال على جهازك.

## خطوات التشغيل

1. من جوه فولدر `directus/` انسخ ملف البيئة:

   ```bash
   cp .env.example .env
   ```

   ملف `.env` جاهز فعلاً بقيم افتراضية شغالة للتطوير المحلي (KEY/SECRET متولدين، أدمن `admin@ees.local` / `change-me-please`). غيّر أي قيمة تحبها، وخصوصاً `ADMIN_PASSWORD`.

2. شغّل الحاويات:

   ```bash
   docker compose up -d
   ```

3. استنى شوية (أول مرة بتاخد وقت أطول عشان يعمل migration للـ database)، وبعدين افتح:

   [http://localhost:8055](http://localhost:8055)

4. سجل دخول بالإيميل والباسورد اللي حطيتهم في `.env` (`ADMIN_EMAIL` / `ADMIN_PASSWORD`).

## أوامر مفيدة

```bash
docker compose up -d       # تشغيل في الخلفية
docker compose down        # إيقاف
docker compose down -v     # إيقاف + مسح البيانات (احذر: بيمسح كل حاجة عملتها في الأدمن)
docker compose logs -f directus   # متابعة اللوج
```

## الخطوة الجاية

بعد ما تتأكد إن directus شغال وعامل فيه الـ collections اللي محتاجها (زي مجموعة فيها صور الحاجات)، هنربط الفرونت (`client/`) بيه: هنضيف `@directus/sdk` وهنعمل client + env variables في `client/lib/`، وهنستخدم رابط `PUBLIC_URL` ده (`http://localhost:8055`) في الفرونت.

ملحوظة: فولدرات `data/`, `uploads/`, `extensions/` بتتعمل تلقائي أول ما تشغل الحاويات، ومتتبعتش على git (متحطوطة في `.gitignore`).
