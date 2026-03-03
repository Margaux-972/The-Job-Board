const Job = ({ city, className, contractType, country, title }) => {
  return (
    <article className={className}>
      <h2>{title}</h2>
      <div>
        <span>{contractType} -</span>
        <span>{country} -</span>
        <span>{city}</span>
      </div>
    </article>
  );
};

export default Job;
