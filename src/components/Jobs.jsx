const Jobs = (props) => {
  return (
    <div className={props.color}>
      <h2>{props.title}</h2>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Jobs;
