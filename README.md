silly node addon test/template

uses node-api-module & typescript, geared towards pnpm & clangd

c++ addon in `addon/`, nodejs application in `src/`.

`addon/addon.d.ts` gives types for the addon for use by typescript. *it is manually created/updated*.

`loadModule.ts` is also basically a wrapper, you shouldn't need to touch it except for renaming the export/updating the path if you change the addon name

### what do i do with this

you can run the `dev:cpp` script to build the addon in debug mode. running `dev` then invokes tsx for the main nodejs app.

or, for "release", you can run the `build` script, which invokes `build:cpp` and `build:ts`. the first one does a clean-compile of the addon in release mode, and the second just invokes `tsc`/`tsc-alias` on the nodejs app.

compiling the addon places the output in `build`, compiling the ts places the output in `dist`. consequently, after running the `build` script, you can run the `start` script.
