import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Token from "../Token";
import useTokenize from "./Hooks/useTokenize";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../common/Modal";

const TokenizedContent = ({ content, topic, setError }) => {

  const [modalOpen, setModalOpen] = useState(false)

  const { tokens, setTokens } = useTokenize(content);
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!topic.length) {
      setError("* Topic is required ");
      return;
    }
    try {
      dispatch({ type: "loading", payload: true });
      await axios.post("http://localhost:8000/add-topic", {
        topic,
        token: localStorage.getItem("token"),
        tokens,
      });
      dispatch({ type: "loading", payload: false });
      navigate("/dashboard");
    } catch (e) {
      dispatch({ type: "loading", payload: false });
      console.log(e);
    }
  };

  return (
    <>
      {modalOpen ? <Modal yes={handleSave} /> : null}

      <div className='mb-3  '>
        {tokens.map((token, i) => {
          let count = 0;
          let k = decodeURI(token.string).length - 1;
          for (; k >= 0; k--) {
            if (decodeURI(token.string)[k] != "\n") {
              break;
            } else {
              count++;
            }
          }

          let comp = [];
          while (count--) {
            comp.push(<br key={count} />);
          }

          return (
            <React.Fragment key={i}>
              {k !== -1 && (
                <Token setTokens={setTokens} index={i} token={token} />
              )}
              {comp.length != 0 && comp}
            </React.Fragment>
          );
        })}

        {/* <pre>{JSON.stringify(tokens, undefined, 2)}</pre> */}
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className='bg-black text-white px-6 py-2 rounded'>
        Save
      </button>
    </>
  );
};

export default TokenizedContent;
