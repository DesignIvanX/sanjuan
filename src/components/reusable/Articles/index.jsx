import styles from "./styles.module.css";
const index = ({ posts }) => {
  return (
    <article className={styles["blog"]}>
      <h2 className={styles["blog--title"]}>EXPLORA NUESTRO BLOG</h2>
      <div className={styles["blog-content"]}>
        {posts.map((post) => {
          return (
            <div key={post.slug} className={styles["blog-content-box"]}>
              <div className={styles["blog-content-box--image"]}>
                <img
                  className={styles["blog-content-box--img"]}
                  src={post.img}
                  alt={post.title}
                />
              </div>
              <div className={styles["blog-content-box--text"]}>
                <h2 className={styles["blog-content-box--h2"]}>{post.title}</h2>
                <h3>{post.date}</h3>
                <p>{post.minutes}</p>
                <p className={styles["blog-content-box--p"]}>
                  {post.parhagraph}
                </p>
                <a
                  className={styles["blog-content-box--btn"]}
                  href={`/blog/${post.slug}`}
                >
                  Leer articulo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default index;
