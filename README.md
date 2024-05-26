# Monorepo

Commands for scripts inside "extension-ProtoPI" folder:

```
yarn workspace ProtoPI run vscode:prepublish
yarn workspace ProtoPI run compile  
yarn workspace ProtoPI run watch
yarn workspace ProtoPI run watch:esbuild
yarn workspace ProtoPI run watch:tsc
yarn workspace ProtoPI run package
yarn workspace ProtoPI run compile-tests
yarn workspace ProtoPI run watch-tests
yarn workspace ProtoPI run pretest
yarn workspace ProtoPI run check-types
yarn workspace ProtoPI run lint
yarn workspace ProtoPI run vscode-test
```

Note:  "ProtoPI" is taken from the package.json and NOT the folder name.