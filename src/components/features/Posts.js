import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import Post from "./Post";



const Posts = props => {

  const posts = useSelector(getAllPosts);

	return (
    <div>
      <article>{posts.map(post => <Post key={post.id} {...post} />)}</article>      
    </div>
	);
};

export default Posts;

