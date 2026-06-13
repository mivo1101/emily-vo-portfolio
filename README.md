# Emily Vo Portfolio

Personal portfolio for Mi (Emily) Vo — IT postgraduate, career switcher, and former marketing professional.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Roboto + Plus Jakarta Sans

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `/` — Single-page portfolio (Hero, About, Skills, Projects, Journey, Beyond, Contact)

Content lives in `src/data/`:

- `site.ts` — Site copy, contact links, about text
- `portfolio-work.ts` — Project cards and external links
- `experience.ts` — Journey timeline
- `beyond-gallery.ts` — Beyond the Screen photo grid
- `skills.ts` — Skills categories
- `hero-images.ts` — Hero gallery images

## Assets to update

- Add your CV as `public/cv.pdf` (powers the Download CV button)
- Update contact links in `src/data/site.ts` if needed
- Add or swap images under `public/images/`

## Deploy

Deploy to [Vercel](https://vercel.com) or Netlify.
