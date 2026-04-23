# Notes App

REST API for Notes Management built with Node.js, Express, and MongoDB.

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

## API Endpoints

- POST /api/notes - Create note
- POST /api/notes/bulk - Bulk create
- GET /api/notes - Get all
- GET /api/notes/:id - Get by ID
- PUT /api/notes/:id - Replace
- PATCH /api/notes/:id - Update
- DELETE /api/notes/:id - Delete
- DELETE /api/notes/bulk - Bulk delete
- GET /api/notes/category/:category
- GET /api/notes/status/:isPinned
- GET /api/notes/:id/summary
- GET /api/notes/filter
- GET /api/notes/filter/pinned
- GET /api/notes/filter/category
- GET /api/notes/filter/date-range
- GET /api/notes/paginate
- GET /api/notes/paginate/category/:category
- GET /api/notes/sort
- GET /api/notes/sort/pinned