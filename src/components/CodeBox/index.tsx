import {
  vs,
  vs2015,
  arta,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CodeBlock from "./CodeBlock";
const code = `
function success(dedication, persistence, passion) {
  dedication += 10; // Dedicate yourself
  persistence += 10; // Be persistent
  passion = true; // Have passion

  if (passion === true) {
      var magic = dedication + persistence;
      return magic;
  } else {
      var magic = 0;
      return magic;
  }
}
`;
export default function CodeBox() {
  return (
    <>
      <CodeBlock style={arta} code={code} language={"bash"} />
    </>
  );
}
