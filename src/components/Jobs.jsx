import Job from "./Job";

const Jobs = () => {
  return (
    <main>
      <Job
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        city="Sydney"
        country="Australia"
        className="red"
      />
      <Job
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        city="Pantin"
        country="France"
        className="green"
      />
      <Job
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        city="Paris"
        country="France"
        className="yellow"
      />
      <Job
        title="Chef de Projets"
        contractType="CDD"
        city="Paris"
        country="France"
        className="blue"
      />
      <Job
        title="Développeur React.js"
        contractType="CDI"
        city="Paris"
        country="France"
        className="pink"
      />
      <Job
        title="Sales Assocciate Stockholm"
        contractType="CDI"
        city="Stockholm"
        country="Suède"
        className="red"
      />
      <Job
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        city="Crans-Montana"
        country="Suisse"
        className="green"
      />
      <Job
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        city="New York"
        country="USA"
        className="yellow"
      />
      <Job
        title="Infirmier (H/F)"
        contractType="CDI"
        city="Paris"
        country="Pantin"
        className="blue"
      />
    </main>
  );
};

export default Jobs;
