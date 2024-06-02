// import { Container } from "react-bootstrap";
// import Section from "../../combonents/Section";
// import { useEffect, useState } from "react";
// import { getApi } from "../../services/getAPI";

// const Home = () => {
//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await getApi("categories");
//         setCategories(result);
//       } catch (error) {
//         console.error("There was an error!", error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <Container>
//       {categories &&
//         categories.length > 0 &&
//         categories.map((item, index) => {
//           return <Section key={index} category={item} />;
//         })}
//     </Container>
//   );
// };
const Home = () => {
  return <>Home</>;
};
export default Home;
