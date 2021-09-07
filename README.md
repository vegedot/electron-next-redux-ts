# electron-next-redux-ts

A boilerplate for Electron, Next and Redux with Typescript projects.

## Npm scripts

- `clean` - clean build files
- `dev` - run `dev:electron` and `dev:main`
- `dev:electron` - start electron
- `dev:main` - build main process in watch mode
- `build` - run `build:main` and `build:renderer`
- `build:main` - build main process
- `build:renderer` - build renderer (next's build and export)
- `package` - build packaging app with electron-builder
- `unpackage` - build unpackaging app with electron-builder

## Directory structure

```
project/
 ├─dist/
 ├─out/
 └─src/
    ├─main/
    │ └─bridges/
    └─renderer/
      ├─components/
      ├─interfaces/
      └─pages/
```
