# Исправления: страница редактора статьи и связанные модули

## Критические

1. **Не было маршрутов `edit` и `details`.** В `RouteSegments` добавлены `ARTICLE_DETAILS: ':id'` и
   `ARTICLE_EDIT: ':id/edit'`; в `ARTICLE_ROUTES` подключены `create`, `:id/edit`, `:id` (порядок:
   статический → с параметром). Раньше после сохранения роутер не находил `/articles/{id}` и
   выбрасывал на главную.
2. **Не существовала страница просмотра статьи.** Добавлена `src/pages/article-details-page`
   (`getArticleById` + рендер `app-article-content` со состояниями загрузки/ошибки).
3. **Захардкоженный `authorId`** в `manage-article` (`62bb502e-…`) заменён на реальный профиль из
   `UserApiService.getMyProfile()` (с фолбэком, если профиль не отдался, — тогда `authorId` не
   отправляется).
4. **`tags-input`: плейсхолдер не показывался никогда.** Было
   `[placeholder]="tags.length === 0 ? … : ''"`, где `tags` — сигнал. Исправлено на `tags().length`.

## Значимые

5. **Мёртвые CSS-классы** в `article-form.component.html` (`h2`, `mt-4`, `mt-3`, `fw-bold`,
   `.empty-state`, `.error-text`) — не были определены нигде. Лишние удалены из шаблона;
   `.empty-state` добавлен в SCSS формы; `.error-text` перенесён в `styles` рендерера.
6. **Невалидная разметка `fieldset`**: `<legend>` был вложен в `<div>`. Теперь `legend` — первый
   ребёнок `fieldset`.
7. **Кнопка «Сохранить» блокировалась `form().invalid`**, из-за чего `markAllAsTouched()` в
   `onSubmit` был недостижим. Оставлена блокировка только по `isSubmitting()`.
8. **`patchValue(article)` заливал в форму весь объект статьи**, включая `blocks`, до пересборки
   через `populateArticleBlocks`. Теперь патчатся только скалярные поля и вложенные группы, а
   `blocks` собираются отдельно.
9. **`ArticleNavigationApiService`** переведён на `BaseApiService`, удалён неиспользуемый
   `getNavigationTree()`. Пути: чтение — `articles/navigation`, создание — `navigation/sections` и
   `navigation/categories` (подтверждены бэкендом).

## Мелкие

10. `entities/article/index.ts` — убраны дублирующиеся `export *`, добавлены недостающие публичные
    экспорты.
11. `create-category` — добавлен `ChangeDetectionStrategy.OnPush` (как в `create-section`).
12. `getArticleById`/`updateArticle`/`deleteArticle` — `encodeURIComponent` для идентификатора (слаг
    с пробелами/кириллицей ломал URL).
13. `article-editor-page.component.scss` — локальная `--max-width: 1440px` заменена на токен
    `--container-xxl`.
14. Файл `articles.editor-page.component.ts` переименован в `article-editor-page.component.ts`;
    добавлен `index.ts` для страницы.
15. `manage-article` — навигация через `RouteBuilder`, добавлен `markAllAsTouched()`,
    `readingTimeMinutes` приводится к числу при сборке payload.

## Что нужно доложить вручную

- Шрифты Geist (`.woff2`) — см. `public/fonts/README.md`.
