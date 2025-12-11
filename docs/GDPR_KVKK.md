# GDPR/KVKK Compliance Notes

## Data Protection

This application handles personal health information (PHI) and must comply with GDPR (EU) and KVKK (Turkey) regulations.

## Data Collection

### Personal Data Collected
- User account information (email, name, phone)
- Clinic inquiry/lead data
- Review content (optional personal information)
- Booking information

### Sensitive Data
- Medical treatment interests
- Health-related inquiries
- Patient contact information

## Data Storage

### Encryption
- Passwords: Hashed with bcrypt
- Sensitive fields: Marked with `is_encrypted` flag
- At-rest encryption: Configure at database level
- In-transit encryption: HTTPS/TLS required

### Data Minimization
- Only collect necessary data
- Store minimal PHI
- Anonymize where possible

## User Rights

### Right to Access
Users can request their data via API endpoint:
```
GET /api/user/data-export
```

### Right to Deletion
Users can request account deletion:
```
DELETE /api/user/account
```

### Right to Rectification
Users can update their information:
```
PUT /api/user/profile
```

## Data Retention

- User accounts: Until deletion request
- Leads: 2 years or until deletion request
- Reviews: Permanent (unless deleted)
- Logs: 90 days

## Security Measures

1. **Access Control**
   - Role-based permissions
   - JWT token expiration
   - Secure password requirements

2. **Data Security**
   - Encrypted database connections
   - Secure API endpoints
   - Input validation and sanitization

3. **Monitoring**
   - Audit logs for data access
   - Security incident response plan

## Third-Party Services

### OpenAI
- Data sent to OpenAI for processing
- Review OpenAI's privacy policy
- Consider data processing agreements

### Hosting Providers
- Ensure GDPR-compliant hosting
- Data residency requirements

## Compliance Checklist

- [ ] Privacy policy published
- [ ] Cookie consent (if applicable)
- [ ] Data processing agreements signed
- [ ] User consent mechanisms
- [ ] Data breach notification plan
- [ ] Regular security audits
- [ ] Staff training on data protection

## Contact

For data protection inquiries:
- Email: privacy@turkeyclinicfinder.com
- Data Protection Officer: [Contact Information]

## Updates

This document should be reviewed and updated regularly to ensure ongoing compliance.

