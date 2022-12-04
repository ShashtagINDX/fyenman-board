import { Popover, Transition } from "@headlessui/react";

const understandingBtnStyles = (token) => {
  switch (token.understanding) {
    case 1:
      return "bg-slate-100 py-1 px-1 inline-block mt-1 border-r-2 text-[#FF0000]";
    case 2:
      return "bg-slate-100 py-1 px-1 inline-block mt-1 border-r-2 text-[#01AEEF]";
    case 3:
      return "bg-slate-100 py-1 px-1 inline-block mt-1 border-r-2 text-[#FFD766]";
    case 4:
      return "bg-slate-100 py-1 px-1 inline-block mt-1 border-r-2 text-[#A8D08D]";
  }
};
const understandingOptnStyles = (point) => {
  switch (point) {
    case 1:
      return "cursor-pointer w-full  rounded my-2 bg-[#FF0000] text-center py-2";
    case 2:
      return "cursor-pointer w-full  rounded my-2 bg-[#01AEEF] text-center py-2";
    case 3:
      return "cursor-pointer w-full  rounded my-2 bg-[#FFD766] text-center py-2";
    case 4:
      return "cursor-pointer w-full  rounded my-2 bg-[#A8D08D] text-center py-2";
  }
};

const options = [
  { label: "Understood", point: 4 },
  { label: "Somewhat Understood", point: 3 },
  { label: "Not Clear", point: 2 },
  { label: "What Rubbish", point: 1 },
];

const Token = ({ token, index, setTokens }) => {
  return (
    <Popover className='relative inline-block'>
      <Popover.Button className={understandingBtnStyles(token)}>
        {decodeURI(token.string)}
      </Popover.Button>
      <Transition
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'>
        <Popover.Panel className='absolute z-[100] inline rounded bottom-10 w-[20rem] text-white bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-7 py-5'>
          {options.map((option) => (
            <div
              key={option.point}
              className={understandingOptnStyles(option.point)}
              onClick={() => {
                setTokens((prev) => {
                  const res = [...prev];
                  res[index] = {
                    string: prev[index].string,
                    understanding: option.point,
                  };
                  return res;
                });
              }}>
              {option.label}
            </div>
          ))}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Token;
