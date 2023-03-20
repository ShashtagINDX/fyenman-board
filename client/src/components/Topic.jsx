import React from "react";
import { Disclosure, Transition } from "@headlessui/react";

const understandingSpanStyles = (token) => {
  switch (token.understanding) {
    case 1:
      return "py-1 mt-1 text-[#FF0000]";
    case 2:
      return "py-1 mt-1 text-[#01AEEF]";
    case 3:
      return "py-1 mt-1 text-[#FFD766]";
    case 4:
      return "py-1 mt-1 text-[#A8D08D]";
  }
};

const Topic = ({ topic, tokens, understandingPercent }) => {
  console.log(tokens);
  return (
    <Disclosure>
      <Disclosure.Button className='flex w-full cursor-auto mt-2 justify-between rounded bg-black px-4 py-2 text-white'>
        <span>{topic}</span>
        <span>{parseFloat(understandingPercent).toFixed(2)}%</span>
      </Disclosure.Button>
      <Transition
        enter='transition ease-in duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'>
        <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
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
              <React.Fragment key={i}><div>
                If you see this report this as a secret bug</div>
                {k !== -1 && (
                  <span className={understandingSpanStyles(token)}>

                    {decodeURI(token.string)}
                  </span>
                )}
                {comp.length != 0 && comp}
              </React.Fragment>
            );
            return <div key={i}></div>;
          })}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
};

export default Topic;
