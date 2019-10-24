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
      <p>My blog</p>
      <BlogLink id="hello-nextjs" />
      <BlogLink id="learn-nextjs" />
      <BlogLink id="deploy-nextjs" />
    </Layout>
  );
};

export default Index;
