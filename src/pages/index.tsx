import Head from "next/head";
import Menu from "../components/nav-menu/Menu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Dennis&#39;s Portfolio</title>
        <meta name="description" />
      </Head>

      <main>
        <Menu/>
        <h1>Welcome to my Portfolio</h1>
        <hr />
        <div>
          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mollis dui ornare, ultrices velit in, dictum metus. Donec tincidunt
            dui dolor, sed scelerisque arcu laoreet a. Sed est enim, aliquam
            tempus arcu et, suscipit rutrum metus. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae;
            Vestibulum accumsan auctor egestas. Fusce sapien mauris, porta vel
            vehicula id, laoreet nec risus. Aliquam urna tellus, posuere a risus
            in, aliquam rutrum felis. Proin vel cursus quam. In ultricies
            imperdiet sollicitudin. Donec sit amet nisl nibh. Suspendisse
            pharetra orci a lacus aliquet interdum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mollis dui ornare, ultrices velit in, dictum metus. Donec tincidunt
            dui dolor, sed scelerisque arcu laoreet a. Sed est enim, aliquam
            tempus arcu et, suscipit rutrum metus. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae;
            Vestibulum accumsan auctor egestas. Fusce sapien mauris, porta vel
            vehicula id, laoreet nec risus. Aliquam urna tellus, posuere a risus
            in, aliquam rutrum felis. Proin vel cursus quam. In ultricies
            imperdiet sollicitudin. Donec sit amet nisl nibh. Suspendisse
            pharetra orci a lacus aliquet interdum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mollis dui ornare, ultrices velit in, dictum metus. Donec tincidunt
            dui dolor, sed scelerisque arcu laoreet a. Sed est enim, aliquam
            tempus arcu et, suscipit rutrum metus. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae;
            Vestibulum accumsan auctor egestas. Fusce sapien mauris, porta vel
            vehicula id, laoreet nec risus. Aliquam urna tellus, posuere a risus
            in, aliquam rutrum felis. Proin vel cursus quam. In ultricies
            imperdiet sollicitudin. Donec sit amet nisl nibh. Suspendisse
            pharetra orci a lacus aliquet interdum.
          </p>
        </div>
        <hr />
      </main>
    </div>
  );
}
