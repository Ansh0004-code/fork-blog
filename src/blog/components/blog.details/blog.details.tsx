import styles from "./blog.details.module.css";


interface BlogContent {
  overview?: string;
  points?: string[];
  quote?: string;
}

interface Blog {
  tag?: string;
  time?: string;
  title: string;
  description?: string;
  category?: string;
  image?: string;
  readTime?: string;
  date?: string;
  content?: BlogContent;
}

type BlogDetailsProps = {
  blog: Blog;
};

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  if (!blog) return null;

  const {
    tag,
    time,
    title,
    description,
    category,
    image,
    readTime,
    date,
    content,
  } = blog;

  return (
    <div className={styles.wrapper}>
      
      <img
        src={image}
        alt={title}
        className={styles.image}
      />

    
      <div className={styles.meta}>
        <span className={styles.tag}>{tag}</span>
        <span className={styles.readTime}>{readTime || time}</span>
      </div>

      
      <h1 className={styles.title}>{title}</h1>

      
      <button className={styles.shareBtn}>Share Article</button>

      
      <div className={styles.infoGrid}>
        <div>
          <p className={styles.infoLabel}>CATEGORY</p>
          <p className={styles.infoValue}>{category}</p>
        </div>
        <div>
          <p className={styles.infoLabel}>READ TIME</p>
          <p className={styles.infoValue}>{readTime || "5 Mins"}</p>
        </div>
        <div>
          <p className={styles.infoLabel}>DATE</p>
          <p className={styles.infoValue}>{date || "—"}</p>
        </div>
      </div>

      
      <div className={styles.content}>
        <p>{description}</p>

        {content?.overview && (
          <>
            <h3>Overview</h3>
            <p>{content.overview}</p>
          </>
        )}

        {content?.points?.length ? (
  <ul>
    {content.points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
) : null}


        {content?.quote && (
          <blockquote>“{content.quote}”</blockquote>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;



