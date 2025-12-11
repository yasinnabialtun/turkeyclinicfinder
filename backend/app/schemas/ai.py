"""
AI service schemas
"""
from typing import Optional, List
from pydantic import BaseModel


class GenerateArticleRequest(BaseModel):
    """Article generation request"""
    topic: str
    language: str = "en"
    keywords: Optional[List[str]] = None
    target_length: Optional[int] = 1000


class GenerateArticleResponse(BaseModel):
    """Article generation response"""
    title: str
    content: str
    meta_description: str
    headings: List[str]
    faq: List[dict]
    keywords: List[str]
    provenance: dict


class SentimentAnalysisRequest(BaseModel):
    """Sentiment analysis request"""
    text: str
    language: Optional[str] = "en"


class SentimentAnalysisResponse(BaseModel):
    """Sentiment analysis response"""
    sentiment_score: float  # -1 to 1
    sentiment_label: str  # positive, negative, neutral
    highlights: List[str]
    confidence: float

