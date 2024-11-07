import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/174128438?v=4',
      name: 'Joao Vitor',
      role: 'Estudante'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir um projeto' },
      { type: 'link', content: 'https://github.com/jvmarinho061' },
    ],
    publishedAt: new Date('2024-10-18 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/38257283?v=4',
      name: 'Lukinhas',
      role: 'Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Opa, projetinho novo em flutter' },
      { type: 'paragraph', content: 'Montando uma pokedex com uso de API' },
      { type: 'link', content: 'https://github.com/Lucasmaia435' },
    ],
    publishedAt: new Date('2024-10-23 14:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
