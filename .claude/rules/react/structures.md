# react structures

- app 配下は next の app router に必要な最低限のファイルのみ設置
  - page/layout の実装本体は components/pages 配下に置き、app 配下は import して re-export するだけにする
  - 例: `src/app/page.tsx` は `export { Home as default } from "@/components/pages/Home/Home"` のみ

## component design

- component は例外なく components/{category}/{ComponentName} 配下に置く(category 省略不可)
  - co-location を基本とする
  - 小さい component や1回しか使われない component でも category は省略しない
- 汎用的に使うものは src/components 配下に格納する

### props の型

- component を定義しているファイル内で定義する type alias は `Props`
- 別ファイルで定義して import する必要がある場合は `{ComponentName}Props`

### category

component を置く前に、まずこの5つのどれに当てはまるかを決めてから配置する。

- features
  - 機能を持つ component(state や副作用を持つもの)
- forms
  - form parts
- layouts
  - css 及び slot だけで構成される
- pages
  - src/components/pages のみ存在し得る
  - src/app 配下から import される
- ui
  - 機能は持たない
  - html, css のみ
