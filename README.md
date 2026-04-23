# Notes Management REST API

A modern REST API for managing notes built with Node.js, Express, and MongoDB.

## Features

- Complete CRUD Operations (Create, Read, Update, Delete)
- Route Parameters (/category/:category, /status/:isPinned)
- Query Parameters (filter, pagination, sorting)
- Pagination support
- Sorting support

## Installation

```bash
npm install
```

## Running

```bash
npm run dev
```

Server runs on http://localhost:5000

## API Endpoints

### CRUD Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/notes | Create note |
| POST | /api/notes/bulk | Bulk create |
| GET | /api/notes | Get all notes |
| GET | /api/notes/:id | Get by ID |
| PUT | /api/notes/:id | Replace note |
| PATCH | /api/notes/:id | Update note |
| DELETE | /api/notes/:id | Delete note |
| DELETE | /api/notes/bulk | Bulk delete |

### Route Parameters
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes/category/:category | Notes by category |
| GET | /api/notes/status/:isPinned | Notes by pinned status |
| GET | /api/notes/:id/summary | Note summary |

### Query Parameters
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes/filter | Filter notes |
| GET | /api/notes/filter/pinned | Get pinned notes |
| GET | /api/notes/filter/category?name= | Filter by category |
| GET | /api/notes/filter/date-range?from=&to= | Filter by date |

### Pagination
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes/paginate | Paginate notes |
| GET | /api/notes/paginate/category/:category | Paginate by category |

### Sorting
| Method |_endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes/sort | Sort notes |
| GET | /api/notes/sort/pinned | Sort pinned notes |

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Dotenv

## Example Request

```json
{
  "title": "Team standup agenda",
  "content": "Discuss sprint blockers",
  "category": "work",
  "isPinned": true
}
```