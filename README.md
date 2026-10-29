# Veyora-resource-sharing
Veyora — A trusted platform for sharing underused resources, spaces and equipment.

## Frontend

The Next.js frontend is in `Frontend/`. With Node.js installed, run:

```powershell
cd Frontend
npm install
npm run dev
```

Open `http://localhost:3000`. To verify a production build, run `npm run typecheck`
and `npm run build`.

## Backend

The Spring Boot API is in `Backend/`. It requires Java 21 or newer and PostgreSQL.
Set `DATABASE_URL`, `DATABASE_USERNAME`, and `DATABASE_PASSWORD` for your local
database, then run:

```powershell
cd Backend
.\mvnw.cmd spring-boot:run
```

The API is available at `http://localhost:8080/api/resources`. Backend tests use
an in-memory H2 database and can be run with `.\mvnw.cmd test`.
