import { ethers } from "ethers";
const Signup = ({ state }) => {
  const id = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const address = document.querySelector("#address").value;
    const graduation_year = document.querySelector("#graduationYear").value;
    console.log(address, graduation_year, contract);
    const id_generate = await contract.issueIdCard(address,graduation_year);
    await id_generate.wait();
    console.log("ID generated");
    // const amount = { value: ethers.utils.parseEther("0.001") };
    // const transaction = await contract.buyChai(name, message, amount);
    // await transaction.wait();
    // console.log("Transaction is done");
  };
  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={id}>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Your Wallet Address"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Graduation Year</label>
            <input
              type="number"
              className="form-control"
              id="graduationYear"
              placeholder="Enter Your year of graduation"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            // disabled={!state.contract}
          >
            signup
          </button>
        </form>
      </div>
    </>
  );
};
export default Signup;