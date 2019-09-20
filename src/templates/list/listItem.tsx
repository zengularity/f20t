import * as React from 'react';
import { Offices } from '../../shared/models/offices';
import styles from './listitem.module.scss'
import { ReactComponent as LocationIcon } from '../../styles/icons/location-icon.svg';
import { ReactComponent as LanguageIcon } from '../../styles/icons/language-icon.svg';
import { ReactComponent as EmployesIcon } from '../../styles/icons/employes-icon.svg';
type Props = {
  data: Offices
}

const ListItem: React.FC<Props> = ({data}) => {
  return (
    <div className={styles.container}>
      <img className={styles.fit} src={`${process.env.PUBLIC_URL}/${data.image_url}`} alt={data.name} />
      <div className={styles.bottomDescription}>
        <h1 className={styles.title}>{data.name}</h1>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.row}>
          <div>
            {(data.location) &&
              <div className={styles.address}>
                <LocationIcon />
                <div>
                  <p className={styles.locationText}>{data.location.number} {data.location.address}</p>
                  <p className={styles.locationText}>{data.location.postal_code}</p>
                </div>
              </div>
            }
          </div>
          <div>
            <span className={styles.locationText}><EmployesIcon /> {data.employees_count}</span>
            <span style={{marginLeft: "5px"}} className={styles.locationText}>
            {(data.location) &&
              <>
              <LanguageIcon />
              {data.location.language.map((lang, index, tab) => 
              `${lang} ${(index+1 < tab.length) ? ' / ' : ''}`
              )
              }
              </>
            }
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ListItem;
