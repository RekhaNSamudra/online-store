import { ProductProvider } from './Context/ProductContext';
import Layout from './Components/Layout';

const App = () => {
  return (
   <>
     <ProductProvider>
      <Layout />
    </ProductProvider>
   </>
  );
}

export default App;
