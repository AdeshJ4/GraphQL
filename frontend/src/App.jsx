import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWitUser {
    getTodos {
      id
      title
      completed
      userId
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(query);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h1>Todos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>User ID</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>{todo.userId}</td>
              <td>{todo.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
