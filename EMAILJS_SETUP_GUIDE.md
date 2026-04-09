# EmailJS Setup Guide

## Why EmailJS?
Your forms were using FormSubmit.co which was unreliable. **EmailJS** is a better alternative that:
- Works directly from your React app (no backend needed)
- Free tier: 200 emails/month (upgrade anytime)
- More reliable delivery
- Professional email templates

---

## Setup Steps (5 minutes)

### Step 1: Sign Up
1. Go to [emailjs.com](https://www.emailjs.com)
2. Click "Sign Up Free"
3. Create account using email

### Step 2: Get Your Service ID
1. In EmailJS dashboard, go to **Email Services** (left sidebar)
2. Click **"Add Service"**
3. Choose **Gmail** (or your email provider)
4. Follow the steps to connect
5. Copy your **Service ID** (looks like: `service_xxxxxx`)

### Step 3: Create Email Templates
Create **2 templates** in EmailJS dashboard:

#### Template 1: Contact Form
- Click **"Create Template"**
- Name: `contact_form`
- Subject: `New Contact Request from {{from_name}}`
- Add these fields in the template body:
```
Name: {{from_name}}
Phone: {{phone}}
WhatsApp: {{whatsapp}}
Message: {{message}}
```
- Copy the **Template ID** (looks like: `template_xxxxxx`)

#### Template 2: Job Application
- Click **"Create Template"**
- Name: `job_application`
- Subject: `Job Application for {{jobTitle}} - {{from_name}}`
- Add these fields in the template body:
```
Full Name: {{from_name}}
Email: {{email}}
Phone: {{phone}}
LinkedIn: {{linkedIn}}
Portfolio: {{portfolio}}
Job Title: {{jobTitle}}
Department: {{jobDepartment}}
Cover Letter: {{message}}
Resume: [Please check email attachment if available]
```
- Copy the **Template ID**

### Step 4: Get Your Public Key
1. Click your avatar (top right)
2. Go to **Account Settings**
3. Find **Public Key**
4. Copy it

### Step 5: Update .env.local
Open `.env.local` in the project root and fill in your values:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id_here
VITE_EMAILJS_CAREERS_TEMPLATE_ID=your_careers_template_id_here
```

**Example:**
```env
VITE_EMAILJS_PUBLIC_KEY=abc123def456
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_contact_001
VITE_EMAILJS_CAREERS_TEMPLATE_ID=template_careers_001
```

### Step 6: Restart Your Dev Server
Run these commands:
```bash
npm run dev
```

---

## Testing

### Test Contact Form
1. Go to home page → scroll to "Contact Us"
2. Fill in the form:
   - Name: Test User
   - Phone: 9876543210
   - WhatsApp: 9876543210
   - Message: Test message
3. Click "Get Callback"
4. Check your email for the submission

### Test Job Application
1. Go to careers page
2. Click "Apply Now" on any job
3. Fill in the form with test data
4. Upload a test resume (PDF/DOC)
5. Click "Submit Application"
6. Check your email

---

## Troubleshooting

### "Failed to send message" error
**Causes:**
1. Environment variables not filled in `.env.local`
2. Credentials are incorrect
3. Email service not connected

**Solution:** 
- Double-check all values in `.env.local`
- Verify credentials in EmailJS dashboard
- Make sure your email service is active in EmailJS

### Emails not arriving
1. Check your **spam** folder
2. Verify the email is being sent to `ninthwaybranders@gmail.com` in the code
3. Check EmailJS dashboard → **Logs** tab to see if email was sent

### Template variables showing in email
- Make sure template uses `{{variable_name}}` format
- Check the variable names match what's being sent from the code

---

## Upgrading EmailJS Plan

When you exceed 200/month:
1. Go to **Pricing** page on emailjs.com
2. Choose a plan ($20-99/month)
3. Billing is automatic, no code changes needed

---

## File Changes Made
- ✅ Installed `emailjs-com` package
- ✅ Created `.env.local` (placeholder values)
- ✅ Created `/src/lib/emailjs.ts` (EmailJS utility)
- ✅ Updated Contact.tsx to use EmailJS
- ✅ Updated JobApplicationForm.tsx to use EmailJS
- ✅ Updated App.tsx to initialize EmailJS globally

Both forms now use EmailJS instead of FormSubmit.co!
