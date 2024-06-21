function Wrapper(props) {
    console.log(props);
    const style = {
        backgroundColor: props.color,
        width: "250px",
        padding: "20px",
        margin: "20px auto",
    };
    return (
        <div>
            <h1>Hello from Wrapper</h1>
            <div style={style}>{props.children}</div>
        </div>
    );
}
export default Wrapper;
