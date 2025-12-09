import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.cjs.js',
                format: 'cjs',
                sourcemap: false,
                exports: 'named'
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                sourcemap: false
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ 
                tsconfig: './tsconfig.json',
                compilerOptions: {
                    outDir: './dist',
                    declaration: true,
                    declarationDir: './dist/types',
                    sourceMap: false
                }
            })
        ],
        external: ['react', 'react-dom', 'react/jsx-runtime']
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.css$/]
    }
];