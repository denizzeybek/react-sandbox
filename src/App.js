import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [currentCategory, setCurrentCategory] = useState('All Categories');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [name, setName] = useState('');

  const productInfo = { title: 'Product List' };
  const categoryInfo = { title: 'Category List' };

  // currentCategory değiştiği anda GetCategories tekrar çağırılır
  useEffect(() => {
    getCategories();
  }, [currentCategory]);

  const getCategories = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      const { products } = json;

      const uniqueCategories = {};
      const categoryArray = products.map((product, index) => ({
        id: index + 1,
        category: product.category,
      }));

      const filteredCategories = categoryArray.filter((item) => {
        if (!uniqueCategories[item.category]) {
          uniqueCategories[item.category] = true;
          return true;
        }
        return false;
      });

      const updatedCategories = [
        { id: 0, category: 'All Categories' },
        ...filteredCategories,
      ];

      setCategories(updatedCategories);

      if (currentCategory !== 'All Categories') {
        const filteredProducts = products.filter(
          (product) => product.category === currentCategory
        );
        setProducts(filteredProducts);
      } else {
        setProducts(products);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const changeCategory = (name) => {
    setCurrentCategory(name);
  };

  const onAddBasket = (product) => {
    const isAdded = basket.find((element) => element.id === product.id);
    if (!isAdded) {
      setBasket([...basket, product]);
    }
    console.log('basket ', basket);
  };

  const getNameData = (name) => {
    setName(name);
  };

  // name değiştiği anda fullName'i tekrar yaratır
  const fullName = useMemo(() => {
    return `${name} Zeybek`;
  }, [name]);

  return (
    <div>
      <Container>
        <Row>
          <Col xs="3">
            <CategoryList
              info={categoryInfo}
              currentCategory={currentCategory}
              changeCategory={changeCategory}
              categories={categories}
            />
          </Col>
          <Col xs="9">
            <ProductList
              info={productInfo}
              currentCategory={currentCategory}
              products={products}
              onAddBasket={onAddBasket}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Navi getNameData={getNameData} fullName={fullName}>
              this is slot area
            </Navi>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
