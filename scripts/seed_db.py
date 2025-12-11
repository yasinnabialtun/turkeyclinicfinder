#!/usr/bin/env python3
"""
Database seeding script
Creates sample clinics, doctors, treatments, and reviews
"""
import sys
import os

# Add backend to path
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

from sqlalchemy.orm import Session
from app.db.database import SessionLocal
from app.models.user import User, UserRole
from app.models.clinic import Clinic, ClinicStatus
from app.models.doctor import Doctor
from app.models.treatment import Treatment
from app.models.review import Review
from app.core.security import get_password_hash


def seed_database():
    """Seed the database with sample data"""
    db: Session = SessionLocal()

    try:
        # Create admin user
        admin = db.query(User).filter(User.email == "admin@tcf.com").first()
        if not admin:
            admin = User(
                email="admin@tcf.com",
                hashed_password=get_password_hash("admin123"),
                full_name="Admin User",
                role=UserRole.ADMIN.value,
                is_active=True,
                is_verified=True,
            )
            db.add(admin)
            db.commit()
            print("✓ Created admin user")

        # Sample clinics data
        clinics_data = [
            {
                "name_en": "Istanbul Hair Transplant Center",
                "name_ar": "مركز إسطنبول لزراعة الشعر",
                "name_tr": "İstanbul Saç Ekim Merkezi",
                "description_en": "Leading hair transplant clinic in Istanbul with over 15 years of experience. Specializing in FUE and DHI techniques.",
                "description_ar": "عيادة رائدة لزراعة الشعر في إسطنبول مع أكثر من 15 عامًا من الخبرة. متخصصة في تقنيات FUE و DHI.",
                "description_tr": "15 yılı aşkın deneyime sahip İstanbul'daki önde gelen saç ekim kliniği. FUE ve DHI tekniklerinde uzmanlaşmış.",
                "city": "Istanbul",
                "address": "Nişantaşı, İstanbul",
                "phone": "+90 212 555 0101",
                "email": "info@istanbulhair.com",
                "website": "https://istanbulhair.com",
                "latitude": 41.0408,
                "longitude": 28.9857,
                "treatments": [
                    {
                        "name_en": "FUE Hair Transplant",
                        "name_ar": "زراعة الشعر بتقنية FUE",
                        "name_tr": "FUE Saç Ekimi",
                        "category": "hair_transplant",
                        "price_min_usd": 2000,
                        "price_max_usd": 5000,
                        "duration_days": 1,
                        "recovery_days": 7,
                    },
                    {
                        "name_en": "DHI Hair Transplant",
                        "name_ar": "زراعة الشعر بتقنية DHI",
                        "name_tr": "DHI Saç Ekimi",
                        "category": "hair_transplant",
                        "price_min_usd": 2500,
                        "price_max_usd": 6000,
                        "duration_days": 1,
                        "recovery_days": 7,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Mehmet Yılmaz",
                        "name_ar": "د. محمد يلماز",
                        "name_tr": "Dr. Mehmet Yılmaz",
                        "specialization_en": "Hair Transplant Specialist",
                        "specialization_ar": "أخصائي زراعة الشعر",
                        "specialization_tr": "Saç Ekim Uzmanı",
                        "years_experience": 15,
                    },
                ],
            },
            {
                "name_en": "Antalya Dental Excellence",
                "name_ar": "التميز في طب الأسنان أنطاليا",
                "name_tr": "Antalya Diş Mükemmelliği",
                "description_en": "Premium dental clinic in Antalya offering cosmetic dentistry, implants, and smile makeovers.",
                "description_ar": "عيادة أسنان فاخرة في أنطاليا تقدم طب الأسنان التجميلي والزرع وتجميل الابتسامة.",
                "description_tr": "Antalya'da kozmetik diş hekimliği, implant ve gülüş tasarımı sunan premium diş kliniği.",
                "city": "Antalya",
                "address": "Lara, Antalya",
                "phone": "+90 242 555 0202",
                "email": "info@antalyadental.com",
                "website": "https://antalyadental.com",
                "latitude": 36.8841,
                "longitude": 30.7056,
                "treatments": [
                    {
                        "name_en": "Dental Implants",
                        "name_ar": "زراعة الأسنان",
                        "name_tr": "Diş İmplantı",
                        "category": "dental",
                        "price_min_usd": 800,
                        "price_max_usd": 2000,
                        "duration_days": 1,
                        "recovery_days": 14,
                    },
                    {
                        "name_en": "Smile Makeover",
                        "name_ar": "تجميل الابتسامة",
                        "name_tr": "Gülüş Tasarımı",
                        "category": "dental",
                        "price_min_usd": 1500,
                        "price_max_usd": 4000,
                        "duration_days": 3,
                        "recovery_days": 7,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Ayşe Demir",
                        "name_ar": "د. عائشة ديمير",
                        "name_tr": "Dr. Ayşe Demir",
                        "specialization_en": "Cosmetic Dentist",
                        "specialization_ar": "طبيب أسنان تجميلي",
                        "specialization_tr": "Kozmetik Diş Hekimi",
                        "years_experience": 12,
                    },
                ],
            },
            {
                "name_en": "Ankara Medical Center",
                "name_ar": "مركز أنقرة الطبي",
                "name_tr": "Ankara Tıp Merkezi",
                "description_en": "Comprehensive medical center in Ankara offering various treatments including plastic surgery and orthopedics.",
                "description_ar": "مركز طبي شامل في أنقرة يقدم علاجات متنوعة بما في ذلك الجراحة التجميلية وجراحة العظام.",
                "description_tr": "Plastik cerrahi ve ortopedi dahil çeşitli tedaviler sunan Ankara'daki kapsamlı tıp merkezi.",
                "city": "Ankara",
                "address": "Çankaya, Ankara",
                "phone": "+90 312 555 0303",
                "email": "info@ankaramedical.com",
                "website": "https://ankaramedical.com",
                "latitude": 39.9334,
                "longitude": 32.8597,
                "treatments": [
                    {
                        "name_en": "Rhinoplasty",
                        "name_ar": "جراحة الأنف",
                        "name_tr": "Rinoplasti",
                        "category": "plastic_surgery",
                        "price_min_usd": 3000,
                        "price_max_usd": 6000,
                        "duration_days": 1,
                        "recovery_days": 14,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Can Özkan",
                        "name_ar": "د. جان أوزكان",
                        "name_tr": "Dr. Can Özkan",
                        "specialization_en": "Plastic Surgeon",
                        "specialization_ar": "جراح تجميل",
                        "specialization_tr": "Plastik Cerrah",
                        "years_experience": 18,
                    },
                ],
            },
            {
                "name_en": "Istanbul Cosmetic Surgery",
                "name_ar": "جراحة التجميل إسطنبول",
                "name_tr": "İstanbul Estetik Cerrahi",
                "description_en": "Specialized cosmetic surgery clinic in Istanbul with international accreditation.",
                "description_ar": "عيادة متخصصة في الجراحة التجميلية في إسطنبول مع اعتماد دولي.",
                "description_tr": "Uluslararası akreditasyona sahip İstanbul'daki özel estetik cerrahi kliniği.",
                "city": "Istanbul",
                "address": "Beşiktaş, İstanbul",
                "phone": "+90 212 555 0404",
                "email": "info@istanbulcosmetic.com",
                "latitude": 41.0422,
                "longitude": 29.0089,
                "treatments": [
                    {
                        "name_en": "Breast Augmentation",
                        "name_ar": "تكبير الثدي",
                        "name_tr": "Meme Büyütme",
                        "category": "plastic_surgery",
                        "price_min_usd": 4000,
                        "price_max_usd": 8000,
                        "duration_days": 1,
                        "recovery_days": 21,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Zeynep Kaya",
                        "name_ar": "د. زينب كايا",
                        "name_tr": "Dr. Zeynep Kaya",
                        "specialization_en": "Cosmetic Surgeon",
                        "specialization_ar": "جراح تجميل",
                        "specialization_tr": "Estetik Cerrah",
                        "years_experience": 20,
                    },
                ],
            },
            {
                "name_en": "Antalya Hair Restoration",
                "name_ar": "استعادة الشعر أنطاليا",
                "name_tr": "Antalya Saç Restorasyonu",
                "description_en": "Modern hair restoration clinic in Antalya using latest techniques.",
                "description_ar": "عيادة حديثة لاستعادة الشعر في أنطاليا تستخدم أحدث التقنيات.",
                "description_tr": "En son teknikleri kullanan Antalya'daki modern saç restorasyon kliniği.",
                "city": "Antalya",
                "address": "Konyaaltı, Antalya",
                "phone": "+90 242 555 0505",
                "email": "info@antalyahair.com",
                "latitude": 36.8969,
                "longitude": 30.7133,
                "treatments": [
                    {
                        "name_en": "Sapphire FUE",
                        "name_ar": "زراعة الشعر بالياقوت",
                        "name_tr": "Safir FUE",
                        "category": "hair_transplant",
                        "price_min_usd": 1800,
                        "price_max_usd": 4500,
                        "duration_days": 1,
                        "recovery_days": 7,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Ali Çelik",
                        "name_ar": "د. علي تشيليك",
                        "name_tr": "Dr. Ali Çelik",
                        "specialization_en": "Hair Transplant Surgeon",
                        "specialization_ar": "جراح زراعة الشعر",
                        "specialization_tr": "Saç Ekim Cerrahı",
                        "years_experience": 10,
                    },
                ],
            },
            {
                "name_en": "Istanbul Dental Care",
                "name_ar": "رعاية الأسنان إسطنبول",
                "name_tr": "İstanbul Diş Bakımı",
                "description_en": "Full-service dental clinic in Istanbul with modern facilities.",
                "description_ar": "عيادة أسنان كاملة الخدمات في إسطنبول مع مرافق حديثة.",
                "description_tr": "Modern tesislere sahip İstanbul'daki tam hizmet diş kliniği.",
                "city": "Istanbul",
                "address": "Kadıköy, İstanbul",
                "phone": "+90 216 555 0606",
                "email": "info@istanbuldental.com",
                "latitude": 40.9819,
                "longitude": 29.0256,
                "treatments": [
                    {
                        "name_en": "Teeth Whitening",
                        "name_ar": "تبييض الأسنان",
                        "name_tr": "Diş Beyazlatma",
                        "category": "dental",
                        "price_min_usd": 300,
                        "price_max_usd": 800,
                        "duration_days": 1,
                        "recovery_days": 0,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Fatma Şahin",
                        "name_ar": "د. فاطمة شاهين",
                        "name_tr": "Dr. Fatma Şahin",
                        "specialization_en": "General Dentist",
                        "specialization_ar": "طبيب أسنان عام",
                        "specialization_tr": "Genel Diş Hekimi",
                        "years_experience": 8,
                    },
                ],
            },
            {
                "name_en": "Ankara Hair Clinic",
                "name_ar": "عيادة الشعر أنقرة",
                "name_tr": "Ankara Saç Kliniği",
                "description_en": "Established hair transplant clinic in Ankara with excellent patient care.",
                "description_ar": "عيادة راسخة لزراعة الشعر في أنقرة مع رعاية ممتازة للمرضى.",
                "description_tr": "Mükemmel hasta bakımı ile Ankara'daki yerleşik saç ekim kliniği.",
                "city": "Ankara",
                "address": "Yenimahalle, Ankara",
                "phone": "+90 312 555 0707",
                "email": "info@ankarahair.com",
                "latitude": 39.9566,
                "longitude": 32.7767,
                "treatments": [
                    {
                        "name_en": "FUE Hair Transplant",
                        "name_ar": "زراعة الشعر بتقنية FUE",
                        "name_tr": "FUE Saç Ekimi",
                        "category": "hair_transplant",
                        "price_min_usd": 2200,
                        "price_max_usd": 4800,
                        "duration_days": 1,
                        "recovery_days": 7,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Burak Arslan",
                        "name_ar": "د. بوراك أرسلان",
                        "name_tr": "Dr. Burak Arslan",
                        "specialization_en": "Hair Transplant Doctor",
                        "specialization_ar": "طبيب زراعة الشعر",
                        "specialization_tr": "Saç Ekim Doktoru",
                        "years_experience": 14,
                    },
                ],
            },
            {
                "name_en": "Antalya Smile Center",
                "name_ar": "مركز الابتسامة أنطاليا",
                "name_tr": "Antalya Gülüş Merkezi",
                "description_en": "Specialized dental clinic focusing on cosmetic and restorative dentistry.",
                "description_ar": "عيادة أسنان متخصصة تركز على طب الأسنان التجميلي والترميمي.",
                "description_tr": "Kozmetik ve restoratif diş hekimliğine odaklanan özel diş kliniği.",
                "city": "Antalya",
                "address": "Muratpaşa, Antalya",
                "phone": "+90 242 555 0808",
                "email": "info@antalyasmile.com",
                "latitude": 36.8841,
                "longitude": 30.7056,
                "treatments": [
                    {
                        "name_en": "Veneers",
                        "name_ar": "قشرة الأسنان",
                        "name_tr": "Veneer",
                        "category": "dental",
                        "price_min_usd": 500,
                        "price_max_usd": 1500,
                        "duration_days": 2,
                        "recovery_days": 3,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Emre Yıldız",
                        "name_ar": "د. أمره يلدز",
                        "name_tr": "Dr. Emre Yıldız",
                        "specialization_en": "Prosthodontist",
                        "specialization_ar": "أخصائي التعويضات السنية",
                        "specialization_tr": "Protez Uzmanı",
                        "years_experience": 11,
                    },
                ],
            },
            {
                "name_en": "Istanbul Aesthetic Center",
                "name_ar": "مركز الجمال إسطنبول",
                "name_tr": "İstanbul Estetik Merkezi",
                "description_en": "Comprehensive aesthetic and cosmetic surgery center in Istanbul.",
                "description_ar": "مركز شامل للجراحة التجميلية والجمالية في إسطنبول.",
                "description_tr": "İstanbul'daki kapsamlı estetik ve kozmetik cerrahi merkezi.",
                "city": "Istanbul",
                "address": "Şişli, İstanbul",
                "phone": "+90 212 555 0909",
                "email": "info@istanbulaesthetic.com",
                "latitude": 41.0602,
                "longitude": 28.9874,
                "treatments": [
                    {
                        "name_en": "Liposuction",
                        "name_ar": "شفط الدهون",
                        "name_tr": "Liposuction",
                        "category": "plastic_surgery",
                        "price_min_usd": 2500,
                        "price_max_usd": 5000,
                        "duration_days": 1,
                        "recovery_days": 14,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Selin Aydın",
                        "name_ar": "د. سيلين أيدين",
                        "name_tr": "Dr. Selin Aydın",
                        "specialization_en": "Aesthetic Surgeon",
                        "specialization_ar": "جراح تجميل",
                        "specialization_tr": "Estetik Cerrah",
                        "years_experience": 16,
                    },
                ],
            },
            {
                "name_en": "Ankara Dental Solutions",
                "name_ar": "حلول الأسنان أنقرة",
                "name_tr": "Ankara Diş Çözümleri",
                "description_en": "Modern dental practice in Ankara offering comprehensive dental services.",
                "description_ar": "ممارسة أسنان حديثة في أنقرة تقدم خدمات أسنان شاملة.",
                "description_tr": "Kapsamlı diş hizmetleri sunan Ankara'daki modern diş muayenesi.",
                "city": "Ankara",
                "address": "Keçiören, Ankara",
                "phone": "+90 312 555 1010",
                "email": "info@ankaradental.com",
                "latitude": 40.0169,
                "longitude": 32.8567,
                "treatments": [
                    {
                        "name_en": "Root Canal Treatment",
                        "name_ar": "علاج قناة الجذر",
                        "name_tr": "Kanal Tedavisi",
                        "category": "dental",
                        "price_min_usd": 200,
                        "price_max_usd": 600,
                        "duration_days": 1,
                        "recovery_days": 3,
                    },
                ],
                "doctors": [
                    {
                        "name_en": "Dr. Murat Koç",
                        "name_ar": "د. مراد كوتش",
                        "name_tr": "Dr. Murat Koç",
                        "specialization_en": "Endodontist",
                        "specialization_ar": "أخصائي علاج الجذور",
                        "specialization_tr": "Endodontist",
                        "years_experience": 9,
                    },
                ],
            },
        ]

        # Create clinics
        import re

        for clinic_data in clinics_data:
            # Check if clinic exists
            existing = (
                db.query(Clinic)
                .filter(Clinic.name_en == clinic_data["name_en"])
                .first()
            )
            if existing:
                continue

            # Generate slug
            slug = re.sub(r"[^a-z0-9]+", "-", clinic_data["name_en"].lower()).strip("-")
            slug = re.sub(r"-+", "-", slug)

            # Extract treatments and doctors
            treatments_data = clinic_data.pop("treatments", [])
            doctors_data = clinic_data.pop("doctors", [])

            # Create clinic
            clinic = Clinic(
                **clinic_data,
                slug=slug,
                status=ClinicStatus.APPROVED.value,
                verified=True,
                rating=4.5,  # Default rating
                review_count=0,
            )
            db.add(clinic)
            db.flush()

            # Create treatments
            for treatment_data in treatments_data:
                treatment = Treatment(clinic_id=clinic.id, **treatment_data)
                db.add(treatment)

            # Create doctors
            for doctor_data in doctors_data:
                doctor = Doctor(clinic_id=clinic.id, **doctor_data)
                db.add(doctor)

            print(f"✓ Created clinic: {clinic.name_en}")

        db.commit()

        # Create sample reviews
        clinics = db.query(Clinic).all()
        review_texts = [
            {
                "content_en": "Excellent service and professional staff. Very satisfied with the results!",
                "content_ar": "خدمة ممتازة وطاقم محترف. راضٍ جدًا عن النتائج!",
                "rating": 5.0,
            },
            {
                "content_en": "Great experience, modern facilities, and caring doctors.",
                "content_ar": "تجربة رائعة ومرافق حديثة وأطباء مهتمين.",
                "rating": 4.5,
            },
            {
                "content_en": "Good clinic but could improve communication.",
                "content_ar": "عيادة جيدة ولكن يمكن تحسين التواصل.",
                "rating": 4.0,
            },
        ]

        for clinic in clinics[:3]:  # Add reviews to first 3 clinics
            for i, review_text in enumerate(review_texts):
                review = Review(
                    clinic_id=clinic.id,
                    rating=review_text["rating"],
                    content_en=review_text["content_en"],
                    content_ar=review_text["content_ar"],
                    author_name=f"Patient {i+1}",
                    is_published=True,
                )
                db.add(review)

            # Update clinic rating
            clinic.review_count = len(review_texts)
            clinic.rating = sum(r["rating"] for r in review_texts) / len(review_texts)

        db.commit()
        print("✓ Created sample reviews")

        print("\n✅ Database seeding completed successfully!")

    except Exception as e:
        db.rollback()
        print(f"❌ Error seeding database: {e}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    seed_database()

