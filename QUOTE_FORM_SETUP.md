# Quote Form Implementation Guide

## Overview
The quote form has been implemented with Zod validation and email sending functionality using Nodemailer.

## Files Created/Modified

### New Files:
1. **`src/lib/validations.ts`** - Zod validation schema for form data
2. **`src/components/QuoteForm.tsx`** - Client-side form component with validation
3. **`src/app/actions/submitQuote.ts`** - Server action for form submission and email sending
4. **`.env.local.example`** - Environment variables template

### Modified Files:
1. **`src/app/signup/page.tsx`** - Updated to use the new QuoteForm component

## Installation

Dependencies have already been installed:
- `zod` - Schema validation
- `nodemailer` - Email sending
- `@types/nodemailer` - TypeScript types for Nodemailer

## Configuration

### Step 1: Set up Environment Variables
Create a `.env.local` file in the project root with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com           # Your SMTP server
SMTP_PORT=587                      # Usually 587 or 465
SMTP_SECURE=false                  # true for port 465, false for others
SMTP_USER=your-email@gmail.com     # Your email address
SMTP_PASSWORD=your-app-password    # Your app password (not regular password)

# Manager Email
MANAGER_EMAIL=manager@company.com  # Where quote requests will be sent

# From Email
FROM_EMAIL=noreply@company.com     # Sender email address
```

### Gmail Setup (Recommended)
If using Gmail:
1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an app password for "Mail" and "Windows"
4. Use this password in `SMTP_PASSWORD`

### Other Email Providers
- **Outlook/Hotmail**: `smtp-mail.outlook.com`, port 587
- **SendGrid**: `smtp.sendgrid.net`, port 587
- **AWS SES**: `email-smtp.[region].amazonaws.com`, port 587
- **Custom SMTP**: Use your provider's settings

## How It Works

### Form Submission Flow:
1. User fills out the form and clicks "Request Free Quote"
2. Form data is sent to the `submitQuoteForm` server action
3. Data is validated using Zod schema
4. If validation passes:
   - Email is sent to the manager with all details
   - Confirmation email is sent to the user
   - Success message is displayed
5. If validation fails:
   - Field-level error messages are displayed
   - Form data is preserved for correction

### Validation Rules:
- **Name**: 2-100 characters
- **Email**: Valid email format
- **Company**: 1-100 characters
- **Project Type**: 2-100 characters
- **Timeline**: 2-100 characters
- **Message**: 10-2000 characters

## Features

✅ **Client-side Form Handling** - React form with state management
✅ **Zod Validation** - Robust schema validation
✅ **Field-level Error Messages** - Clear feedback for each field
✅ **Loading State** - Button disabled during submission
✅ **Success/Error Messages** - User-friendly feedback
✅ **Email to Manager** - Receives all quote requests
✅ **Confirmation Email** - Automatic reply to the user
✅ **Responsive Design** - Works on all devices

## Testing

1. Run the development server: `npm run dev`
2. Navigate to `http://localhost:3000/signup`
3. Fill out the form
4. Submit and check:
   - Manager's email receives the quote request
   - User receives a confirmation email
   - Success message displays on the form

## Customization

### Adding More Fields:
1. Update the Zod schema in `src/lib/validations.ts`
2. Add the field to the QuoteForm component
3. Update the email template in `src/app/actions/submitQuote.ts`

### Changing Email Template:
Edit the HTML templates in `src/app/actions/submitQuote.ts`:
- Manager email template: Line ~35
- Confirmation email template: Line ~48

### Styling:
The form uses Tailwind CSS classes from the original template. Modify the className in `src/components/QuoteForm.tsx` to change styling.

## Troubleshooting

**Email not sending:**
- Check environment variables are correctly set in `.env.local`
- Verify SMTP credentials (especially for Gmail, use app password not regular password)
- Check if SMTP server requires additional configuration

**Validation errors:**
- Check browser console for detailed validation errors
- Ensure all required fields are filled correctly

**CORS issues:**
- This is a server action, CORS shouldn't be an issue
- If using external email service, verify API credentials

## Security Considerations

- Never commit `.env.local` to version control
- Use app passwords instead of regular passwords for email accounts
- Consider implementing rate limiting for production
- Validate and sanitize all user input (already handled by Zod)

## Next Steps

- Add spam protection (reCAPTCHA)
- Implement database storage of submissions
- Add admin dashboard to view submissions
- Set up email templates with better formatting
- Add file upload capability for attachments
