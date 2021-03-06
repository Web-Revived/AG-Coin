import { sanitize } from './User';
import { FeedComment, User } from "shared/prisma/generated/prisma-client-js"

export const sanitizeComment = (comment: FeedComment & { user: User }) => {
    return {
        ...comment,
        user: sanitize(comment.user),
    }
}