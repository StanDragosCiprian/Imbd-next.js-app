export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();

    console.log(todos);
    };

const Fec = () => {

    return (
        <>

        </>
    )
}

export default Fec;