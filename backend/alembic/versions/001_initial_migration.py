"""Initial migration

Revision ID: 001
Revises: 
Create Date: 2024-01-01 00:00:00.000000

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '001'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Users table
    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('email', sa.String(), nullable=False),
        sa.Column('hashed_password', sa.String(), nullable=False),
        sa.Column('full_name', sa.String(), nullable=False),
        sa.Column('phone', sa.String(), nullable=True),
        sa.Column('role', sa.String(), nullable=False),
        sa.Column('is_active', sa.Boolean(), nullable=False),
        sa.Column('is_verified', sa.Boolean(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_users_email'), 'users', ['email'], unique=True)
    op.create_index(op.f('ix_users_id'), 'users', ['id'], unique=False)

    # Clinics table
    op.create_table(
        'clinics',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name_en', sa.String(), nullable=False),
        sa.Column('name_ar', sa.String(), nullable=True),
        sa.Column('name_tr', sa.String(), nullable=True),
        sa.Column('slug', sa.String(), nullable=False),
        sa.Column('description_en', sa.Text(), nullable=True),
        sa.Column('description_ar', sa.Text(), nullable=True),
        sa.Column('description_tr', sa.Text(), nullable=True),
        sa.Column('city', sa.String(), nullable=False),
        sa.Column('address', sa.String(), nullable=True),
        sa.Column('phone', sa.String(), nullable=True),
        sa.Column('email', sa.String(), nullable=True),
        sa.Column('website', sa.String(), nullable=True),
        sa.Column('latitude', sa.Float(), nullable=True),
        sa.Column('longitude', sa.Float(), nullable=True),
        sa.Column('status', sa.String(), nullable=False),
        sa.Column('owner_id', sa.Integer(), nullable=True),
        sa.Column('rating', sa.Float(), nullable=False),
        sa.Column('review_count', sa.Integer(), nullable=False),
        sa.Column('verified', sa.Boolean(), nullable=False),
        sa.Column('featured', sa.Boolean(), nullable=False),
        sa.Column('metadata', postgresql.JSON(astext_type=sa.Text()), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(['owner_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_clinics_id'), 'clinics', ['id'], unique=False)
    op.create_index(op.f('ix_clinics_name_en'), 'clinics', ['name_en'], unique=False)
    op.create_index(op.f('ix_clinics_slug'), 'clinics', ['slug'], unique=True)
    op.create_index(op.f('ix_clinics_status'), 'clinics', ['status'], unique=False)
    op.create_index(op.f('ix_clinics_city'), 'clinics', ['city'], unique=False)

    # Doctors table
    op.create_table(
        'doctors',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('clinic_id', sa.Integer(), nullable=False),
        sa.Column('name_en', sa.String(), nullable=False),
        sa.Column('name_ar', sa.String(), nullable=True),
        sa.Column('name_tr', sa.String(), nullable=True),
        sa.Column('specialization_en', sa.String(), nullable=True),
        sa.Column('specialization_ar', sa.String(), nullable=True),
        sa.Column('specialization_tr', sa.String(), nullable=True),
        sa.Column('bio_en', sa.Text(), nullable=True),
        sa.Column('bio_ar', sa.Text(), nullable=True),
        sa.Column('bio_tr', sa.Text(), nullable=True),
        sa.Column('years_experience', sa.Integer(), nullable=True),
        sa.Column('education_en', sa.Text(), nullable=True),
        sa.Column('education_ar', sa.Text(), nullable=True),
        sa.Column('education_tr', sa.Text(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(['clinic_id'], ['clinics.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_doctors_id'), 'doctors', ['id'], unique=False)

    # Treatments table
    op.create_table(
        'treatments',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('clinic_id', sa.Integer(), nullable=False),
        sa.Column('name_en', sa.String(), nullable=False),
        sa.Column('name_ar', sa.String(), nullable=True),
        sa.Column('name_tr', sa.String(), nullable=True),
        sa.Column('description_en', sa.Text(), nullable=True),
        sa.Column('description_ar', sa.Text(), nullable=True),
        sa.Column('description_tr', sa.Text(), nullable=True),
        sa.Column('category', sa.String(), nullable=False),
        sa.Column('price_min_usd', sa.Float(), nullable=True),
        sa.Column('price_max_usd', sa.Float(), nullable=True),
        sa.Column('duration_days', sa.Integer(), nullable=True),
        sa.Column('recovery_days', sa.Integer(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(['clinic_id'], ['clinics.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_treatments_id'), 'treatments', ['id'], unique=False)
    op.create_index(op.f('ix_treatments_name_en'), 'treatments', ['name_en'], unique=False)
    op.create_index(op.f('ix_treatments_category'), 'treatments', ['category'], unique=False)

    # Reviews table
    op.create_table(
        'reviews',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('clinic_id', sa.Integer(), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=True),
        sa.Column('rating', sa.Float(), nullable=False),
        sa.Column('title_en', sa.String(), nullable=True),
        sa.Column('title_ar', sa.String(), nullable=True),
        sa.Column('title_tr', sa.String(), nullable=True),
        sa.Column('content_en', sa.Text(), nullable=True),
        sa.Column('content_ar', sa.Text(), nullable=True),
        sa.Column('content_tr', sa.Text(), nullable=True),
        sa.Column('author_name', sa.String(), nullable=True),
        sa.Column('author_email', sa.String(), nullable=True),
        sa.Column('verified_booking', sa.Boolean(), nullable=False),
        sa.Column('sentiment_score', sa.Float(), nullable=True),
        sa.Column('sentiment_label', sa.String(), nullable=True),
        sa.Column('sentiment_highlights', postgresql.JSON(astext_type=sa.Text()), nullable=True),
        sa.Column('is_published', sa.Boolean(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(['clinic_id'], ['clinics.id'], ),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_reviews_id'), 'reviews', ['id'], unique=False)

    # Bookings table
    op.create_table(
        'bookings',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('clinic_id', sa.Integer(), nullable=False),
        sa.Column('user_id', sa.Integer(), nullable=True),
        sa.Column('treatment_id', sa.Integer(), nullable=True),
        sa.Column('status', sa.String(), nullable=False),
        sa.Column('scheduled_date', sa.DateTime(timezone=True), nullable=True),
        sa.Column('patient_name', sa.String(), nullable=False),
        sa.Column('patient_email', sa.String(), nullable=False),
        sa.Column('patient_phone', sa.String(), nullable=True),
        sa.Column('notes', sa.Text(), nullable=True),
        sa.Column('metadata', postgresql.JSON(astext_type=sa.Text()), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(['clinic_id'], ['clinics.id'], ),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_bookings_id'), 'bookings', ['id'], unique=False)

    # Leads table
    op.create_table(
        'leads',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('clinic_id', sa.Integer(), nullable=True),
        sa.Column('user_id', sa.Integer(), nullable=True),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('email', sa.String(), nullable=False),
        sa.Column('phone', sa.String(), nullable=True),
        sa.Column('message', sa.Text(), nullable=True),
        sa.Column('treatment_interest', sa.String(), nullable=True),
        sa.Column('budget_usd', sa.Integer(), nullable=True),
        sa.Column('preferred_dates', sa.DateTime(timezone=True), nullable=True),
        sa.Column('status', sa.String(), nullable=False),
        sa.Column('source', sa.String(), nullable=True),
        sa.Column('metadata', postgresql.JSON(astext_type=sa.Text()), nullable=True),
        sa.Column('is_encrypted', sa.Boolean(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.ForeignKeyConstraint(['clinic_id'], ['clinics.id'], ),
        sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_leads_id'), 'leads', ['id'], unique=False)
    op.create_index(op.f('ix_leads_email'), 'leads', ['email'], unique=False)

    # Translations table
    op.create_table(
        'translations',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('key', sa.String(), nullable=False),
        sa.Column('language', sa.String(), nullable=False),
        sa.Column('value', sa.Text(), nullable=False),
        sa.Column('namespace', sa.String(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.PrimaryKeyConstraint('id'),
        sa.UniqueConstraint('key', 'language', 'namespace', name='uq_translation')
    )
    op.create_index(op.f('ix_translations_id'), 'translations', ['id'], unique=False)
    op.create_index(op.f('ix_translations_key'), 'translations', ['key'], unique=False)
    op.create_index(op.f('ix_translations_language'), 'translations', ['language'], unique=False)

    # Media table
    op.create_table(
        'media',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('clinic_id', sa.Integer(), nullable=True),
        sa.Column('url', sa.String(), nullable=False),
        sa.Column('type', sa.String(), nullable=False),
        sa.Column('alt_text_en', sa.String(), nullable=True),
        sa.Column('alt_text_ar', sa.String(), nullable=True),
        sa.Column('alt_text_tr', sa.String(), nullable=True),
        sa.Column('is_primary', sa.Boolean(), nullable=False),
        sa.Column('order', sa.Integer(), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['clinic_id'], ['clinics.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_media_id'), 'media', ['id'], unique=False)

    # AI Recommendations table
    op.create_table(
        'ai_recommendations',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('clinic_id', sa.Integer(), nullable=False),
        sa.Column('query_text', sa.Text(), nullable=True),
        sa.Column('query_embedding', postgresql.JSON(astext_type=sa.Text()), nullable=True),
        sa.Column('confidence_score', sa.Float(), nullable=False),
        sa.Column('reasoning', sa.Text(), nullable=True),
        sa.Column('match_criteria', postgresql.JSON(astext_type=sa.Text()), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.ForeignKeyConstraint(['clinic_id'], ['clinics.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_ai_recommendations_id'), 'ai_recommendations', ['id'], unique=False)


def downgrade() -> None:
    op.drop_index(op.f('ix_ai_recommendations_id'), table_name='ai_recommendations')
    op.drop_table('ai_recommendations')
    op.drop_index(op.f('ix_media_id'), table_name='media')
    op.drop_table('media')
    op.drop_index(op.f('ix_translations_language'), table_name='translations')
    op.drop_index(op.f('ix_translations_key'), table_name='translations')
    op.drop_index(op.f('ix_translations_id'), table_name='translations')
    op.drop_table('translations')
    op.drop_index(op.f('ix_leads_email'), table_name='leads')
    op.drop_index(op.f('ix_leads_id'), table_name='leads')
    op.drop_table('leads')
    op.drop_index(op.f('ix_bookings_id'), table_name='bookings')
    op.drop_table('bookings')
    op.drop_index(op.f('ix_reviews_id'), table_name='reviews')
    op.drop_table('reviews')
    op.drop_index(op.f('ix_treatments_category'), table_name='treatments')
    op.drop_index(op.f('ix_treatments_name_en'), table_name='treatments')
    op.drop_index(op.f('ix_treatments_id'), table_name='treatments')
    op.drop_table('treatments')
    op.drop_index(op.f('ix_doctors_id'), table_name='doctors')
    op.drop_table('doctors')
    op.drop_index(op.f('ix_clinics_city'), table_name='clinics')
    op.drop_index(op.f('ix_clinics_status'), table_name='clinics')
    op.drop_index(op.f('ix_clinics_slug'), table_name='clinics')
    op.drop_index(op.f('ix_clinics_name_en'), table_name='clinics')
    op.drop_index(op.f('ix_clinics_id'), table_name='clinics')
    op.drop_table('clinics')
    op.drop_index(op.f('ix_users_id'), table_name='users')
    op.drop_index(op.f('ix_users_email'), table_name='users')
    op.drop_table('users')

