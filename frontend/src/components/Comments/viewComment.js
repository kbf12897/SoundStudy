import { useState } from "react";
import EditComment from "../EditCommentForm/EditComment";
import './Comments.css';

const ViewComment = ({ comment }) => {
    const [displayEdit, setDisplayEdit] = useState(false);
    const [commentId, setCommentId] = useState(-1)

    return (
        <div key={comment?.id}>
            <div className='modal-comment-body-owner'>
                <div className='modal-comment-owner-content'>
                    <div className='modal-comment-owner'>{comment?.comment_owner}</div>
                    {!displayEdit && <div className='comment-content'>{comment?.comment_body}</div>}
                    {(displayEdit && comment?.id === commentId) && <EditComment setDisplayEdit={setDisplayEdit} setCommentId={setCommentId} comment={comment} />}
                </div>
            </div>
        </div>
    );
};

export default ViewComment;
