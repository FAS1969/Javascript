import { PGlite } from 'https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js';

(async () => {
  const db = new PGlite();
  const msg = await db.query("select 'Hello world' as message;");
	console.log(msg);
})();

const db1 = new PGlite('idb://my-pgdata');
