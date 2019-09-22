import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'gatsby';

function BlogCard({ data }) {
    const metaData = data.frontmatter;
    return (
        <div className={styles.blogCard}>
            <Link to={metaData.slug} >
                <h1>{metaData.title}</h1>
            </Link>
            <p className={styles.excerpt}>{metaData.description}</p>
            <div>
                <label className={styles.dateLabel}>{metaData.date} • 5 mins read</label>
            </div>
        </div>
    )
}

export default BlogCard
