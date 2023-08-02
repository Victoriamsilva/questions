import { Card, CardActions, CardContent } from "@mui/material";
import Link from "../link";

interface CardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  variant: "primaryCard" | "secondaryCard";
}

export default function BasicCard({
  title,
  description,
  link,
  linkText,
  variant,
}: CardProps) {
  return (
    <Card className={variant}>
      <CardContent>
        <h1>{title}</h1>
        <p>{description}</p>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Link href={link}>
          <button className="primaryButton">{linkText}</button>
        </Link>
      </CardActions>
    </Card>
  );
}
