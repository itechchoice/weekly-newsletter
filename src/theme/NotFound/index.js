import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="页面走丢了">
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 200px)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        {/* 可爱的 404 插图 - 放大镜动画 */}
        <div
          style={{
            fontSize: '6rem',
            marginBottom: '1rem',
            animation: 'bounce 2s infinite',
          }}
        >
          🔍
        </div>
        
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            margin: '0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </h1>
        
        <h2
          style={{
            fontSize: '1.5rem',
            color: 'var(--ifm-color-emphasis-600)',
            marginTop: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          哎呀，这个页面好像走丢了...
        </h2>
        
        <p
          style={{
            color: 'var(--ifm-color-emphasis-500)',
            maxWidth: '400px',
            marginBottom: '2rem',
          }}
        >
          可能是链接错误，或者这个页面已经搬家了。
          <br />
          别担心，让我们一起回到首页吧！
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
          >
            🏠 回到首页
          </Link>
        </div>
        
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </main>
    </Layout>
  );
}
