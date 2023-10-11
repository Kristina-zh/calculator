//@ts-ignore
const Card = (props) => {
  const classes = 'rounded-3 shadow-sm ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
