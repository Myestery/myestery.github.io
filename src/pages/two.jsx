// import "@/styles/globals.css";

import { useState } from "react";

// import Head from "next/head";
// import Layout from "@/layouts/index.jsx";

export default function Two({}) {
  const [boxes, setBoxes] = useState([1, 2, 3, 4]);

  return (
    <div>
      <button>Add Box</button>
      <div className='flex gap-2'>
        {boxes.map((i, x) => (
          <div>
            <div className='px-5 py-5 text-2xl border-white border'>
              {i + 5}
            </div>
            <button className='text-sm text-red-400 '>Remove </button>
          </div>
        ))}
      </div>

      {/* <div style={{ "position": "relative", "paddingBottom": "57.324840764331206%", "height": "0" }}><iframe src="https://www.loom.com/embed/5daf58cceadd47cb87e667b4974f4f77?sid=d9b0b3e1-f218-484a-b491-6231d2f54a07" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}></iframe></div> */}

{/* <iframe width="640" height="367" src="https://www.loom.com/embed/5daf58cceadd47cb87e667b4974f4f77?sid=7de69c1c-d887-4afc-815f-7fa7a6698ef3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> */}
    </div>
  );
}
