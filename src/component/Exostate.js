// import React, { Component } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// export default class index extends Component {
//   state = {
//     solde: 0,
//     recharge: 0,
//     virement: 0,
//     versement: 0,
//   };
//   render() {
//     return (
//       <div>
//         <h2>Bienvenue dans l'espace clientdans votre banque</h2>
//         <p>{`Votre solde est : ${this.state.solde} $ `}</p>
//         <h3>NOS SERVICES</h3>

//         <p>Recharger votre compte</p>
//         <input
//           value={this.state.versement}
//           onChange={(e) => {
//             this.setState({ versement: parseFloat(e.target.value) });
//           }}
//         ></input>
//         <button
//           onClick={() => {
//             this.setState({
//               solde: this.state.solde + this.state.versement,
//               versement: 0,
//             });
//             toast("versement effectué avec succes");
//           }}
//         >
//           Recharger
//         </button>

//         <p>Virement</p>
//         <input
//           value={this.state.virement}
//           onChange={(e) => {
//             this.setState({ virement: parseFloat(e.target.value) });
//           }}
//         ></input>
//         <button
//           onClick={() =>
//             this.setState({
//               solde: this.state.solde - this.state.virement,
//               virement: 0,
//             })
//           }
//         >
//           Recharger
//         </button>

//         <p>Recharger votre telephone</p>
//         <input
//           value={this.state.recharge}
//           onChange={(e) => {
//             this.setState({ recharge: parseFloat(e.target.value) });
//           }}
//         ></input>
//         <button
//           onClick={() =>
//             this.setState({
//               solde: this.state.solde + this.state.recharge,
//               recharge: 0,
//             })
//           }
//         >
//           Recharger
//         </button>
//         <ToastContainer position="top-right" />
//       </div>
//     );
//   }
// }

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Index = () => {
  const [versement, setVersement] = useState(0);
  const [solde, setSolde] = useState(0);
  const [virement, setVirement] = useState(0);

  return (
    <div>
      <h2>Bienvenue dans l'espace clientdans votre banque</h2>
      <p> {`Votre solde est : ${solde} $ `}</p>
      <h3>NOS SERVICES</h3>
      <p>Recharger votre compte</p>
      <input onChange={(e) => setVersement(e.target.value)}></input>
      <button
        onClick={() => {
          setSolde(parseFloat(solde) + parseFloat(versement));
          toast("Wow so easy!");
        }}
      >
        Recharge
      </button>
      <p>Virement</p>
      <input onChange={(e) => setVirement(e.target.value)}></input>
      <button
        onClick={() => {
          if (parseFloat(solde) - parseFloat(virement) > 0) {
            setSolde(parseFloat(solde) - parseFloat(virement));
            toast("Wow so easy!");
          }
        }}
      >
        Recharger
      </button>

      <ToastContainer position="top-right" />
    </div>
  );
};
export default Index;
