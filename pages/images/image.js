import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Images() {
  return (
    <Layout home>
      <Head>
        <title>Images</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is just a image example</p>
        <Image
          src="/images/profile.jpg"
          alt="Profile"
          width={3048}
          height={2024}
        />
        <Link href={`/`}>
          <a>Back to home</a>
        </Link>
      </section>
    </Layout>
  );
}
