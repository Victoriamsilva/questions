import BasicCard from "@/components/card";

export default function Home() {
  const cards = [
    {
      title: "Questões",
      text: "Prepare-se de forma personalizada respondendo ao banco de questões!",
      action: "/questions",
      linkText: "Começar",
    },
    {
      title: "Personalizar",
      text: "",
      action: "/config",
      linkText: "Acessar",
    },
  ];
  return (
    <>
      {cards.map((card, index) => (
        <BasicCard
          key={index}
          variant="primaryCard"
          title={card.title}
          description={card.text}
          link={card.action}
          linkText={card.linkText}
        />
      ))}
    </>
  );
}
