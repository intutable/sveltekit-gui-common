# Common Svelte GUI Components

This is a library for common GUI Svelte components used in the [xTable][xTable] project.  
The library allows sharing GUI components between multiple packages without code duplication.

## 🔧 Project Setup
### Main Setup

1. Clone the repository: `git clone https://gitlab.com/intutable/gui-svelte/common-gui.git`
2. Change directory:`cd common-gui`
3. Install dependencies: `npm install`

## 🏃 Usage

Install the `@intutable/common-gui` package with the following command:

```
npm install @intutable/common-gui
```

If you include this repository locally in your main project for testing, run the following command to build the Svelte package:

```
npm run build
```

## 👥 Contributing
This project adheres to the [xTable development guidelines][development-guidelines]. If you want to add or change code, the basic procedure is this:

1. Open an issue describing what you want to do (e.g. `fix: don't crash on negative integer input`).
2. Create a feature branch (e.g. `fix/dont-crash-on-negative-integer-input`) for the issue.
3. Open a merge request for the feature branch and mark it as draft.
4. As soon as you're done, mark the merge request as ready.
5. A reviewer will approve the merge request (or ask for changes).
6. Finally, the merge request is merged into `develop`.

### New Components and Styles
If you want to create new common components, just create a new directory under `src/lib/` and place your Svelte components there. You also have to export the components in the `index.ts`.  
If you want to add new common styles to the project, add them under `src/lib/style`.

    common-gui
    ├── src
    │   ├── lib
    │   │   ├── yourCommonComponentDirectory
    │   │   │    ├── yourCommonComponent.svelte
    │   │   │    ├── ...
    │   │   ├── ...
    │   │   ├── style
    │   │   │    ├── yourCommonStyle.sass
    │   │   │    ├── ...
    │   │   ├── index.ts
    │   ├── ...
    ├── ...

To use the common components in other projects, you have to import the components like `import { YourCommonComponent } from "@intutable/common-gui"`.  
To use the common styles in other projects, import the stylesheet like `@use "../node_modules/@intutable/common-gui/dist/style/yourCommonStyle"`.

## 🏁 Release strategy
This project uses [Semantic Versioning][semver]. Releases are available in the [xTable Package Registry][common-gui-packages] and created automatically from the `main` branch.

To release a version, first open a MR from a feature branch to `develop` that increases the version number and have it approved and merged. Then, open a MR from `develop` to `main` and have it approved and merged by one of the xTable administrators.

## ⚖️ License
This plugin is licensed under the [Apache License, Version 2.0][apache2].

[xTable]: https://gitlab.com/intutable
[development-guidelines]: https://intutable.gitlab.io/intutable/contributing/
[semver]: https://semver.org
[common-gui-packages]: https://gitlab.com/groups/intutable/-/packages?type=&orderBy=name&sort=desc&search[]=%40intutable%2Fcommon-gui&search[]=
[apache2]: https://www.apache.org/licenses/LICENSE-2.0
