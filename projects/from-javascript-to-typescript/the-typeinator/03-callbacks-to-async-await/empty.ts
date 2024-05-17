// ! Error received while working
// 17-05-2024

// No inputs were found in config file 'f:/practice/typescript/js book/learning-typescript-projects/projects/from-javascript-to-typescript/the-typinator/02-prototypes-to-classes/tsconfig.json'. Specified 'include' paths were '["."]' and 'exclude' paths were '[]'.ts JSON schema for the TypeScript compiler's configuration file

// Solution:
// https://stackoverflow.com/questions/41211566/tsconfig-json-buildno-inputs-were-found-in-config-file

//? TypeScript expects there to be at least one TypeScript file in the folder in order to compile.

//? To fix the error, add an empty typescript file to the typescript scripts folder (the location of your tsconfig file).
