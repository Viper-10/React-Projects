import projects from "../projects.json";
import Card from "../Components/Card";

const HooksPage = () => {
  const cards = projects.map((card, index) => {
    return <Card key={index} {...card} />;
  });

  return (
    <div className="container">
      <div className="card-list flex-equal-splits"> {cards}</div>
    </div>
  );
};

export default HooksPage;
