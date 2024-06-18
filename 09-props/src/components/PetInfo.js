function PetInfo(props) {
    //деструктуризация объекта
    const { animal, age } = props;
    console.log(props);
    return (
        <h1>
            My {animal} is {age} years old
        </h1>
    );
}
export default PetInfo;
