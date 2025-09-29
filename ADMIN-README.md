Admin access and viewing contact messages (DB-backed auth)

- Admin page: /admin
- Admin logs in using email/password via `/api/auth/login`. A secure HTTP-only cookie is set.
- Messages endpoint `/api/admin/messages` now requires a valid admin session (no header password).
- Contact messages are still saved to `.debug-mails/contact-<timestamp>.json`.

Local setup

- Create `.env` with `DATABASE_URL`, `JWT_SECRET`, and optionally `ADMIN_EMAIL`, `ADMIN_PASSWORD` for seeding.
- Run:
  - `npx prisma migrate dev`
  - `npx prisma generate`
  - `npm run seed` (or `pnpm seed`) to create an admin user

Jobs API

- Public list: `GET /api/jobs`
- Admin create: `POST /api/jobs` with `{ title, description, location, jobType }` where `jobType` in `FULL_TIME|PART_TIME|INTERNSHIP|CONTRACT`
- Apply to job: `POST /api/jobs/[id]/apply` with `{ applicantName, applicantEmail, applicantPhone?, coverLetter?, resumeUrl? }`
- Admin view applications: `GET /api/admin/job-applications`
