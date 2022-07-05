import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

import Card from '../components/Card';

import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/slices/repoSlices'

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const { loading, repos }  = useSelector( state => state.repos )

  return (
    <div className={styles.container}>
      {repos.map(item => (
        <Card>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <h3>{item.name}</h3>
            <p className={styles.buttonPublic}>{item.private ? 'Private' : 'Public'}</p>
          </div>
          <p>{item.language}</p>
        </Card>
      ))}
    </div>
  )
}
