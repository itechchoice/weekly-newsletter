import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function NotFoundContent() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      
      <h2 className={styles.subtitle}>
        哎呀，这个页面好像走丢了...
      </h2>
      
      <p className={styles.description}>
        可能是链接错误，或者这个页面已经搬家了。
        <br />
        别担心，让我们一起回到首页吧！
      </p>
      
      <div className={styles.buttonWrapper}>
        <Link to="/" className={styles.button}>
          🏠 回到首页
        </Link>
      </div>
    </main>
  );
}
