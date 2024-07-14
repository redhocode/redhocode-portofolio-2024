import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyIcon } from "lucide-react";

type Props = {
  code: string;
};
function CopyButton({ code }: Props) {
  return (
    <button className="CopyButtonClass">
      <CopyToClipboard text={code} onCopy={() => alert("Copied!")}>
        <div>
          <CopyIcon />
        </div>
      </CopyToClipboard>
    </button>
  );
}

export default CopyButton;
