# Idara Al-Khair NGO Website - Complete User Manual 📚

## Table of Contents
1. [Project Overview](#project-overview)
2. [Admin Panel Guide](#admin-panel-guide)
3. [User Features Guide](#user-features-guide)
4. [Technical Features](#technical-features)
5. [Database Schema](#database-schema)
6. [API Endpoints](#api-endpoints)
7. [Deployment Guide](#deployment-guide)
8. [Troubleshooting](#troubleshooting)

---

## Project Overview 🏢

**Idara Al-Khair Welfare Society** ka ye website ek complete NGO management system hai jo Next.js 15, TypeScript, Prisma, aur MySQL use karta hai. Ye website dono admin aur normal users ke liye features provide karta hai.

### Main Features:
- 🏥 **Healthcare Information** - Hospital aur medical services
- 📚 **Education Programs** - Schools aur technical training
- 🍞 **Food Support** - Roti Bank, Ramzan Ration, etc.
- 💼 **Job Portal** - Job posting aur application system
- 💰 **Donation System** - Secure donation processing
- 📞 **Contact Management** - Contact forms aur FAQ
- 👥 **Volunteer System** - Volunteer registration
- 🔧 **Admin Panel** - Complete management system

---

## Admin Panel Guide 🔐

### Admin Login Process
1. **URL**: `/admin`
2. **Default Credentials**:
   - Email: `admin@idaraalkhair.com` (configure in environment)
   - Password: Set in `ADMIN_PASSWORD` environment variable

### Admin Panel Features

#### 1. Contact Messages Management 📧
- **Location**: Admin Panel → Contact Messages tab
- **Features**:
  - View all contact form submissions
  - See sender details (name, email, phone, message)
  - Messages are saved in `.debug-mails` folder
  - Real-time message loading with refresh button

**How to Use**:
1. Login to admin panel
2. Click "Contact Messages" in sidebar
3. View all messages in card format
4. Use "Reload" button to refresh messages

#### 2. Job Management System 💼

##### Adding New Jobs
- **Location**: Admin Panel → Add Job tab
- **Required Fields**:
  - Job Title
  - Description
  - Location
  - Job Type (Full-Time, Part-Time, Internship, Contract)

- **Optional Fields**:
  - Category
  - Department
  - Employment Level
  - Deadline Date
  - Requirements
  - Responsibilities
  - Qualifications

**How to Add a Job**:
1. Go to "Add Job" tab
2. Fill required information
3. Add optional details for better job description
4. Click "Add Job" button
5. Job will be automatically posted and visible to users

##### Managing Job Posts
- **Location**: Admin Panel → Job Post tab
- **Features**:
  - View all posted jobs
  - See job details, location, type
  - Check posting date
  - Refresh jobs list

##### Job Applications Management
- **Location**: Admin Panel → Job Response tab
- **Features**:
  - View all job applications
  - See applicant details
  - Check application date
  - Review cover letters and resumes

#### 3. Admin Panel Navigation
- **Sidebar Menu**:
  - 📧 Contact Messages
  - 💼 Add Job
  - 💼 Job Post
  - 📝 Job Response
  - 🔄 Reload (refresh data)
  - 🚪 Logout

---

## User Features Guide 👥

### 1. Homepage Features 🏠

#### Hero Section
- **3D Animated Background** with floating elements
- **Sliding Content** showing different services
- **Call-to-Action Buttons**:
  - "Donate Now" - Direct to donation page
  - "Learn More" - About page

#### About Section
- **Mission Statement** with animated statistics
- **Service Overview** with icons
- **Impact Numbers**:
  - 12+ Healthcare Centers
  - 150+ Communities Served
  - 25+ Awards Received
  - 8+ Innovation Projects

#### Additional Sections
- **Image Carousel** - Organization photos
- **Statistics Section** - Key metrics
- **Project Cards** - Featured programs
- **Donors Carousel** - Partner organizations
- **Testimonials** - Success stories
- **Call to Action** - Contact information

### 2. Job Portal System 💼

#### For Job Seekers
1. **Browse Jobs**:
   - Visit `/jobs` page
   - View all available positions
   - See job details, location, type
   - Check posting dates

2. **Apply for Jobs**:
   - Click "View details" on any job
   - Read complete job description
   - Click "Apply Now" button
   - Fill application form:
     - Personal Information (name, email, phone, city)
     - Resume Upload (PDF/DOC/DOCX)
     - Experience Details
     - Education Information
     - Cover Letter
   - Submit application

#### Job Application Process
1. **File Upload**: Resume files are uploaded to server
2. **Form Validation**: All required fields must be filled
3. **Application Storage**: Data saved to database
4. **Admin Notification**: Admin can view applications in admin panel

### 3. Contact System 📞

#### Contact Form
- **Location**: `/contact` page
- **Fields**:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (optional)
  - Preferred Date (optional)
  - Message (required)

#### Contact Information Display
- **Head Office**: Sector 5-J, New Karachi Town, Karachi
- **Phone**: +92 300 211 2609
- **Email**: info@idaraalkhair.com
- **Established**: Since 1987

#### FAQ System
- **Interactive FAQ** with pre-defined questions
- **AI-like Responses** for common queries
- **Question History** - Users can ask follow-up questions
- **Topics Covered**:
  - Donation methods
  - Service areas
  - Volunteer opportunities
  - Tax benefits
  - Emergency contacts
  - Organization history

### 4. Donation System 💰

#### Donation Page Features
- **Location**: `/donate` page
- **Two Types**:
  - One-Time Donation
  - Monthly Giving

#### One-Time Donation
1. **Program Selection**:
   - Education Program
   - Healthcare Services
   - Food Support
   - General Fund

2. **Amount Selection**:
   - Preset amounts: 1,000, 2,500, 5,000, 10,000, 25,000, 50,000 PKR
   - Custom amount option (minimum 500 PKR)

3. **Payment Process**:
   - Secure payment gateway integration
   - Tax receipt generation
   - Impact tracking

#### Monthly Giving Program
- **Child Sponsorship**: 2,000 PKR per month per child
- **Flexible Amounts**: 500, 1,000, 2,500, 5,000 PKR/month
- **Custom Monthly Amounts**
- **Cancellation**: Easy cancellation process

#### Donation Information
- **Bank Details**:
  - Meezan Bank: PK85MEZN0001330101018353
  - MCB Bank: PK87MUCB0005501010008429
- **Account Name**: Idara Al-Khair Welfare Society

### 5. Project Pages 📋

#### Available Project Categories
1. **Education**:
   - Al-Khair College
   - Campuses
   - Technical Programs

2. **Healthcare**:
   - Al-Khair Hospital
   - Medical Services

3. **Food Support**:
   - Poor Villages
   - Ramzan Ration
   - Roti Bank

4. **Disaster Relief**:
   - Emergency Response
   - Relief Programs

5. **Technical Training**:
   - HVAC Program
   - Vocational Training

### 6. Volunteer System 👥

#### Volunteer Page
- **Location**: `/volunteers` page
- **Features**:
  - Volunteer registration form
  - Available opportunities
  - Application process
  - Training information

---

## Technical Features ⚙️

### Frontend Technologies
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D graphics
- **Radix UI** - Component library

### Backend Technologies
- **Next.js API Routes** - Server-side logic
- **Prisma ORM** - Database management
- **MySQL** - Database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **Resend** - Email service

### Key Features
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags and structured data
- **File Upload** - Resume and document handling
- **Email Integration** - Contact form and notifications
- **Authentication** - Secure admin login
- **Database Management** - Prisma migrations
- **Error Handling** - Comprehensive error management

---

## Database Schema 🗄️

### Tables Structure

#### Users Table
```sql
- id (Primary Key)
- email (Unique)
- name
- passwordHash
- role (ADMIN/USER)
- createdAt
- updatedAt
```

#### JobPost Table
```sql
- id (Primary Key)
- title
- description
- location
- jobType (FULL_TIME/PART_TIME/INTERNSHIP/CONTRACT)
- status (OPEN/CLOSED)
- createdById (Foreign Key to Users)
- category (Optional)
- department (Optional)
- employmentLevel (Optional)
- deadlineAt (Optional)
- requirements (Optional)
- responsibilities (Optional)
- qualifications (Optional)
- createdAt
- updatedAt
```

#### JobApplication Table
```sql
- id (Primary Key)
- applicantName
- applicantEmail
- applicantPhone (Optional)
- coverLetter (Optional)
- resumeUrl (Optional)
- yearsOfExperience (Optional)
- highestEducation (Optional)
- city (Optional)
- jobId (Foreign Key to JobPost)
- appliedById (Foreign Key to Users, Optional)
- createdAt
```

---

## API Endpoints 🔌

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout

### Jobs
- `GET /api/jobs` - Get all open jobs
- `POST /api/jobs` - Create new job (Admin only)
- `POST /api/jobs/[id]/apply` - Apply for job

### Contact
- `POST /api/contact` - Submit contact form

### Admin
- `GET /api/admin/messages` - Get contact messages (Admin only)
- `GET /api/admin/job-applications` - Get job applications (Admin only)

### File Upload
- `POST /api/uploads` - Upload resume files

---

## Deployment Guide 🚀

### Environment Variables Required
```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/database_name"

# Admin Authentication
ADMIN_PASSWORD="your_secure_password"

# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your_email@gmail.com"
SMTP_PASS="your_app_password"
SMTP_SECURE="false"

# Resend API (Optional)
RESEND_API_KEY="your_resend_api_key"
SENDER_EMAIL="noreply@yourdomain.com"

# Contact Email
CONTACT_TO_EMAIL="info@idaraalkhair.com"

# Site Configuration
NEXT_PUBLIC_SITE_DOMAIN="yourdomain.com"
```

### Deployment Steps
1. **Database Setup**:
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

2. **Build Application**:
   ```bash
   npm run build
   ```

3. **Start Production Server**:
   ```bash
   npm start
   ```

### Prerequisites
- Node.js 18+
- MySQL Database
- SMTP Email Service
- Domain Name (for production)

---

## Troubleshooting 🔧

### Common Issues

#### 1. Admin Login Not Working
- **Check**: Environment variables are set correctly
- **Verify**: Database connection is working
- **Ensure**: Admin user exists in database

#### 2. Contact Form Not Sending Emails
- **Check**: SMTP credentials are correct
- **Verify**: Email service is working
- **Check**: Messages are saved in `.debug-mails` folder

#### 3. File Upload Issues
- **Check**: File size limits
- **Verify**: File type restrictions (PDF/DOC/DOCX)
- **Ensure**: Upload directory has write permissions

#### 4. Database Connection Issues
- **Check**: DATABASE_URL is correct
- **Verify**: MySQL server is running
- **Run**: `npx prisma migrate dev` to sync schema

#### 5. Job Applications Not Showing
- **Check**: Admin is logged in
- **Verify**: Database has job applications
- **Refresh**: Admin panel data

### Performance Optimization
- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Dynamic imports for heavy components
- **Caching**: Implement proper caching strategies
- **Database Indexing**: Add indexes for frequently queried fields

---

## Support & Maintenance 📞

### Regular Maintenance Tasks
1. **Database Backups** - Weekly automated backups
2. **Security Updates** - Keep dependencies updated
3. **Performance Monitoring** - Monitor site speed
4. **Content Updates** - Regular content refresh
5. **User Feedback** - Monitor contact form submissions

### Contact Information
- **Technical Support**: admin@idaraalkhair.com
- **General Inquiries**: info@idaraalkhair.com
- **Phone**: +92 300 211 2609

---

## Conclusion 🎯

Ye website ek complete NGO management system hai jo modern web technologies use karta hai. Admin panel se aap easily jobs post kar sakte hain, contact messages manage kar sakte hain, aur job applications review kar sakte hain. Users ko job search, application, donation, aur contact ka complete facility milta hai.

**Key Benefits**:
- ✅ Complete admin control
- ✅ User-friendly interface
- ✅ Mobile responsive design
- ✅ Secure authentication
- ✅ File upload support
- ✅ Email integration
- ✅ Database management
- ✅ Modern UI/UX

---

*Made with ❤️ for Idara Al-Khair Welfare Society*
*Last Updated: January 2025*
