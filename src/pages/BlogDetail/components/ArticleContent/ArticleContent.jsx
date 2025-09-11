import React from 'react';
import styles from './ArticleContent.module.scss';

export const ArticleContent = ({ article }) => {
  const formatContent = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <article className={styles.articleContent}>
      <div className={styles.contentContainer}>
        {/* 文章介绍 */}
        <div className={styles.introduction}>
          <p>{formatContent(article.content.introduction)}</p>
        </div>

        {/* 文章主要内容段落 */}
        {article.content.sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <p className={styles.sectionContent}>{formatContent(section.content)}</p>
          </div>
        ))}

        {/* 结论部分包含图片 */}
        {article.content.conclusion && (
          <div className={styles.conclusion}>
            {article.content.conclusion.image && (
              <div className={styles.conclusionImage}>
                <img src={article.content.conclusion.image} alt="文章配图" />
              </div>
            )}
            <div className={styles.conclusionContent}>
              <p>{formatContent(article.content.conclusion.content)}</p>
            </div>
          </div>
        )}

        {/* 分割线 */}
        <div className={styles.divider}></div>
      </div>
    </article>
  );
};
