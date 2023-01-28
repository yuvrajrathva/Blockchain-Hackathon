import IssueTokensABI from "./contract/IssueTokens.json";
import IssueTokensABIdbg from "./contract/IssueTokens.dbg.json";
import TokenStudentsABI from "./contract/TokenStudents.json";
import { Route, Routes } from "react-router-dom";
import {useState, useEffect} from 'react';
// import { ethers } from "ethers";
import Role from "./Role";
import Error from "./Error";
import Administrator from "./components/Administrator";
import Admin from "./components/Admin";
import Student from "./components/Student";
import Signup from "./components/signup";
import Home from "./components/home";
import './App.css';
import Web3 from 'web3';
import TokenStudent from './contract/TokenStudents.json';
const getWeb3 = () =>{
  return new Web3('');
}
const getContract = async web3 => {
  const networkId = await web3.eth.net.getId();
  const network =  TokenStudent.network[networkId];
  return new web3.eth.Contract(
    TokenStudent.abi,
    network && network.address
  )
}



function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      // console.log(IssueTokensABI);
      const contractAddress = "0x02751BF6ea56E64FB10312929B04270B471AED11";
      const contractABI = TokenStudentsABI.abi;
      // const contractABI = JSON.stringify(IssueTokensABI)
      // console.log(toString(IssueTokensABI));
      // console.log(abi.abi);
      // console.log(toString(abi))
      // console.log(abi)
      // console.log(JSON.stringify(IssueTokensABI))
      // const contractABI = abi.abi;
      try {
        const { ethereum } = window;
        console.log(ethereum)

        // if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          // window.ethereum.on("chainChanged", () => {
          //   window.location.reload();
          // });

          // window.ethereum.on("accountsChanged", () => {
          //   window.location.reload();
          // });
          console.log(contractABI)
          // const provider = new ethers.providers.Web3Provider(ethereum);
          // const signer = provider.getSigner();
          // const contract = new ethers.Contract(
          //   contractAddress,
          //   contractABI,
          //   signer
          // );
          setAccount(account);
          // setState({ provider, signer, contract });
        // } else {
          // alert("Please install metamask");
        // }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state)





  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Role />} />
        <Route path="/*" element={<Error />} />  
        <Route path="/administrator" element={<Administrator />} />  
        <Route path="/admin" element={<Admin />} />  
        <Route path="/student" element={<Student />} />  
      </Routes>
      {/* <Home state={ state } /> */}
      {/* <Signup state={state} /> */}
    </div>
  );
}

export default App;
