import React from 'react'
import styles from './MyCardBlock.module.scss'

export function ViewMyCardBlock({ attributes }) {
  const { title, content, showCta } = attributes

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardContent}>{content}</p>
      {showCta && (
        <a href="#" className={styles.cardButton}>
          Learn More
        </a>
      )}
    </div>
  )
}
