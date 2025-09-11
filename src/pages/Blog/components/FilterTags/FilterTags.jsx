import React, { useState } from 'react';
import styles from './FilterTags.module.scss';

const tags = [
  { id: 'latest', label: '最新', active: true },
  { id: 'ecommerce', label: '独立站运营', active: false },
  { id: 'architecture', label: '技术架构', active: false },
  { id: 'ux', label: '用户体验', active: false },
  { id: 'performance', label: '性能优化', active: false },
];

export const FilterTags = () => {
  const [activeTags, setActiveTags] = useState(tags);

  const handleTagClick = (tagId) => {
    setActiveTags(prev => 
      prev.map(tag => ({
        ...tag,
        active: tag.id === tagId
      }))
    );
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterTags}>
        {activeTags.map(tag => (
          <button
            key={tag.id}
            className={`${styles.tag} ${tag.active ? styles.active : ''}`}
            onClick={() => handleTagClick(tag.id)}
          >
            {tag.label}
          </button>
        ))}
      </div>
    </div>
  );
};
