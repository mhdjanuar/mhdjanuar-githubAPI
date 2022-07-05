import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

import Card from '../components/Card';

import { useDispatch, useSelector } from 'react-redux'
import { fetchRepos } from '../store/slices/repoSlices'

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos())
  }, [])

  const { loading, repos }  = useSelector( state => state.repos )

  const colorCircle = (language) => {
    let color

    switch(language.toLowerCase()) {
      case 'javascript': 
        color = '#096ada'
        break;

      case 'typescript':
        color = 'orange'
        break;

      case 'html':
        color = 'red'
        break;

      case 'css':
        color = 'yellow'
        break;

      default:
        color = 'gray'
    }

    return color
  }

  return (
    <div className={styles.container}>
      {repos.map(item => (
        <Card key={item.id}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <h3 className={styles.titleGit}>{item.name}</h3>
            <p className={styles.buttonPublic}>{item.private ? 'Private' : 'Public'}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            {item.language && (
              <div className={styles.circle} style={{ backgroundColor: colorCircle(item.language)}} />
            )}
            <p>{item.language}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
