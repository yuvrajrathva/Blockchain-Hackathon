// import { ethers } from "ethers";
const Signup = ({state}) => {
    const idCreate = async (i) => {
        i.preventDefault();
        const { contract } = state;
        const address  = document.querySelector("#address").value;
        const graduation_year = document.querySelector("#graduationYear").value;
        console.log(address, graduation_year, contract);
        const id = await contract.issueIdCard(address,graduation_year)
        // await id.wait();
        console.log("id created successfully");
        
        // const amount = { value: ethers.utils.parseEther("0.001") };
        // const transaction = await contract.buyChai(name, message, amount);
        // await transaction.wait();
        // console.log("Transaction is done");
      };


return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={idCreate}>
          <div className="mb-3">
            <label className="form-label">Wallet Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Year Of Graduation</label>
            <input
              type="text"
              className="form-control"
              id="graduationYear"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );


}

export default Signup;