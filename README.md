# Full Stack AI SAAS with Next.js 13, Clerk, Stripe, App Router, Typescript, Crisp, Shadcn UI, OpenAI API, Replicate API, Tailwind, Prisma, MySQL, Planet Scale, NextAuth 2023

#### https://sushil-ai-companion.vercel.app

### Features:

- I have used Shadcn UI for the AI-Companion web app!
- You will be able to log in using Clerk Authentication!
- Create, Edit, and delete your role model companion chatbot.
- I have used OpenAI and Replicate APIs for creation of chatbots
- Pro membership to access unlimited chat with chatbot
- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Page loading state
- Page empty state
- Server error handling using react-toast
- Stripe checkout subscription
- Stripe webhooks
- MySQL + Prisma + PlanetScale

![Screenshot](demo.png)

![Screenshot](demo1.png)

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/iprime2/AI-Companion
```

### Install packages

```shell
npm install
```

### Setup .env file

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
DATABASE_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
PINECONE_INDEX=
PINECONE_ENVIRONMENT=
PINECONE_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
OPENAI_AI_KEY=
REPLICATE_API_TOKEN=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=
```
 
### Setup Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `lint`          | Check any javascript error               |
| `build`         | To build the webapp                      |
