# react structures

- app 配下は next の app router に必要な最低限のファイルのみ設置
  - 細かい実装は components 配下等から import する

## component design

- component を格納するディレクリは基本的に components/{category}/{ComponentName} とする
  - co-location を基本とする
- 汎用的に使うものは src/components 配下に格納する

### category
- features
  - 機能を持つ component
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
