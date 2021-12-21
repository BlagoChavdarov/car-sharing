
import {useState , useContext, useEffect } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';

import * as carService from '../../../services/carService';

import CommentBox from './CommentBox';

// import { Collapse } from 'react-bootstrap';

const CommentsList = ({
    carInfo
}) => {
    const { user } = useContext(AuthContext);

    const [noComments, setNoComments] = useState({
        comment_num:"0",
        header:"",
        comment:"No CommentsAdded",
    });
    
    const [comment, setComment] = useState('');

    const [CarComments, setComments] = useState([]);

    useEffect(() => {
        carService.getCommentsData(user.sess,carInfo.car_num)
            .then(result => {
                setComments(result);
            })
    },[]);
 

    const AddComment = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let comment = formData.get('comment');

        carService.addCarComment(user.sess,user.user_num, carInfo.car_num, comment)
            .then((result) => {
                setComments(result);
            })
            .catch(err => {
                // TODO: show notification
                console.log(err);
        });

    }

    return (

        <div >
            {CarComments.length > 0
                ? (
                    <div>
                        {CarComments.map(x => <CommentBox key={x.comment_num}  commentInfo={x} />)}
                    </div>
                )
                : 
                <CommentBox key={noComments.comment_num}  commentInfo={noComments} />
            }
            
            <form id="comment-form" onSubmit={AddComment} method="POST">
                <label>
                    Comment: 
                    <textarea name="comment" id="comment" placeholder="Please Add comment"  />
                </label>
                <input className="button submit" type="submit" value="Add" />
            </form>
        </div>
        
    );
}

export default CommentsList;