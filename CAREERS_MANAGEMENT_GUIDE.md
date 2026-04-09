# How to Manage Your Careers Page

## 📝 Current Job Openings

Your careers page currently has **2 open positions**:
1. **Auditing Manager** (Finance) - Min 1 Year Experience
2. **Marketing Executive** (Marketing) - Min 1 Year Experience

## 📝 Updating Job Listings

All job listings are managed in a single, easy-to-edit file:
- **File Location:** `src/data/jobs.ts`

### To Add a New Job:
1. Open `src/data/jobs.ts`
2. Add a new object to the `jobListings` array:

```typescript
{
  title: "Your Job Title",
  department: "Department Name",
  location: "City",
  level: "Experienced (Min X Yr)",
  description: "Brief description of the role...",
  skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
}
```

### To Remove/Stop Hiring for a Position:
Simply delete the job object from the `jobListings` array. For example:
- If you want to remove the "Marketing Executive" position, just delete that entire object.
- The careers page will automatically update!

### Example: How to Stop All Hiring
Replace the entire `jobListings` array with empty brackets:
```typescript
export const jobListings = []
```
The careers page will display "No open positions at the moment" message automatically.

---

## 🖼️ Logo Setup

Your site uses a PNG logo (`logo.png`) instead of the favicon.

### To Set Up Your Logo:
1. **Get your PNG logo file** (the one you provided - NW Ninthway Branding Agency)
2. **Place it in the public folder** at: `public/logo.png`
3. ✅ Done! The logo will appear in:
   - Navbar (top-left corner - clickable to go home)
   - Footer (next to "NinthWay" text)

---

## 📋 Job Application Form Features

When applicants click "Apply Now" on any job:
1. A form modal opens with the job title pre-filled
2. They enter:
   - Full Name (required)
   - Email (required)
   - Phone Number (required)
   - LinkedIn URL (optional)
   - **Portfolio Link (optional)** ← NEW!
   - Cover Letter/Message (optional)
   - Resume File Upload (required - PDF, DOC, DOCX up to 5MB)

3. Form header shows: **"{Job Title} • {Department}"** ← Shows which role they're applying for
4. Application is sent to: `ninthwaybranders@gmail.com`
5. Resume file is attached automatically

---

## 📍 Footer Address & Contact

Your footer now displays:
- **Address:** Grava Business Park, Neopolis, Kokapet, Hyderabad, Telangana 500075
- **Phone:** +91 83096 60814
- **Email:** ninthwaybranders@gmail.com
- **Social Links:** Instagram, LinkedIn, WhatsApp

All editable in `src/components/Footer.tsx`

---& Routing

✅ **Navbar Navigation Works Both Ways:**
- **From Home Page:** Click "Careers" → Goes to `/careers` page
- **From Careers Page:** Click "Home" → Returns to `/` home page
- **Logo Click:** Takes you to home from anywhere

The navbar intelligently handles:
- **Anchor links** (#hero, #about, #services, etc.) → Smooth scroll
- **Route links** (/careers, /) → Page navigation

---

## 🔧 Quick File Reference

| Feature | File | Edit What |
|---------|------|-----------|
| Job Listings | `src/data/jobs.ts` | jobListings array |
| Application Form | `src/components/JobApplicationForm.tsx` | Form fields & email endpoint |
| Navbar Links | `src/components/Navbar.tsx` | Navigation items |
| Careers Page Content | `src/components/Careers.tsx` | Page text & content |
| Navbar Routing | `src/components/ui/tubelight-navbar.tsx` | Link behavior |
| Logo | `public/logo.png` | Replace PNG file |
| Application Email | `src/components/JobApplicationForm.tsx` | formsubmit.co endpoint phone/email |
| Navbar Items | `src/components/Navbar.tsx` | Add/remove nav links |
## 📧 Application Email

**Submissions Sent To:** `ninthwaybranders@gmail.com`

**Email includes:**
- Applicant name, email, phone
- LinkedIn & Portfolio links (if provided)
- Job title & department applied for
- Cover letter message
- Resume file attachment

**To Change Email Address:**
Edit `src/components/JobApplicationForm.tsx` and update:
```typescript
const response = await fetch("https://formsubmit.co/ninthwaybranders@gmail.com", {
```
Replace with your desired email addressnthwaybranders.com", {
```
Replace `careers@ninthwaybranders.com` with your desired email.
