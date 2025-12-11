"""
Email service for sending notifications
"""
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional, List
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)


class EmailService:
    """Service for sending emails"""

    @staticmethod
    def send_email(
        to_email: str,
        subject: str,
        body_html: str,
        body_text: Optional[str] = None,
        cc: Optional[List[str]] = None,
    ) -> bool:
        """
        Send an email
        
        Args:
            to_email: Recipient email address
            subject: Email subject
            body_html: HTML email body
            body_text: Plain text email body (optional)
            cc: CC recipients (optional)
        
        Returns:
            True if email sent successfully, False otherwise
        """
        if not settings.SMTP_HOST or not settings.SMTP_USER:
            logger.warning("SMTP not configured, email not sent")
            return False

        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject
            msg["From"] = settings.SMTP_FROM_EMAIL or settings.SMTP_USER
            msg["To"] = to_email
            if cc:
                msg["Cc"] = ", ".join(cc)

            # Add plain text version if provided
            if body_text:
                part1 = MIMEText(body_text, "plain")
                msg.attach(part1)

            # Add HTML version
            part2 = MIMEText(body_html, "html")
            msg.attach(part2)

            # Send email
            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
                server.starttls()
                server.login(settings.SMTP_USER, settings.SMTP_PASSWORD)
                recipients = [to_email]
                if cc:
                    recipients.extend(cc)
                server.send_message(msg)
                logger.info(f"Email sent successfully to {to_email}")
                return True

        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")
            return False

    @staticmethod
    def send_consultation_notification(lead_data: dict) -> bool:
        """
        Send notification email when a new consultation request is received
        
        Args:
            lead_data: Lead data dictionary
        
        Returns:
            True if email sent successfully
        """
        subject = f"New Consultation Request: {lead_data.get('name', 'Unknown')}"
        
        # Email to admin/clinic
        body_html = f"""
        <html>
          <body>
            <h2>New Consultation Request</h2>
            <p>A new consultation request has been received:</p>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('name', 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('email', 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('phone', 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Country:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('country', 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Treatment:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('treatment', 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Budget:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('budget', 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Preferred Date:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('preferred_date', 'N/A')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('message', 'N/A')}</td>
              </tr>
            </table>
            <h3 style="margin-top: 20px; color: #2563eb;">Additional Information:</h3>
            <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin-top: 10px;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Urgency:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('metadata', {}).get('urgency', 'normal').title()}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Number of People:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('metadata', {}).get('number_of_people', '1')}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Preferred Language:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('metadata', {}).get('preferred_language', 'en').upper()}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Accommodation Needed:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{'Yes' if lead_data.get('metadata', {}).get('accommodation_needed') else 'No'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Travel Assistance Needed:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{'Yes' if lead_data.get('metadata', {}).get('travel_assistance_needed') else 'No'}</td>
              </tr>
              {lead_data.get('metadata', {}).get('medical_history') and (
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Medical History:</td>
                <td style="padding: 8px; border: 1px solid #ddd;">{lead_data.get('metadata', {}).get('medical_history', 'N/A')}</td>
              </tr>
              )}
            </table>
            <p style="margin-top: 20px;">
              <a href="{settings.ALLOWED_ORIGINS[0] if settings.ALLOWED_ORIGINS else 'http://localhost:3000'}/admin/leads" 
                 style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                View in Admin Panel
              </a>
            </p>
          </body>
        </html>
        """
        
        body_text = f"""
        New Consultation Request
        
        Name: {lead_data.get('name', 'N/A')}
        Email: {lead_data.get('email', 'N/A')}
        Phone: {lead_data.get('phone', 'N/A')}
        Country: {lead_data.get('country', 'N/A')}
        Treatment: {lead_data.get('treatment', 'N/A')}
        Budget: {lead_data.get('budget', 'N/A')}
        Preferred Date: {lead_data.get('preferred_date', 'N/A')}
        Message: {lead_data.get('message', 'N/A')}
        
        Additional Information:
        Urgency: {lead_data.get('metadata', {}).get('urgency', 'normal').title()}
        Number of People: {lead_data.get('metadata', {}).get('number_of_people', '1')}
        Preferred Language: {lead_data.get('metadata', {}).get('preferred_language', 'en').upper()}
        Accommodation Needed: {'Yes' if lead_data.get('metadata', {}).get('accommodation_needed') else 'No'}
        Travel Assistance Needed: {'Yes' if lead_data.get('metadata', {}).get('travel_assistance_needed') else 'No'}
        Medical History: {lead_data.get('metadata', {}).get('medical_history', 'N/A')}
        """
        
        # Send to admin email (configure in settings)
        admin_email = settings.SMTP_FROM_EMAIL or 'info@ynadijital.com'
        if admin_email:
            return EmailService.send_email(
                to_email=admin_email,
                subject=subject,
                body_html=body_html,
                body_text=body_text,
            )
        return False

    @staticmethod
    def send_consultation_confirmation(lead_data: dict) -> bool:
        """
        Send confirmation email to patient
        
        Args:
            lead_data: Lead data dictionary
        
        Returns:
            True if email sent successfully
        """
        subject = "Thank You for Your Consultation Request - Turkey Clinic Finder"
        
        body_html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2563eb;">Thank You, {lead_data.get('name', 'Valued Patient')}!</h2>
              
              <p>We have received your consultation request and our medical tourism experts will review it shortly.</p>
              
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #2563eb;">What Happens Next?</h3>
                <ul style="padding-left: 20px;">
                  <li>Our team will review your request within <strong>24 hours</strong></li>
                  <li>We'll match you with verified clinics that meet your needs</li>
                  <li>You'll receive a personalized quote and treatment plan</li>
                  <li>We'll assist with travel arrangements and accommodation</li>
                </ul>
              </div>
              
              <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1e40af;">Your Request Details:</h3>
                <p><strong>Treatment:</strong> {lead_data.get('treatment', 'N/A')}</p>
                <p><strong>Budget:</strong> {lead_data.get('budget', 'Not specified')}</p>
                <p><strong>Preferred Date:</strong> {lead_data.get('preferred_date', 'Flexible')}</p>
                <p><strong>Urgency:</strong> {lead_data.get('metadata', {}).get('urgency', 'normal').title()}</p>
                {lead_data.get('metadata', {}).get('accommodation_needed') && (
                  <p><strong>Accommodation:</strong> Requested ✓</p>
                )}
                {lead_data.get('metadata', {}).get('travel_assistance_needed') && (
                  <p><strong>Travel Assistance:</strong> Requested ✓</p>
                )}
              </div>
              
              <p>If you have any urgent questions, please don't hesitate to contact us:</p>
              <p>
                <strong>Email:</strong> info@ynadijital.com
              </p>
              
              <p style="margin-top: 30px;">
                Best regards,<br>
                <strong>Turkey Clinic Finder Team</strong>
              </p>
            </div>
          </body>
        </html>
        """
        
        body_text = f"""
        Thank You, {lead_data.get('name', 'Valued Patient')}!
        
        We have received your consultation request and our medical tourism experts will review it shortly.
        
        What Happens Next?
        - Our team will review your request within 24 hours
        - We'll match you with verified clinics that meet your needs
        - You'll receive a personalized quote and treatment plan
        - We'll assist with travel arrangements and accommodation
        
        Your Request Details:
        Treatment: {lead_data.get('treatment', 'N/A')}
        Budget: {lead_data.get('budget', 'Not specified')}
        Preferred Date: {lead_data.get('preferred_date', 'Flexible')}
        
        If you have any urgent questions, please contact us:
        Email: info@ynadijital.com
        
        Best regards,
        Turkey Clinic Finder Team
        """
        
        return EmailService.send_email(
            to_email=lead_data.get('email', ''),
            subject=subject,
            body_html=body_html,
            body_text=body_text,
        )

