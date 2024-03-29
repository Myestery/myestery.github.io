"use client";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
export function Dropdown({ options, setFunction, open, toggle, className }) {
  // we expect options to be an array of name and value.
  const [selected, setSelected] = useState(options[0]);
  useEffect(() => {
    // select first value
    selectOption(options[0], true);
  }, []);

  const selectOption = (option, noToggle) => {
    setFunction(option);
    setSelected(option);
    if (!noToggle) {
      toggle(!open);
    }
  };

  return (
    <>
      <div className={'inline-flex gap-3 ' + className}>
        <>
          {" "}
          {selected.name}
          {open ? (
            <Image
              src='/img/caret-down.svg'
              width={12}
              height={12}
              alt='Picture of the icon'
              onClick={() => toggle(false)}
            />
          ) : (
            <Image
              src='/img/caret-up.svg'
              width={12}
              height={12}
              alt='Picture of the icon'
              onClick={() => toggle(true)}
            />
          )}
        </>
      </div>
      {open && (
        <div className='absolute z-10 mt-2 w-48 bg-white border-[1.5px] border-[#282828] bg-blacky rounded-3xl shadow-xl px-2'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'>
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => selectOption(option)}
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-b-[#282828]'
                role='menuitem'>
                {option.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default Dropdown;
