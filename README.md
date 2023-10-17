This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Tech-Store

## tabelas

category

id -PK
name
slug
image url

product

id - PK
category_id - FK
name
slug
image urls
description
base price(500)
discount percentage
total price(synamic)

## material e tecnologias

https://stripe.com/br - finalização de compras
https://next-auth.js.org/ - authentication users
https://authjs.dev/reference/adapter/prisma
https://vercel.com/guides/nextjs-prisma-postgres
https://supabase.com/ - para hospedar o banco de dados


## inicializadores
npx create-next-app@latest .
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql

npm install -D prettier prettier-plugin-tailwindcss -> plugin
npx prisma migrate dev --name init

https://ui.shadcn.com/docs => libe de componentes

npx shadcn-ui@latest init

https://lucide.dev/guide/packages/lucide-react => icones
npm install @prisma/client @auth/prisma-adapter
npm install next-auth

