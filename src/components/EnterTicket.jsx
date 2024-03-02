export default function EnterTicket() {
  return (
    <div className="border p-5">
      <h3>Enter information here:</h3>
      <form>
        <div>
          <label htmlFor="userName">Name:</label>
          <input type="text" id="userName" className="border mb-5 mt-5" />
        </div>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input type="text" id="userEmail" className="border" />
        </div>
        <div>
          <label htmlFor="priority">Priority: </label>
          <input type="checkbox" id="priority" />
        </div>
        <label htmlFor="os">Operating System: </label>
        <input type="text" id="os" className="border" />
        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            rows={4}
            cols={30}
            className="border mt-5"
            id="notes"
          ></textarea>
          <div>
            <button className="border rounded-md m-2 p-1 hover:bg-slate-200">
              Submit
            </button>
            <button className="border rounded-md p-1 hover:bg-slate-200">
              Clear Form
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
