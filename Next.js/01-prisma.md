# Prisma — ORM for Next.js

> **Reference:** `prisma.io/docs`

---

## What is Prisma?

Prisma is a **TypeScript-first ORM (Object Relational Mapper)** — it sits between a Next.js app and a database, letting you query and mutate data using TypeScript instead of raw SQL.

Instead of writing:
```sql
SELECT * FROM posts WHERE id = 1;
```

With Prisma:
```ts
const post = await prisma.post.findUnique({ where: { id: 1 } });
```

Same result — but fully type-safe, with autocompletion and no SQL strings.

Supports — **PostgreSQL, MySQL, SQLite, MongoDB, CockroachDB, SQL Server**.

---

## How It Fits into This Project

Currently `post/page.tsx` and `post/[id]/page.tsx` fetch data from an external API (JSONPlaceholder). In a real app, that data would live in a database. Prisma is what replaces the `fetch()` call with a direct database query.

**Current approach (external API):**
```ts
// app/post/page.tsx
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
});
const posts: Post[] = await response.json();
```

**With Prisma (own database):**
```ts
// app/post/page.tsx
import { prisma } from "@/lib/prisma";

const posts = await prisma.post.findMany();
```

No fetch, no API, no type casting — Prisma returns typed data directly.

---

## Setup

### 1. Install

```bash
npm install prisma --save-dev
npm install @prisma/client
```

### 2. Initialise

```bash
npx prisma init
```

Creates two things:
- `prisma/schema.prisma` — the schema file where models are defined
- `.env` — with a `DATABASE_URL` placeholder

### 3. Configure the database URL

In `.env`:
```env
# SQLite (easiest for local dev — no separate DB server needed)
DATABASE_URL="file:./dev.db"

# PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

---

## Schema — `prisma/schema.prisma`

The schema defines the database structure — tables, columns, types, relations.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"   // or "postgresql", "mysql", etc.
  url      = env("DATABASE_URL")
}

model Post {
  id     Int    @id @default(autoincrement())
  title  String
  body   String
  userId Int

  author User   @relation(fields: [userId], references: [id])
}

model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  posts Post[]
}
```

- `@id` — primary key
- `@default(autoincrement())` — auto-incrementing integer
- `@unique` — enforces unique constraint
- `@relation` — defines a foreign key relationship between models
- Every model maps to a database table

---

## Migrations

After defining or changing the schema, run a migration to apply changes to the database:

```bash
npx prisma migrate dev --name init
```

- Creates a SQL migration file in `prisma/migrations/`
- Applies it to the database
- Regenerates the Prisma Client with the latest types

Every schema change needs a new migration.

---

## Prisma Client — the query engine

The Prisma Client is the auto-generated TypeScript class used to run queries. It's generated from the schema — so its types always match the database.

### Setting up the client (`lib/prisma.ts`)

In Next.js, the client should be a singleton — otherwise hot reload creates too many connections in development:

```ts
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

Import from here everywhere: `import { prisma } from "@/lib/prisma"`.

---

## Querying

### Find all records
```ts
const posts = await prisma.post.findMany();
```

### Find one by ID
```ts
// replaces the fetch in app/post/[id]/page.tsx
const post = await prisma.post.findUnique({
    where: { id: Number(id) },
});

if (!post) notFound();
```

### Find with filter
```ts
const posts = await prisma.post.findMany({
    where: { userId: 1 },
});
```

### Find with select (only certain fields)
```ts
const posts = await prisma.post.findMany({
    select: { id: true, title: true },
});
```

### Find with relation included
```ts
const posts = await prisma.post.findMany({
    include: { author: true },
});
```

### Limit and sort
```ts
const posts = await prisma.post.findMany({
    take: 5,           // same as .slice(0, 5) in the current project
    orderBy: { id: "desc" },
});
```

---

## Mutating Data

### Create
```ts
const newPost = await prisma.post.create({
    data: {
        title: "My first post",
        body: "Content here.",
        userId: 1,
    },
});
```

### Update
```ts
const updated = await prisma.post.update({
    where: { id: 1 },
    data: { title: "Updated title" },
});
```

### Delete
```ts
await prisma.post.delete({
    where: { id: 1 },
});
```

---

## In Next.js — Server Components & API Routes

Prisma queries run **server-side only** — never in the browser. In Next.js with the App Router, Server Components are async by default, making this clean:

```ts
// app/post/page.tsx — replacing the current fetch
import { prisma } from "@/lib/prisma";

export default async function PostsPage() {
    const posts = await prisma.post.findMany({
        take: 5,
        orderBy: { id: "asc" },
    });

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
```

For mutations (create, update, delete) — use **Server Actions** or **Route Handlers** (`app/api/`), never call Prisma directly from a Client Component.

---

## Prisma Studio

A built-in GUI to browse and edit the database visually:

```bash
npx prisma studio
```

Opens at `http://localhost:5555` — shows all tables, lets you add/edit/delete rows without writing any SQL.

---

## Quick Reference

| Command | What it does |
|---|---|
| `npx prisma init` | Sets up Prisma in the project |
| `npx prisma migrate dev` | Creates and applies a migration |
| `npx prisma generate` | Regenerates the Prisma Client |
| `npx prisma studio` | Opens the visual database browser |
| `npx prisma db push` | Pushes schema to DB without a migration (quick prototyping) |
| `prisma.model.findMany()` | Fetch all records |
| `prisma.model.findUnique()` | Fetch one record by unique field |
| `prisma.model.create()` | Insert a new record |
| `prisma.model.update()` | Update an existing record |
| `prisma.model.delete()` | Delete a record |
