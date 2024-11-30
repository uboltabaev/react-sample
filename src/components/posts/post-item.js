import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import classes from './post-item.module.css';

function PostItem(props) {
  const { title, image, excerpt, date, author, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/blog/${slug}`;

  return (
    <Col className={classes.post}>
      <Link href={linkPath} prefetch={false}>
        <a>
          <div className={classes.image}>
            <Row className={`${classes.title} d-none d-sm-flex`}>
              <Col>
                <h3>{title}</h3>
                <p>{excerpt}</p>              
              </Col>
            </Row>
            <Image src={imagePath}
              alt={title}
              width={944}
              height={432}
              layout='responsive'
              priority={true}
            />
          </div>
          <Row className={`${classes.title2}`}>
            <Col>
              <h3>{title}</h3>
              <p>{excerpt}</p>            
            </Col>
          </Row>
          <Row className={classes.content}>
            <Col className={classes.author} xs={12} sm={6}>
              {author}
            </Col>
            <Col className={classes.time} xs={12} sm={6}>
              {formattedDate}
            </Col>
          </Row>
        </a>
      </Link>
    </Col>
  );
}

export default PostItem;
