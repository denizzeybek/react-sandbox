/* eslint-disable no-useless-constructor */
import { Table, Button } from 'reactstrap';

import React from 'react';

export default function ProductList(props) {
  return (
    <div className="table-height">
      <h3>{props.info.title}</h3>

      <h3>Selected Category: {props.currentCategory} </h3>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr
              style={{ backgroundColor: index % 2 === 0 ? 'red' : 'blue' }}
              key={product.id}
            >
              <th scope="row">{product.id} </th>
              <th>{product.brand} </th>
              <th>{product.category} </th>
              <th>{`${product.price}$`} </th>
              <th>
                <div>
                  <Button
                    onClick={() => props.onAddBasket(product)}
                    color="primary"
                  >
                    Add to Card
                  </Button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

// import React, { Component } from 'react';

// export default class CategoryList extends Component {
//   render() {
//     return (
//       <div>
//         <h3>{this.props.info.title}</h3>

//         <h3>Selected Category: {this.props.currentCategory} </h3>
//         <Table>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Brand</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.products.map((product) => (
//               <tr key={product.id}>
//                 <th scope="row">{product.id} </th>
//                 <th>{product.brand} </th>
//                 <th>{product.category} </th>
//                 <th>{`${product.price}$`} </th>
//                 <th>
//                   <div>
//                     <Button
//                       onClick={() => this.props.onAddBasket(product)}
//                       color="primary"
//                     >
//                       Add to Card
//                     </Button>
//                   </div>
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     );
//   }
// }
