import { useRouter } from "next/router";
import Markdown from "react-markdown";

import Layout from "../../components/MyLayout";

const Post = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown
        source={`<h3>This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>,
        and will require the <code>html-parser</code> AST plugin to be loaded,
        in addition to setting the <code class="prop">escapeHtml</code> property to false.</h3>`}
        escapeHtml={false} />
      </div>
      <style jsx global>
        {`
          .markdown {
            font-family: "Arial";
          }

          .markdown a {
            text-decoration: none;
            color: blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}
      </style>
    </Layout>
  );
};

export default Post;
