import persons from "../date/persons";
import Person from "./Person";
function Persons() {
    return (
        <div className="cards">
            {persons.map((person) => {
                return <Person {...person} key={person.id} />;
            })}
        </div>
    );
}

export default Persons;
