import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>Blog</h1>
      <PostsGrid posts={props.posts} />
      <Row className={classes.himg}>
        <Col>
          <div style={{margin: '60px auto', width: '62px'}}>
            <Image src={'/images/himg-small.png'} width={'62'} height={'151'} layout="fixed" priority={true}/>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default AllPosts;
