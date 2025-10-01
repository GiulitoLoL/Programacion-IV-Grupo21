import { makeApp } from './app.js';

const PORT = process.env.PORT ?? 3000;
makeApp().listen(PORT, () => {
    console.log(`API listening on :${PORT}`);
});