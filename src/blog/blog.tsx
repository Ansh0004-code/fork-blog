import { useState } from "react";
import styles from "./Blog.module.css";
import BlogDetails from "./components/blog.details/blog.details";
import InfoCard from "./components/cards";


import { blogPosts } from "./content";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  return (
    <>
      <div className={styles.blogHeading}>
        <h1 className={styles.heading}>CA Monk Blog</h1>
        <p className={styles.description}>Here is My Blog</p>
      </div>

      <div className={styles.container}>
        
        <div className={styles.leftPanel}>
          {blogPosts.map((post) => (
            <InfoCard
              key={post.id}
              tag={post.tag}
              time={post.time}
              title={post.title}
              description={post.description}
              category={post.category}
              isActive={selectedPost.id === post.id}
              onClick={() => setSelectedPost(post)}
            />
          ))}
        </div>

        
        <div className={styles.rightPanel}>
          <BlogDetails blog={selectedPost} />
        </div>
      </div>
    </>
  );
};

export default Blog;
