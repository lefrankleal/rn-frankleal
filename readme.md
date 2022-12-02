# Project built by @lefrankleal using React Native
### Project was developed and tested on Android device

## Used engines:
```
yarn@1.22.19
node@6.16.0
```

## Installation
```
$ git clone ${this repo}
$ yarn install
$ react-native run-android or yarn android
```
## Source files tree
```
src
├── App.tsx /* Here is located the routing for the app*/
├── assets
│   ├── fonts /* Required fonts and equivalent for the non-free */
│   │   ├── Inter-Medium.ttf
│   │   ├── Inter-Regular.ttf
│   │   └── Literata-Regular.ttf
│   └── images /* Header images required for UI */
│       ├── background.png
│       └── clouds.png
├── components /* Base components for project */
│   ├── button.tsx
│   ├── index.ts /* Export file for custom components */
│   ├── progress.tsx
│   ├── search.tsx
│   └── text.tsx
├── details.tsx /* Details view used to show a navigation behaviour */
├── home.tsx /* Home UI */
└── mocks.json /* Mocked data to make the project work */
```