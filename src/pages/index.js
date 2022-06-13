import { Link } from "react-router-dom";

const Index = (props) => {
  const [newForm, setNewForm] = useState({
    name: "",
    title: "",
    image: "",
  });

  const handleChange = (event) => {};

  const handleSubmit = (event) => {};

  const loaded = () => {
    return props.people.map((person) => (
      <div key={person._id} className="person">
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        {person.image && <img src={person.image} alt={person.name} />}
        <h3>{person.title}</h3>
      </div>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form>
        <input
          value={newForm.name}
          name="name"
          onChange={handleChange}
          type="text"
        />
        <input
          value={newForm.title}
          name="title"
          onChange={handleChange}
          type="text"
        />
        <input
          value={newForm.image}
          name="iamge"
          onChange={handleChange}
          type="text"
        />
        <input type="submit" value="Create Person" />
      </form>
      {props.people ? loaded : loading()}
    </section>
  );
};

export default Index;
