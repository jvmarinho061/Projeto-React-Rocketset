import {PencilLine} from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://plus.unsplash.com/premium_photo-1729162773996-68e1c42d77a8?q=50&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/174128438?v=4"/>
                <strong>Joao</strong>
                <span>Web Developer</span>
            </div>

            <footer>
              <a href="#">
                <PencilLine size={20} />
                Editar seu perfil
               </a>
            </footer>
        </aside>
    );
}