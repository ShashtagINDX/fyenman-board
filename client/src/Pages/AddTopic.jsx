import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TokenizedContent from "../components/TokenizedContent/TokenizedContent";

const AddTopic = () => {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [tokenized, setTokenized] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    return () => { };
  }, [tokenized]);

  return (
    <div className='grid place-items-center min-h-[100vh]  p-32 bg-black'>
      <div className='max-w-4xl  w-full rounded shadow-lg px-6  py-4 bg-white'>
        <div className='text-3xl capitalize mb-6'>Add topic</div>
        {error && <div className=' text-[#DF2935]  mb-2'>{error}</div>}
        <label className='text-xl'>
          Topic
          <input
            onChange={(e) => setTopic(e.target.value)}
            value={topic}
            type='text'
            className='w-full rounded my-1 mb-3'
          />
        </label>
        {tokenized ? (
          <TokenizedContent
            setError={setError}
            topic={topic}
            content={content}
          />
        ) : (
          <>
            <label className='text-xl'>
              Contemt
              <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                rows='10'
                className='w-full rounded my-1 mb-3'
              />
            </label>
            <button
              onClick={() => {
                if (!content.length) {
                  setError("* Content is required");
                  return;
                }
                setTokenized(true);
              }}
              className='bg-black text-white px-6 py-2 rounded'>
              Tocenize
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddTopic;
