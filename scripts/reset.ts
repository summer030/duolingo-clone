import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

import * as schema from '../db/schema';

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log('Resetting database');

    await Promise.all([
      db.delete(schema.courses),
      db.delete(schema.userProgress),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.challenges),
      db.delete(schema.challengeOptions),
      db.delete(schema.challengeProgress),
      db.delete(schema.userSubscription),
    ]);

    console.log('Seeding finished');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to seed the database');
  }
};

main();
