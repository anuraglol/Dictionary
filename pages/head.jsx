import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link
        rel="shortcut icon"
        href="./sticky-note-solid.svg"
        type="image/x-icon"
      />
      <title>Dictionary</title>
      <meta
        name="description"
        content="A Web-App to get meaning, example and pronounciation of any word!!"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro:200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,900,900italic"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Meta;
