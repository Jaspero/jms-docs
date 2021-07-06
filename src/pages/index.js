import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './index.module.scss';
import '../css/modular/_modular.scss';

// import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <div className={clsx('w-full p-a-m', styles['layout-container'])}>
      <nav className={clsx('w-full flex jc-between ai-center', styles.nav)}>
        <b>JMS</b>
        <div>
          <Link className={clsx('button', styles['clear-button'])} to='/docs/intro'>Docs</Link>
          <Link className='button m-x-xs' to='https://github.com/Jaspero/jms'>GitHub</Link>
        </div>
      </nav>

      <section className={clsx('flex', styles['section-1'])}>
        <div className='flex-1 flex fd-col jc-center'>
          <h3 className='m-a-s'>Dev-friendly CMS</h3>

          <p className={clsx('m-a-s', styles.description)}>JMS is a Content Management System based on Angular that is
            fully configurable through JSON schemas.</p>
        </div>
        <div className='flex-1 m-t-m'>
          <svg width='500' height='500' viewBox='0 0 831 866' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M613.28 71.7119L616.973 58.3499C617.506 58.497 618.057 58.1848 618.204 57.6525L622.43 42.3628C622.634 41.6267 623.068 41.064 623.615 40.6904C624.036 40.4028 624.168 39.8499 623.94 39.4077C624.188 39.3174 624.443 39.251 624.703 39.2098C624.719 39.707 625.103 40.1258 625.611 40.1723C626.271 40.2327 626.924 40.5134 627.46 41.0576L638.588 52.3627C638.975 52.7563 639.608 52.7613 640.002 52.3739L649.727 62.2536C649.333 62.6411 649.328 63.2742 649.716 63.6678L671.972 86.278C672.359 86.6716 672.992 86.6766 673.386 86.2892L683.111 96.1689C682.717 96.5564 682.712 97.1895 683.1 97.5831L705.356 120.193C705.743 120.587 706.376 120.592 706.77 120.204L716.495 130.084C716.101 130.472 716.096 131.105 716.484 131.498L738.74 154.109C739.127 154.502 739.76 154.507 740.154 154.12L749.879 164C749.485 164.387 749.48 165.02 749.868 165.414L772.124 188.024C772.511 188.418 773.144 188.423 773.538 188.035L783.263 197.915C782.869 198.302 782.864 198.935 783.252 199.329L805.508 221.939C805.895 222.333 806.528 222.338 806.922 221.95L816.647 231.83C816.253 232.218 816.248 232.851 816.636 233.244L827.764 244.549C828.3 245.094 828.57 245.751 828.62 246.411C828.658 246.92 829.071 247.311 829.568 247.335C829.523 247.594 829.452 247.849 829.358 248.094C828.919 247.86 828.365 247.983 828.07 248.4C827.688 248.941 827.119 249.366 826.379 249.558L811.025 253.542C810.49 253.681 810.169 254.227 810.308 254.761L796.89 258.244C796.751 257.709 796.205 257.388 795.67 257.527L764.961 265.496C764.427 265.635 764.106 266.181 764.245 266.715L750.826 270.197C750.687 269.663 750.141 269.342 749.607 269.481L718.898 277.45C718.363 277.589 718.042 278.134 718.181 278.669L704.763 282.151C704.624 281.617 704.078 281.296 703.543 281.434L672.834 289.404C672.3 289.542 671.979 290.088 672.118 290.623L658.699 294.105C658.56 293.57 658.014 293.249 657.48 293.388L626.771 301.357C626.236 301.496 625.915 302.042 626.054 302.577L612.635 306.059C612.497 305.524 611.951 305.203 611.416 305.342L580.707 313.311C580.173 313.45 579.852 313.996 579.991 314.53L566.572 318.013C566.433 317.478 565.887 317.157 565.353 317.296L549.998 321.28C549.259 321.472 548.555 321.378 547.958 321.091C547.498 320.87 546.953 321.032 546.684 321.45C546.482 321.281 546.297 321.093 546.131 320.888C546.554 320.626 546.724 320.084 546.511 319.621C546.233 319.019 546.15 318.313 546.353 317.577L550.58 302.288C550.727 301.755 550.415 301.204 549.882 301.057L553.576 287.695C554.108 287.842 554.659 287.53 554.806 286.998L563.259 256.418C563.406 255.886 563.094 255.335 562.562 255.188L566.255 241.826C566.788 241.973 567.339 241.661 567.486 241.129L575.939 210.549C576.086 210.017 575.774 209.466 575.241 209.319L578.935 195.957C579.467 196.104 580.018 195.792 580.165 195.26L588.618 164.68C588.765 164.148 588.453 163.597 587.921 163.45L591.614 150.088C592.147 150.235 592.698 149.923 592.845 149.391L601.298 118.811C601.445 118.279 601.133 117.728 600.6 117.581L604.294 104.219C604.826 104.366 605.377 104.054 605.524 103.522L613.977 72.9422C614.124 72.4099 613.812 71.859 613.28 71.7119Z'
              stroke='white' strokeOpacity='0.5' strokeWidth='5' strokeLinecap='round' strokeDasharray='32 16' />
            <rect x='373.63' y='352.366' width='374.527' height='374.527' rx='3' transform='rotate(30 373.63 352.366)'
                  stroke='white' strokeOpacity='0.5' strokeWidth='5' strokeLinecap='round' strokeDasharray='32 16' />
            <rect x='222.466' y='1.36603' width='255.29' height='255.29' rx='127.645'
                  transform='rotate(60 222.466 1.36603)' stroke='white' strokeOpacity='0.5' strokeWidth='5'
                  strokeLinecap='round' strokeDasharray='32 16' />
          </svg>
        </div>
      </section>
    </div>
  );
  // return (
  //   <header className={clsx('hero hero--primary', styles.heroBanner)}>
  //     <div className="container">
  //       <h1 className="hero__title">{siteConfig.title}</h1>
  //       <p className="hero__subtitle">{siteConfig.tagline}</p>
  //       <div className={styles.buttons}>
  //         <Link
  //           className="button button--secondary button--lg"
  //           to="/docs/intro">
  //           Docusaurus Tutorial - 5minutes ⏱️
  //         </Link>
  //       </div>
  //     </div>
  //   </header>
  // );
}

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <HomepageHeader />
    // <Layout
    //   title={`Overview`} //  ${siteConfig.title}
    //   description="Description will go into a meta tag in <head />">
    //   <HomepageHeader />
    //   <main>
    //     <HomepageFeatures />
    //   </main>
    // </Layout>
  );
}
