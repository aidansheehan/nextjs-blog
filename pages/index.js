import Head                       from 'next/head'
import Layout, { siteTitle }      from '../components/layout'
import utilStyles                 from '../styles/utils.module.css';
import { getSortedPostsData }     from '../lib/posts';
import Link                       from 'next/link';
import Date                       from '../components/date';

export const getStaticProps = async () => {
  
  const allPostsData = getSortedPostsData();
  
  return {
    props: {
      allPostsData,
    }
  }
}

const Home = ({ allPostsData }) => {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          I am a full stack web developer. I like to use React for front end and Node.js or Django to build backends, though I am also familiar with Angular.
        </p>
        <p>
          (This is a sample website build by following <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} >
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ) )}
        </ul>
      </section>

    </Layout>
  )
}

export default Home;
