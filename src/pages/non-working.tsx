import {renderToString} from "react-dom/server";

// This would be the HTML content of a page with a placeholder
const HTML = `
<main>
  <div>&lt;IndexPage /&gt;</div>
  {{placeholder}}
</main>
`;

function Placeholder() {
  return (
    <div>
      <div>Placeholder content</div>
      <style jsx>{`
        div {
          color: red;
        }
      `}</style>
    </div>
  );
}

export default function IndexPage() {
  // Replace the placeholder with the rendered Placeholder component
  const content = HTML.replace("{{placeholder}}", renderToString(<Placeholder />));

  return (
    <div>
      <h1>This is an example of renderToString + React components</h1>
      <hr />
      {/* Render the content */}
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  );
}
