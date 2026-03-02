import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <body>
        <Header title="The Job Board" />
        <main>
          <Jobs
            color="red"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          />
          <Jobs
            color="green"
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
          <Jobs
            color="yellow"
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Jobs
            color="blue"
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Jobs
            color="pink"
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
          <Jobs
            color="red"
            title="Sales Assocciate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
          />
          <Jobs
            color="green"
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans-Montana"
          />
          <Jobs
            color="yellow"
            title="CRM & Data Quality Analyst"
            contractType="CDI"
            country="USA"
            city="New York"
          />
          <Jobs
            color="blue"
            title="Infirmier (H/F)"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </main>
        <Footer tech="React" school="Le Reacteur" signOut="Margaux Mth" />
      </body>
    </>
  );
}

export default App;
