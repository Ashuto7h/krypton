/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    modulePathIgnorePatterns: ['__tests__/test_util.tsx', 'src'],
    setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
    transform: {
        '^.+\\.svg$': '<rootDir>/.jest/svgTransformer.js',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/.jest/fileTransformer.js'
    }
};
