export default function Header() {
  const Link = (props) => {
    return (
      <a
        href={props.src}
        className="p-2 bg-purple rounded shadow text-white m-2"
        target="blank"
      >
        {props.title}
      </a>
    );
  };
  return (
    <div className="p-4 bg-white rounded-xl shadow-2xl mt-16  flex flex-col text-center text-xl font-source font-semibold">
      <Link src="https://kr-anurag.netlify.app/" title="Anurag" />
      <Link src="https://github.com/kr-anurag" title="Github" />
      <Link src="https://twitter.com/kr_anurag_" title="Twitter" />
      <Link src="https://anuragkr.hashnode.dev/" title="Hashnode" />
    </div>
  );
}
