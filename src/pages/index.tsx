import {renderToString} from "react-dom/server";
import css from "styled-jsx/css";

// This would be the HTML content of a page with a placeholder
const HTML = `
<main>
  <div>&lt;IndexPage /&gt;</div>
  {{placeholder}}
</main>
`;

const placeholderStyles = css.resolve`
  div {
    color: red;
  }
`;

function Placeholder() {
  return (
    <div className={placeholderStyles.className}>
      <div>Placeholder content</div>
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
      {/* Inject styles for the placeholder component after being rendered to string, I'm pretty sure there is a fancier way than this. At least abstracting it in an intermediate component  */}
      {placeholderStyles.styles}
      {/* Render the content */}
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  );
}
