# Notes Management REST API

A modern REST API for managing notes built with Node.js, Express, and MongoDB.

## Features

- Complete CRUD Operations
- Route Parameters
- Query Parameters
- Pagination
- Sorting

## Installation

```bash
npm install
```

## Running

```bash
npm run dev
```

## API Endpoints

### CRUD
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/notes | Create note |
| POST | /api/notes/bulk | Bulk create |
| GET | /api/notes | Get all |
| GET | /api/notes/:id | Get by ID |
| PUT | /api/notes/:id | Replace |
| PATCH | /api/notes/:id | Update |
| DELETE | /api/notes/:id | Delete |
| DELETE | /api/notes/bulk | Bulk delete |

### Route Parameters
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes/category/:category | By category |
| GET | /api/notes/status/:isPinned | By status |
| GET | /api/notes/:id/summary | Note summary |

### Query Parameters
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes/filter | Filter |
| GET | /api/notes/filter/pinned | Pinned |
| GET | /api/notes/filter/category | By category |
| GET | /api/notes/filter/date-range | By date |
| GET | /api/notes/paginate | Paginate |
| GET | /api/notes/paginate/category/:category | Paginate by category |
| GET | /api/notes/sort | Sort |
| GET | /api/notes/sort/pinned | Sort pinned |

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Dotenv