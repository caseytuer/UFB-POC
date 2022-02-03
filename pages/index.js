import styles from '../styles/Home.module.css'
import Image from 'next/image'
// import greenCheck from '../public/green-check.png'

export default function Home() {

  const upperTitle = 'WWWWWWWWWWWWW';
  const mainTitle = 'WWWWWWWWWWWWWWWWWWWWWWWWWW';
  const subTitle = 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW';
  const bulletContent1 = 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW';
  const bulletContent2 = 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW';
  const bulletContent3 = 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW';
  const CTA1Text = 'Apply Now';
  const CTA2Text = 'Apply Now';
  const CTA3Text = 'Learn More';
  const desktopImgPath = 'images/125apy-343.png';
  const mobileImgPath = 'images/125apy-588.png';

  return (
    <>
    <div className={styles.container}>
      <div className={styles.twoUpBlockContent}>
        <div className={styles.upperTitle}>
          {upperTitle}
        </div>
        <div className={styles.mainTitle}>
          {mainTitle}
        </div>
        <div className={styles.subTitle}>
          {subTitle}
        </div>
        <div className={styles.bulletContainer}>
          <div className={styles.bulletCheck}>
            <img src="images/greenCheck1.png" alt="check mark"/>
          </div>
          <div className={styles.bulletContent}>
            {bulletContent1}
          </div>
        </div>
        <div className={styles.bulletContainer}>
          <div className={styles.bulletCheck}>
            <img src="images/greenCheck1.png" alt="check mark"/>
          </div>
          <div className={styles.bulletContent}>
          {bulletContent2}
          </div>
        </div>
        <div className={styles.bulletContainer}>
          <div className={styles.bulletCheck}>
            <img src="images/greenCheck1.png" alt="check mark"/>
          </div>
          <div className={styles.bulletContent}>
          {bulletContent3}
          </div>
        </div>
        <div className={styles.applyNowContainer}>
          <a href="#">
            <span className={styles.applyNowText}>{CTA1Text}</span>
            <span className={styles.applyNowPointer}><img src="images/bluePointer.png"/></span>
          </a>
        </div>
        <div className={styles.applyNowContainer}>
          <a href="#">
            <span className={styles.applyNowText}>{CTA2Text}</span>
            <span className={styles.applyNowPointer}><img src="images/bluePointer.png"/></span>
          </a>
        </div>
        <div className={styles.CTAButtonContainer}>
          <a href="#" className={styles.CTAButton}>
            <span>Button CTA</span>
          </a>
        </div>
        <div className={styles.learnMoreContainer}>
          <div className={styles.learnMoreButton}>
          <a href="#">
              <span className={styles.applyNowText}>{CTA3Text}</span>
              <span className={styles.applyNowPointer}><img src="images/bluePointer.png"/></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="twoUpBlockImg">
    <img srcSet={`${desktopImgPath} 343w,
                 ${mobileImgPath} 588w`}
         sizes="(max-width: 1200px) 343px, 588px" 
         src="images/125apy.png"
         alt="Up to 1.25% APY"/>
    </div>
    </>
  )
}
