Admin access and viewing contact messages

- Admin page: /admin
- Simple password protection: set environment variable ADMIN_PASSWORD. Default (development) password: admin123
- The contact form API saves every submission into `.debug-mails/contact-<timestamp>.json` for audit and to ensure messages are not lost.
- The admin UI calls `/api/admin/messages` with the password sent in `x-admin-password` header to retrieve saved messages.

Notes:
- This is a lightweight admin implementation for local/dev use. For production, replace the single-password mechanism with a proper auth system (OAuth, NextAuth, or server-side sessions) and secure storage (database).
- To test locally, submit the contact form; check the `.debug-mails` folder for saved JSON files. Then visit /admin and login with your ADMIN_PASSWORD.
