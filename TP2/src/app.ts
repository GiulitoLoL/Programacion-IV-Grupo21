import express from 'express';

export function makeApp() {
    const app = express();
    app.use(express.json());

    // inyección de dependencias

    // healthcheck simple
    app.get('/health', (_req, res) => res.json({ ok: true }));

    return app;
}