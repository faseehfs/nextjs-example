type ValidatePostParams = {
  title: string;
  content: string;
};

export function validatePost({ title, content }: ValidatePostParams): {
  approved: boolean;
  newTitle: string;
  newContent: string;
  message: string;
} {
  const newTitle = title.trim();
  const newContent = content.trim();

  if (newTitle.length === 0) {
    return {
      approved: false,
      newTitle,
      newContent,
      message: "Title is required",
    };
  }

  if (newContent.length === 0) {
    return {
      approved: false,
      newTitle,
      newContent,
      message: "Content is required",
    };
  }

  if (newTitle.length > 100) {
    return {
      approved: false,
      newTitle,
      newContent,
      message: "Title is longer than 100 characters",
    };
  }

  if (newContent.length > 5000) {
    return {
      approved: false,
      newTitle,
      newContent,
      message: "Content exceeds the 5000 character limit",
    };
  }

  return { approved: true, newTitle, newContent, message: "Post is valid" };
}
