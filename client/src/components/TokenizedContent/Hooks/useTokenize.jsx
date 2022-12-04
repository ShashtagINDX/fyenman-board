import { useState } from "react";
import { isBracketClose, isBracketOpen, isDelimiter } from "../utils";

const useTokenize = (content) => {
  const [tokens, setTokens] = useState(() => {
    const data = [];
    let s = "";
    for (let i = 0; i < content.length; i++) {
      if (isDelimiter(content[i])) {
        let j = i;
        while (isDelimiter(content[j]) || content[j] == " ") {
          s += content[j];
          j++;
        }
        i = j - 1;
        data.push({ string: encodeURI(s), understanding: 1 });
        s = "";
      } else if (isBracketOpen(content[i])) {
        console.log(content[i]);
        if (s != "") data.push({ string: s, understanding: 1 });
        s = "";
        s += content[i];
        let j = i + 1;
        for (; j < content.length; j++) {
          if (isBracketClose(content[j])) {
            s += content[j];
            j++;
            break;
          } else {
            s += content[j];
          }
        }
        while (isDelimiter(content[j])) {
          s += content[j];
          j++;
        }
        data.push({ string: encodeURI(s), understanding: 1 });
        s = "";
        i = j;
      } else {
        s += content[i];
      }
    }
    if (s != "") data.push({ string: encodeURI(s), understanding: 1 });
    return data;
  });
  return { tokens, setTokens };
};

export default useTokenize;
