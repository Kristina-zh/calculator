interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  const classes = 'rounded-3 shadow-sm ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
