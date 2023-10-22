import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
   const formatTime = millseconds => {
    const totalSeconds = Math.floor(millseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60; 
    const ms = millseconds % 1000; 

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(ms).padStart(3, '0');

    return (
        <div className={styles.component}>
            <span className={styles.electronicDigit}>{formattedMinutes}</span>
            <span className={styles.electronicColon}>:</span>
            <span className={styles.electronicDigit}>{formattedSeconds}</span>
            <span className={styles.electronicColon}>:</span>
            <span className={styles.electronicDigit}>{formattedMilliseconds}</span>
        </div>
    )
    //const timeString = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
     //return timeString;
   };

//   return (
//     <div className={styles.component}>
//        {formatTime(time)}
//     </div>
//   );
   return formatTime(time);
};

export default FormattedTime;