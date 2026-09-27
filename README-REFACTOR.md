# Ngalg — рефакторинг (итог)

Архив содержит ПОЛНОЕ дерево проекта (293 файла) с применёнными правками. Распаковывать поверх корня
репозитория.

## Что изменено

### Стили

- `_reset.scss`: удалён дубль `body.lock-scroll` (было 2 блока -> 1).
- `_tokens.scss`: добавлен токен `--focus-ring` (использовался в `_reset.scss`, но не был объявлен).

### Утилиты

- Новый `src/shared/lib/utils/unique-id.ts` (детерминированные id).
- `input` / `textarea` / `select`: `Math.random()` для id заменён на `uniqueId(...)`.

### Типы (перенос из shared в entities)

- `shared/types/course.types.ts` -> `entities/course/model/course.types.ts` (+ экспорт из
  `@entities/course`).
- `shared/types/navigation-overview.types.ts` ->
  `entities/article-navigation/model/navigation-overview.types.ts` (+ экспорт из
  `@entities/article-navigation`).
- Обновлены все импорты в 11 файлах. Папка `src/shared/types/` удалена.

### API: пути бэкенда отделены от роутера

- Новый `src/shared/api/api-paths.ts` (`ApiPaths`).
- `course-api`, `lesson-api`, `user-api`, `article-api`, `article-navigation-api` переведены с
  `RouteSegments`/`RouteBuilder`/хардкода на `ApiPaths`.
- `routes.config.ts`: удалены неиспользуемые сегменты (`COURSE_CREATE`, `COURSE_EDIT`, `LESSONS`,
  `SECTIONS`, `PROFILES`).

### Обвязка

- `app.config.ts`: добавлены `provideZonelessChangeDetection()`,
  `provideBrowserGlobalErrorListeners()`, `withFetch()`, `withInMemoryScrolling(...)`. (Angular 22,
  zone.js в зависимостях отсутствует и в `angular.json` нет polyfills.)

### Формы статьи: entities -> features

- `entities/article/ui/article-creation/**` -> `features/manage-article/ui/article-creation/**`.
- `entities/article/model/types/{article-form.types,article-form.factory,article-blocks-form.factory}.ts`
  -> `features/manage-article/model/`.
- `entities/article/index.ts` очищен от экспорта форм; `manage-article` импортирует формы локально.

### Исправленные опечатки

- `aritcle-text-block-form` -> `article-text-block-form`
- `widgets/article-navigation-managment` -> `article-navigation-management` (папка, файлы, класс,
  селектор, templateUrl/styleUrl, импорты в `articles-editor-page`)
- `article-block-complexity.ts` -> `article-block-complexity.component.ts`

## Проверки, выполненные при сборке

- Импорты/шаблоны: 0 битых (377 импортов + все templateUrl/styleUrl разрешаются).
- grep по дереву: `aritcle`=0, `managment`=0, `@shared/types`=0, `Math.random` в `shared/ui`=0.

## Что нужно сделать у себя

```
pnpm install
pnpm typecheck
pnpm lint
pnpm build
```

## Честные оговорки

- Сборку (`ng build`) я НЕ прогоняла: в моём окружении нет Node/ng и сети. Проверена разрешимость
  импортов и путей, но НЕ типы и НЕ компиляция.
- Страница `article-details-page` и роут `ARTICLE_DETAILS` СОЗНАТЕЛЬНО оставлены: она реализована и
  рендерит `ArticleComponent`; удаление сломало бы просмотр статей.
- `articles-drawer-sidebar` НЕ трогала: блокировку скролла там делает сам виджет (`DrawerComponent`
  класса `lock-scroll` не ставит), поэтому `effect` нужен.
- `strictTemplates`, `noUnusedLocals`, `exactOptionalPropertyTypes` включены — если после распаковки
  что-то всплывёт, это почти всегда неиспользуемый импорт.
