export default function ShowTicket() {
  return (
    <div className="border p-5">
      <h3 className="mb-5">Tickets:</h3>
      <ul>
        <li className="border-b-4 border p-1">
          <div className="flex justify-between mb-3">
            <p>Name</p>
            <p>Email</p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            ducimus animi facilis distinctio maxime modi saepe aperiam ipsa.
          </p>
          <button className="bg-yellow-300 p-1 mr-2">edit</button>
          <button className="bg-red-300 p-1">delete</button>
        </li>
      </ul>
    </div>
  );
}
