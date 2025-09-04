# Health App - Frontend Test

A React-based health care web application built as a frontend recruitment test.

## Features

- **Dashboard (Top Page)**: Achievement tracking, body fat charts, exercise graphs, meal history
- **My Record**: Personal health records with body, exercise, and diary tracking
- **Column**: Health articles and recommendations

## Technical Requirements

- React >=16.8.0
- Node.js >=18.0.0
- npm >=8.0.0

## Installation

```bash
npm install
```

## Development

```bash
npm start
```

Runs the app in development mode on [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Navigation header
│   ├── Card/           # Generic card component
│   └── Chart/          # Chart components
├── pages/              # Page components
│   ├── TopPage/        # Dashboard page
│   ├── MyRecord/       # Records page
│   └── Column/         # Articles page
├── services/           # API services
├── hooks/              # Custom React hooks
└── App.js              # Main app component
```

## API Integration

The app is structured to connect to a backend API server. API endpoints are configured in `src/services/api.js` and can be customized via environment variables.

## Design

Based on Figma design specifications with responsive layout supporting desktop, tablet, and mobile devices.

## Evaluation Criteria

- **Fidelity**: Design reproduction accuracy
- **Clarity**: Clean code and documentation
- **Architecture**: Separation of concerns between data and UI
- **Code Quality**: Maintainable, readable code following best practices
