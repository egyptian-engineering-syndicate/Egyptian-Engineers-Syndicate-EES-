import React from "react";

interface RichTextProps {
  content: string;
  className?: string;
}

/**
 * Safely renders HTML content from Directus rich text fields while cleaning up empty <p>&nbsp;</p> tags.
 */
export default function RichText({ content, className }: RichTextProps) {
  if (!content) return null;

  // Clean empty paragraphs like <p>&nbsp;</p> or <p></p>
  const cleanedContent = content
    .replace(/<p>\s*(&nbsp;|\s)*\s*<\/p>/gi, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  // If the content is wrapped in HTML tags
  if (/<[a-z][\s\S]*>/i.test(cleanedContent)) {
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: cleanedContent }}
      />
    );
  }

  return <p className={className}>{cleanedContent}</p>;
}
