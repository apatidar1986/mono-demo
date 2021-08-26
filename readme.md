## install

`yarn install`

## start admin
`yarn run start:admin`

## start app

`yarn run start:app`

## 自动选择发布版本

`lerna version --conventional-commits`

使用--conventional-commits 参数会自动的根据conventional commit规范和git commit message记录帮忙确定更新的版本号。

## 手动选择发布版本

`lerna version`

## 发布

`lerna publish from-git`


## 添加conventional-commit支持

lerna的version_bump和changelog生成都依赖于conventional-commit，因此需要保证commit-msg符合规范。
```
yarn add -W -D @commitlint/{config-conventional,cli}
yarn add husky --dev
yarn husky install
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

```