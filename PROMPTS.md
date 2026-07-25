# AI Prompts Used During Development

## Overview

This project incorporates AI-assisted metadata generation for shortened URLs. The AI component is intended to enhance the user experience by automatically generating descriptive information for submitted URLs.

The prompts below illustrate the intended interaction with the AI service.

---

# Prompt 1: Generate Website Metadata

Generate metadata for the following website.

URL:
<website_url>

Return the response as JSON with the following fields:

{
"title": "...",
"category": "...",
"summary": "..."
}

The summary should be concise (under 40 words).

---

# Prompt 2: Classify Website

Classify the following website into one of these categories:

- Technology
- Education
- News
- Shopping
- Entertainment
- Finance
- Healthcare
- Government
- Sports
- Other

Return only the category name.

---

# Prompt 3: Generate Short Summary

Write a short description (maximum 40 words) explaining what this website is about.

Do not include marketing language.

---

# Prompt 4: Generate Title

Generate a human-readable title for the following website.

Return only the title.

---

# AI Integration Strategy

The application attempts to retrieve metadata from the AI service whenever a new URL is created.

Expected output includes:

- Website title
- Website category
- Website summary

---

# Fallback Strategy

To ensure reliability, the application continues functioning even if AI metadata generation is unavailable.

If the AI service fails:

- Default title is stored.
- Default category is assigned.
- Default summary is saved.
- URL shortening remains fully operational.

This approach ensures that AI enhances the application without becoming a single point of failure.

---

# Design Considerations

The prompts were designed to:

- Produce consistent outputs
- Minimise unnecessary text
- Encourage structured JSON responses
- Reduce post-processing requirements
- Keep metadata concise and useful

---

# Future Improvements

Future versions could include:

- Multi-language summaries
- Keyword extraction
- Sentiment analysis
- Content safety checks
- Automatic tag generation
- Richer website categorisation
- Confidence scores for generated metadata

---

# Conclusion

The prompt design prioritises simplicity, consistency, and resilience. By combining structured prompts with a fallback mechanism, the application maintains reliable behaviour while taking advantage of AI-generated enhancements whenever available.