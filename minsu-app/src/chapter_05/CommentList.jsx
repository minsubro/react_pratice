import Comment from "./Comment";

const comments = [
	{
		name: "minsu",
		comment: "난 너구리야...",
	},
	{
		name: "eunbi",
		comment: "나도 너구리야..."
	},
	{
		name: "eunbi",
		comment: "고기!!!!"
	}
];

function CommentList(props) {
	return (
		<div>
			{comments.map((comment) => {
				return (
					<Comment name={comment.name} comment={comment.comment} />
				)
			})}
		</div>
	);
}

export default CommentList;