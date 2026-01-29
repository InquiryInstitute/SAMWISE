# SAMWISE App

The SAMWISE application running at `sam.inquiry.institute`.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── src/
│   ├── components/     # React components (Drawer, Chat, etc.)
│   ├── lib/           # Utilities and helpers
│   └── styles/        # Global styles
├── public/            # Static assets
├── app/               # Next.js app directory (pages)
└── api/               # API routes
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=https://sam.inquiry.institute
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```
