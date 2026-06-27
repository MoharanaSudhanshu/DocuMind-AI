from app.core.prompts import SYSTEM_PROMPT


class PromptBuilder:

    @staticmethod
    def build(question: str, context: list) -> str:

        if not context:
            return f"""
{SYSTEM_PROMPT}

No relevant context was found.

Question:
{question}
"""

        context_text = ""

        for i, doc in enumerate(context, start=1):
            context_text += f"""
SOURCE {i}

Filename: {doc['filename']}
Page: {doc['page']}

Content:
{doc['content']}

----------------------------------
"""

        return f"""
{SYSTEM_PROMPT}

Below are relevant excerpts from uploaded documents.

{context_text}

User Question:
{question}

Answer using ONLY the information above.
If the answer is not present, say so clearly.
"""