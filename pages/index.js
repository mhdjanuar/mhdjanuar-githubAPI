import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/slices/usersSlices'

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const { loading, users }  = useSelector( state => state.user )

  return (
    <div className={styles.container}>
      {users.map(item => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
