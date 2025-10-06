// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'jsdom', 
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], 
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        // Esto es necesario para manejar archivos CSS o imágenes en los tests de React
        '^.+\\.(css|less|scss|sass|jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};

export default config;