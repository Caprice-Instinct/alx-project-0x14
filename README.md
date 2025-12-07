This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## API Overview

The MoviesDatabase API provides access to a comprehensive collection of movie data including details about films, cast, crew, ratings, and reviews. It enables developers to search for movies, retrieve detailed information, discover trending content, and access metadata such as genres, release dates, and popularity metrics.

## Version

API Version: 3

## Available Endpoints

- **/movie/{movie_id}** - Retrieve detailed information about a specific movie by its ID
- **/movie/popular** - Get a list of currently popular movies
- **/movie/top_rated** - Fetch top-rated movies based on user ratings
- **/search/movie** - Search for movies by title or keywords
- **/genre/movie/list** - Get the list of official movie genres
- **/movie/{movie_id}/credits** - Retrieve cast and crew information for a specific movie
- **/discover/movie** - Discover movies based on various filters and sorting options

## Request and Response Format

**Request Structure:**
```
GET https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY&language=en-US
```

**Response Example:**
```json
{
  "id": 550,
  "title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman...",
  "release_date": "1999-10-15",
  "vote_average": 8.4,
  "vote_count": 26280,
  "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  "genres": [
    {"id": 18, "name": "Drama"}
  ]
}
```

## Authentication

Authentication is required for all API requests using an API key:

1. Register for an API key at [The Movie Database](https://www.themoviedb.org/settings/api)
2. Include the API key in every request as a query parameter:
   ```
   ?api_key=YOUR_API_KEY
   ```
3. Alternatively, use Bearer token authentication by including in headers:
   ```
   Authorization: Bearer YOUR_ACCESS_TOKEN
   ```

## Error Handling

**Common Error Responses:**

- **401 Unauthorized** - Invalid or missing API key
  ```json
  {"status_code": 7, "status_message": "Invalid API key"}
  ```

- **404 Not Found** - Resource does not exist
  ```json
  {"status_code": 34, "status_message": "The resource you requested could not be found"}
  ```

- **429 Too Many Requests** - Rate limit exceeded
  ```json
  {"status_code": 25, "status_message": "Your request count is over the allowed limit"}
  ```

**Handling in Code:**
```typescript
try {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message);
  }
  return await response.json();
} catch (error) {
  console.error('API Error:', error);
}
```

## Usage Limits and Best Practices

**Rate Limits:**
- 40 requests per 10 seconds per IP address
- Exceeding limits results in 429 error responses

**Best Practices:**
- Cache responses to minimize API calls
- Use pagination parameters (page, limit) for large datasets
- Implement exponential backoff for retry logic
- Store API keys in environment variables, never in code
- Use specific language parameters to reduce response size
- Leverage the discover endpoint with filters instead of fetching all data
