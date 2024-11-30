import { Row } from 'react-bootstrap';
import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid(props) {
  const { posts } = props;

  return (
    <Row className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </Row>
  );
}

export default PostsGrid;
