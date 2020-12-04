# TSCC Template
Since knowing that the Google Closure Compiler exists and how incredibly effective it is compared to other bundling tools, I've wanted to make a setup where I can use it but also not have to make compromises in the way of weird global access syntax or not being able to use TypeScript.  
And since I found [Tsickle](https://github.com/angular/tsickle) (made by Google themselves!), I became even more enthusiastic because it partially fulfills my dream of using TypeScript types to achieve some optimisation.

This template repo is the outcome of me trying to achieve the base such a non-compromise web stack setup. It's quite simple, but hopefully very accessible because of that.  
It uses [TSCC](https://github.com/theseanl/tscc), which wraps Tsickle for some convenience, to indirectly feed the TypeScript you type to the Closure Compiler.

Some benefits of this whole TypeScript => TSCC => Closure Compiler => JS chain:
- Simply get to use the unparallelled bundle size of the Closure Compiler while also being able to type TypeScript :D
- This setup converts TS types to Closure Compiler types (embedded in the JSDocs in the JS), which makes the conversion even more efficient :D
- In order to get the most out of the Closure Compiler, you're going to want to use Advanced Mode, which does dangerous things like renaming all local variables (and nested object properties) to really short names. In order to make this not break references to externally defined variables in your code, you'd need to manually supply an `externals.js` file or use `window['this']['type']['of']['annoying]['object']['property']['access']['syntax']`. TSCC abstracts all this away by just looking at what types you have `declare`d in TypeScript :D

Some more comments:
- I initially tried to get this working with NPM, but for whatever reason that makes the TypeScript compilation inside4 of TSCC fail consistently. This may not be a problem anymore, so feel free to delete `yarn.lock` try to use NPM for this. But I like yarn better anyway so suck it :>
- A `yarn dev` file-watching script is also included for some quick iteration. This watches the `src` directory to compile to ES6 modules in the `dist` directory.
  - In order to use this you must use the `./dist/main.js` `<script>` which is commented out in `index.html`.
  - The `tsc --watch` command also might fail if you're on an older node version, so I recommend just using the LTS version / the one in `.nvmrc`.
  - Then open up `http://localhost:8080` in your browser and you should be good to go!
  - (For the ES6 modules setup to work, you'll need to do your module imports in your `TS` files with `.js`. See [this issue](https://github.com/Microsoft/TypeScript/issues/13422) for more details on the matter)
- See [the TSCC Readme](https://github.com/theseanl/tscc) for more info and specifics on how to e.g. use this setup with importing node modules.
