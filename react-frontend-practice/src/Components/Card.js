import "../CSS/cards.css";
import PropTypes from "prop-types";
const Card = ({ title, description, hooks, url }) => {
  const onClickRedirect = () => {
    console.log(`Redirect to ${url}`);
  };

  const hooksFlat = hooks.map((hook, index) => {
    return <span key={index}>{hook}&nbsp;</span>;
  });
  return (
    <div className="card" onClick={onClickRedirect}>
      <div className="card-content">
        <h2 className="mb-1">{title}</h2>
        <p className="mb-2">{description}</p>
        <p className="hooks-used mb-1">Used hooks : {hooksFlat}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hooks: PropTypes.array,
};
export default Card;
