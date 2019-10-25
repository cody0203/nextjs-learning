import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";
import Markdown from "react-markdown";

const Show = props => {
  return (
    <Layout>
      <div className="markdown">
        <Markdown
          source={`<h1>${props.show.name}</h1>
      <p>${props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
      <div class="show-image"><img src=${props.show.image.medium} /><div>`}
          escapeHtml={false}
        />
      </div>

      <style jsx global>
        {
          `
            .markdown h1, .markdown p {
              font-family: 'Arial';
            }

            .markdown h1 {
              text-align: center;
            }

            .markdown p {
              color: #333;
            }

            .markdown .show-image {
              text-align: center;
            }
          `
        }
      </style>
    </Layout>
  );
};

Show.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Show;
