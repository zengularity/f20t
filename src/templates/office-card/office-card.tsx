import * as React from "react";
import styles from "./office-card.module.scss";
import getCityPhoto from "../../images";
import { Office } from "../../models/offices";
import { ReactComponent as LocationIcon } from "../../styles/icons/location-icon.svg";
import { ReactComponent as LanguageIcon } from "../../styles/icons/language-icon.svg";
import { ReactComponent as EmployesIcon } from "../../styles/icons/employes-icon.svg";

type Props = {
  data: Office;
};

const OfficeCard: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={styles.container}>
        <img
          className={styles.fit}
          src={getCityPhoto(data.location.city)}
          alt={data.name}
        />
        <div className={styles.bottomDescription}>
          <h1 className={styles.title}>{data.name}</h1>
          <p className={styles.description}>{data.description}</p>
          <div className={styles.row}>
            <div>
              {data.location && (
                <div className={styles.address}>
                  <LocationIcon />
                  <div>
                    <p className={styles.locationText}>
                      {data.location.number} {data.location.address}
                    </p>
                    <p className={styles.locationText}>
                      {data.location.postal_code} {data.location.city}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.row}>
              <span className={styles.locationText}>
                <EmployesIcon /> {data.employees_count}
              </span>
              <span
                className={`${styles.locationText} ${styles.locationText_withMargin}`}
              >
                {data.location && (
                  <>
                    <LanguageIcon />
                    {data.location.language.map(
                      (lang, index, tab) =>
                        `${lang} ${index + 1 < tab.length ? " / " : ""}`
                    )}
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeCard;
