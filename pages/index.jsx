import { useState } from "react";
import Meta from "./head";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  // hooks
  var [val, setVal] = useState("hello");
  var [def, setDef] = useState("");
  var [phonetic, setPhonetic] = useState("");
  var [src, setSrc] = useState("");
  var [word, setWord] = useState("");
  var [example, setEx] = useState("");

  const fetchWord = async () => {
    toast.success("Coming Up...");
    try {
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${val}`;
      const res = await fetch(url);
      const data = await res.json();

      setWord(data[0].word);
      setDef(data[0].meanings[0].definitions[0].definition);
      setPhonetic(data[0].phonetic);
      setEx(data[0].meanings[0].definitions[0].example);
      let SRC = data[0].phonetics[0].audio;
      setSrc(`https:${SRC}`);
    } catch (error) {
      setPhonetic("");
      setWord("");
      setDef("oops!! enter a meaningful word");
      setSrc("");
      console.log(error);
    }
  };

  return (
    <>
      <Meta />
      <div className="main font-poppins font-medium text-xl bg-white p-4 rounded-lg shadow-2xl w-main m-4 overflow-hidden">
        <p className="w-full flex justify-center">
          <input
            type="text"
            onChange={(e) => setVal(e.target.value)}
            className="outline-none text-center overflow-hidden"
            placeholder="Enter a Word..."
          />
        </p>
        <p className="w-full flex justify-center">
          <button
            onClick={fetchWord}
            className="text-white p-2 rounded bg-primary m-3"
          >
            Search
          </button>
        </p>

        <div>
          <span>
            {word} <span>{phonetic}</span>
          </span>

          <p className="m-1">{def}</p>
          <p>
            <p>example:</p>
            <p>{example}</p>
          </p>
          <audio src={src} controls></audio>
        </div>
      </div>
      <Footer />
      <Toaster position="top-left" />
    </>
  );
}
