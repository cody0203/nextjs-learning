import Layout from "../components/MyLayout";
import Link from "next/link";

const BlogLink = props => {
  return (
    <li>
      <Link href="/post/[id]" as={`/post/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

const Index = () => {
  return (
    <Layout>
      <h1>My blog</h1>
      <BlogLink id="hello-nextjs" />
      <BlogLink id="learn-nextjs" />
      <BlogLink id="deploy-nextjs" />
      
      <style jsx>
      {
        `
        h1,
        a {
          font-family: 'Arial';
          color: blue
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
        `
      }
      </style>
    </Layout>
  );
};

export default Index;
