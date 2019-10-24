import Link from "next/link";

const linkStype = {
  marginRight: 15
};

export const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStype}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStype}>About</a>
      </Link>
      <Link href="/bat-man-shows">
        <a style={linkStype}>Batman's shows</a>
      </Link>
    </div>
  );
};
