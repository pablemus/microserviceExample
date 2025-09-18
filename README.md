# Microservice Example (TypeScript · Fastify · Prisma)

Pequeño boilerplate para levantar microservicios en Node.js con TypeScript, Fastify y Prisma. La idea es que puedas **clonar, renombrar y producir** un nuevo servicio en minutos, con DX agradable (hot-reload con `tsx`) y acceso a base de datos vía Prisma Client.

## Stack

- **Node.js + TypeScript** — tipado y DX decente
- **Fastify** — servidor web minimal, rápido y con plugins
- **Prisma ORM** — esquema declarativo, migraciones y cliente tipado
- **tsx** — correr TS sin build (hot-reload dev)

---

## Requisitos

- Node.js LTS (≥ 18)
- Un motor de base de datos compatible con Prisma (PostgreSQL, MySQL/MariaDB, SQL Server o SQLite para pruebas)
- `pnpm` o `npm`/`yarn` (usa el que prefieras)

---

## Arranque rápido

1) **Clonar e instalar dependencias**
```bash
git clone https://github.com/pablemus/microserviceExample.git my-new-service
cd my-new-service
# elige tu gestor de paquetes
npm i
# o pnpm i / yarn
```

2) **Configurar variables de entorno**

Crea un archivo `.env` en la raíz:
```dotenv
DATABASE_URL="postgres://user:pass@localhost:5432/mydb"
PORT=3000
SERVICE_NAME="microservice-example"
```

3) **Definir el esquema de datos**
Edita `prisma/schema.prisma` con tus modelos.

4) **Generar Prisma Client y preparar DB**
```bash
npx prisma migrate dev --name init
npx prisma generate
```

5) **Levantar el servicio en dev (hot-reload)**
```bash
npm run dev
```

---

## Scripts útiles (package.json)

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "start": "node dist/server.js",
    "build": "tsc -p tsconfig.json",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:studio": "prisma studio"
  }
}
```

---

## Estructura de proyecto (sugerida)

```
.
├─ prisma/
│  ├─ schema.prisma
│  └─ migrations/
├─ src/
│  ├─ plugins/
│  │  └─ prisma.ts
│  ├─ routes/
│  │  ├─ health.ts
│  │  └─ users.ts
│  ├─ server.ts
│  └─ env.ts
├─ .env
├─ package.json
├─ tsconfig.json
└─ README.md
```
