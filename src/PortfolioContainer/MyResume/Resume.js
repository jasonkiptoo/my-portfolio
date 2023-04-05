import React, {useState} from "react";
import "./Resume.css";
function Resume() {
const [selectedItem, setSelectedItem] = useState(null);

function handleClick(item) {
  setSelectedItem(item);
  console.log(` i have been c ${item.title}`);
}

function ListItem({ item, onClick }) {
  return (
    <div onClick={onClick}>
      <h3>{item.title}</h3>
    </div>
  );
}
function ItemDetails({ item }) {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title} />
    </div>
  );
}

  const items = [
  {
    id: 1,
    title: "Profile ",
    items: [
      { name: "John Doe", dob: "1990-01-01", age: 33 }
    ],
    image: "https://example.com/item1.jpg",
  },
  {
    id: 2,
    title: "Education",
    items: [
      { School: "University of Eldoret", Qualification: "Degree", Date: "Moringa School" },
      { School: " Kapenguria Boys High School", Qualification: "KCSE", Date: "Moringa School" }
     
    ],
    image: "https://example.com/item2.jpg",
  },
  {
    id: 3,
    title: "Skills",
   items: [
      { Company: "Funder Holdings", Date: "1990-01-01", Position: "Attache" },
      { Company: "Aheri net", Date: "1990-01-01", Position: "Intern" }
    ],
    image: "https://example.com/item3.jpg",
  },
];
  return (
        <div className="container">
      <div className="resume-container">
        <div className="resume-header">
          {items.map((item) => (
        <ListItem key={item.id} item={item} onClick={() => handleClick(item)} />
      ))}
        </div>
        <div className="resume-body">
          {selectedItem && <ItemDetails item={selectedItem} />}
        </div>
      </div>
    </div>
  );
}

export default Resume;




// new refactored code

// import React, {useState} from 'react';

// export function Resume(props) {
// const [selectedItem, setSelectedItem] = useState(null);

// function handleClick(item) {
//     setSelectedItem(item);
//     console.log(` i have been c ${item.title}`)
//   }

//   function ListItem({ item, onClick }) {
//   return (
//     <div onClick={onClick}>
//       <h3>{item.title}</h3>
      
//     </div>
//   );
// }
// function ItemDetails({ item }) {
//   return (
//     <div className="container">
//       <div className="resume-container">
//         <div className="resume-header">
//           {items.map((item) => (
//             <ListItem
//               key={item.id}
//               item={item}
//               onClick={() => handleClick(item)}
//             />
//           ))}
//         </div>
//         <div className="resume-body">
//           {selectedItem && <ItemDetails item={selectedItem} />}
//         </div>
//       </div>
//     </div>
//   );
// }

//   // <datagrid></datagrid>
//   const items = [
//   {
//     id: 1,
//     title: "Profile ",
//     description: "This is the first item",
//     image: "https://example.com/item1.jpg",
//   },
//   {
//     id: 2,
//     title: "Education",
//     description: "This is the second item",
//     image: "https://example.com/item2.jpg",
//   },
//   {
//     id: 3,
//     title: "Skills",
//     description: "This is the third item",
//     image: "https://example.com/item3.jpg",
//   },
// ];

//   return (
//     <div className="container">
//       <div className="resume-container">
//         <div className="resume-header">
//           {items.map((item) => (
//         <ListItem key={item.id} item={item} onClick={() => handleClick(item)} />
//       ))}
//         </div>
//         <div className="resume-body">
//           {selectedItem && <ItemDetails item={selectedItem} />}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Log to console
// console.log('Hello console')



// sample twooo


// const items = [
//   {
//     id: 1,
//     title: "Profile ",
//     items: [
//       { name: "John Doe", dob: "1990-01-01", age: 33 }
//     ],
//     image: "https://example.com/item1.jpg",
//   },
//   {
//     id: 2,
//     title: "Education",
//     items: [
//       { School: "University of Eldoret", Qualification: "Degree", Date: "Moringa School" },
//       { School: " Kapenguria Boys High School", Qualification: "KCSE", Date: "Moringa School" }
     
//     ],
//     image: "https://example.com/item2.jpg",
//   },
//   {
//     id: 3,
//     title: "Skills",
//    items: [
//       { Company: "Funder Holdings", Date: "1990-01-01", Position: "Attache" },
//       { Company: "Aheri net", Date: "1990-01-01", Position: "Intern" }
//     ],
//     image: "https://example.com/item3.jpg",
//   },
// ];