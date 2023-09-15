import { parse as parseComment, Block } from 'comment-parser';

export function leadingComment(
  src: string,
  srcSpanStart: number,
  start: number,
  end: number,
): Block[] {
  const commentString = src.slice(start - srcSpanStart + 1, end - srcSpanStart);
  return parseComment(commentString);
}