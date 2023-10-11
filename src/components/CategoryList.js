/* eslint-disable no-useless-constructor */
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function CategoryList(props) {
  return (
    <div>
    <h3>{props.info.title}</h3>
    <ListGroup>
      {props.categories.map((category) => (
        <ListGroupItem
          active={category.category === props.currentCategory}
          onClick={() => props.changeCategory(category.category)}
          key={category.id}
        >
          {category.category}{' '}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
  )
}


// import React, { Component } from 'react';

// export default class CategoryList extends Component {
//   state = {
//     categories: [],
//   };

//   render() {
//     return (
//       <div>
//         <h3>{this.props.info.title}</h3>
//         <ListGroup>
//           {this.props.categories.map((category) => (
//             <ListGroupItem
//               active={category.category === this.props.currentCategory}
//               onClick={() => this.props.changeCategory(category.category)}
//               key={category.id}
//             >
//               {category.category}{' '}
//             </ListGroupItem>
//           ))}
//         </ListGroup>
//       </div>
//     );
//   }
// }