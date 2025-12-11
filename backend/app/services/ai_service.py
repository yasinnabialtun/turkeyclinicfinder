"""
AI service for OpenAI integration, embeddings, and content generation
"""
import os
from typing import List, Optional, Dict, Any
import structlog
import numpy as np
from openai import OpenAI

from app.core.config import settings

logger = structlog.get_logger()

# Initialize OpenAI client
openai_client = None
if settings.OPENAI_API_KEY:
    openai_client = OpenAI(api_key=settings.OPENAI_API_KEY)


class AIService:
    """AI service for embeddings, matching, and content generation"""

    def __init__(self):
        self.openai_client = openai_client
        self.use_vector_db = settings.USE_VECTOR_DB

    async def get_embedding(self, text: str) -> List[float]:
        """Get embedding vector for text"""
        if not self.openai_client:
            logger.warning("openai_client_not_available", returning_mock=True)
            # Return mock embedding
            return [0.0] * 1536

        try:
            response = self.openai_client.embeddings.create(
                model=settings.OPENAI_EMBEDDING_MODEL,
                input=text,
            )
            return response.data[0].embedding
        except Exception as e:
            logger.error("embedding_error", error=str(e))
            return [0.0] * 1536

    async def match_clinics(
        self,
        query: str,
        clinics: List[Dict[str, Any]],
        top_k: int = 3,
    ) -> List[Dict[str, Any]]:
        """
        Match clinics based on query using embeddings
        Returns top_k matches with confidence scores
        """
        if not self.openai_client:
            # Fallback: simple keyword matching
            return self._fallback_match(query, clinics, top_k)

        try:
            # Get query embedding
            query_embedding = await self.get_embedding(query)

            # Calculate similarity for each clinic
            matches = []
            for clinic in clinics:
                # Create clinic description for embedding
                clinic_text = f"{clinic.get('name_en', '')} {clinic.get('description_en', '')} {clinic.get('city', '')}"
                clinic_embedding = await self.get_embedding(clinic_text)

                # Cosine similarity
                similarity = self._cosine_similarity(query_embedding, clinic_embedding)

                matches.append({
                    **clinic,
                    "confidence_score": similarity,
                    "reasoning": f"Matched based on semantic similarity: {similarity:.2f}",
                })

            # Sort by confidence and return top_k
            matches.sort(key=lambda x: x["confidence_score"], reverse=True)
            return matches[:top_k]

        except Exception as e:
            logger.error("match_clinics_error", error=str(e))
            return self._fallback_match(query, clinics, top_k)

    def _cosine_similarity(self, vec1: List[float], vec2: List[float]) -> float:
        """Calculate cosine similarity between two vectors"""
        vec1 = np.array(vec1)
        vec2 = np.array(vec2)
        return float(np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2)))

    def _fallback_match(
        self, query: str, clinics: List[Dict[str, Any]], top_k: int
    ) -> List[Dict[str, Any]]:
        """Fallback matching using simple keyword matching"""
        query_lower = query.lower()
        matches = []

        for clinic in clinics:
            score = 0.0
            clinic_text = f"{clinic.get('name_en', '')} {clinic.get('description_en', '')} {clinic.get('city', '')}".lower()

            # Simple keyword matching
            for word in query_lower.split():
                if word in clinic_text:
                    score += 0.1

            matches.append({
                **clinic,
                "confidence_score": min(score, 1.0),
                "reasoning": "Matched using keyword fallback method",
            })

        matches.sort(key=lambda x: x["confidence_score"], reverse=True)
        return matches[:top_k]

    async def analyze_sentiment(self, text: str, language: str = "en") -> Dict[str, Any]:
        """Analyze sentiment of text using OpenAI"""
        if not self.openai_client:
            return self._fallback_sentiment(text)

        try:
            prompt = f"""Analyze the sentiment of the following text in {language}. 
Return a JSON object with:
- sentiment_score: float between -1 (very negative) and 1 (very positive)
- sentiment_label: "positive", "negative", or "neutral"
- highlights: array of key phrases that indicate the sentiment
- confidence: float between 0 and 1

Text: {text}
"""

            response = self.openai_client.chat.completions.create(
                model=settings.OPENAI_MODEL,
                messages=[
                    {"role": "system", "content": "You are a sentiment analysis expert. Return only valid JSON."},
                    {"role": "user", "content": prompt},
                ],
                temperature=0.3,
            )

            import json
            result = json.loads(response.choices[0].message.content)
            return result

        except Exception as e:
            logger.error("sentiment_analysis_error", error=str(e))
            return self._fallback_sentiment(text)

    def _fallback_sentiment(self, text: str) -> Dict[str, Any]:
        """Fallback sentiment analysis using simple rules"""
        text_lower = text.lower()
        positive_words = ["good", "great", "excellent", "amazing", "wonderful", "perfect", "love", "best"]
        negative_words = ["bad", "terrible", "awful", "horrible", "worst", "hate", "disappointed", "poor"]

        positive_count = sum(1 for word in positive_words if word in text_lower)
        negative_count = sum(1 for word in negative_words if word in text_lower)

        if positive_count > negative_count:
            sentiment_label = "positive"
            sentiment_score = 0.5 + (positive_count * 0.1)
        elif negative_count > positive_count:
            sentiment_label = "negative"
            sentiment_score = -0.5 - (negative_count * 0.1)
        else:
            sentiment_label = "neutral"
            sentiment_score = 0.0

        return {
            "sentiment_score": max(-1.0, min(1.0, sentiment_score)),
            "sentiment_label": sentiment_label,
            "highlights": [],
            "confidence": 0.6,
        }

    async def generate_article(
        self,
        topic: str,
        language: str = "en",
        keywords: Optional[List[str]] = None,
        target_length: int = 1000,
    ) -> Dict[str, Any]:
        """Generate SEO article using OpenAI"""
        if not self.openai_client:
            return self._fallback_article(topic, language, keywords)

        try:
            keywords_str = ", ".join(keywords) if keywords else ""
            prompt = f"""Write a comprehensive SEO-optimized article about "{topic}" in {language}.
Target length: approximately {target_length} words.
Keywords to include: {keywords_str}

Return a JSON object with:
- title: SEO-optimized title
- content: Full article content with proper headings (use ## for H2, ### for H3)
- meta_description: Meta description (150-160 characters)
- headings: Array of all headings in the article
- faq: Array of FAQ objects with "question" and "answer" fields
- keywords: Array of relevant keywords

Make the content informative, engaging, and SEO-friendly.
"""

            response = self.openai_client.chat.completions.create(
                model=settings.OPENAI_MODEL,
                messages=[
                    {"role": "system", "content": "You are an expert SEO content writer. Return only valid JSON."},
                    {"role": "user", "content": prompt},
                ],
                temperature=0.7,
            )

            import json
            result = json.loads(response.choices[0].message.content)
            result["provenance"] = {
                "model": settings.OPENAI_MODEL,
                "generated_by": "openai",
                "language": language,
            }
            return result

        except Exception as e:
            logger.error("article_generation_error", error=str(e))
            return self._fallback_article(topic, language, keywords)

    def _fallback_article(
        self, topic: str, language: str, keywords: Optional[List[str]]
    ) -> Dict[str, Any]:
        """Fallback article generation"""
        return {
            "title": f"Guide to {topic}",
            "content": f"This is a comprehensive guide about {topic}. " * 50,
            "meta_description": f"Learn everything about {topic} in this comprehensive guide.",
            "headings": [f"Introduction to {topic}", f"Benefits of {topic}", "Conclusion"],
            "faq": [
                {"question": f"What is {topic}?", "answer": f"{topic} is a medical treatment option."},
                {"question": f"How does {topic} work?", "answer": "The process involves several steps."},
            ],
            "keywords": keywords or [topic],
            "provenance": {
                "model": "fallback",
                "generated_by": "fallback",
                "language": language,
            },
        }


# Singleton instance
ai_service = AIService()

