# common structure

- 原則として co-location とする
- 原則として1ファイル1エクスポート

## ネームケース

- component: UpperCamelCase
- constant: SCREAMING_SNAKE_CASE
- function: camelCase
- schema: UpperCamelCase
- type: UpperCamelCase
- variable: camelCase

## プロダクトコード

```
<root>
  ├ app
  ├ components
  | ├ features
  | ├ forms
  | ├ layouts
  | ├ pages
  | └ ui
  └ shared
    ├ types
    ├ constants
    ├ schemas
    └ utilities
```

```
機能ディレクトリ内
{機能名}
  ├ {機能名}.ts(x)
  ├ {機能名}.test.ts(x)
  ├ {機能名}.stories.tsx
  ├ {機能名}.stories.test.tsx
  ├ useHook.ts(x)
  ├ useHook.test.ts(x)
  ├ modules
  | └ {機能名}
  ├ constants
  ├ styles
  └ types
```
