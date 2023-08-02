import NextLink from "next/link";

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <span>{children}</span>
    </NextLink>
  );
}
