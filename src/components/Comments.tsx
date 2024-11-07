import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment:string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {

    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    });
  }

    return (
        <div className={styles.Comment}>
            <Avatar 
            hasBorder={false} 
            src="https://avatars.githubusercontent.com/u/38257283?v=4" 
            alt="" />

            <div className={styles.CommentBox}>
                <div className={styles.CommentContent}>
                  <header>
                    <div className={styles.authorAndTime}>
                        <strong>Lukinhas</strong>
                        <time title="21 de Outubro às 20:29" dateTime="2024-10-21T20:29:30">Cerca de 1h atrás</time>
                    </div>
                    <button  onClick={handleDeleteComment}title="Deletar comentário">
                        <Trash size={20}></Trash>
                    </button>
                  </header>

                  <p>{content}</p>
                </div>
                <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} /> 
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
            </div>
        </div>
    )
}