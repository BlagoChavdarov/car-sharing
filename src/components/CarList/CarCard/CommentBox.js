
const CommentBox = ({
    commentInfo
}) => {
    return (
        <div className="list-comment">
            <h4 className="list-comment-item-heading">{commentInfo.header}</h4>
            <p className="list-comment-item-text">{commentInfo.comment}</p>
        </div>
    );
}

export default CommentBox;