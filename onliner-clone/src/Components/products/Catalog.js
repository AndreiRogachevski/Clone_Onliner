import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productsApi } from '../../API/productAPI';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../features/products/productSlice';
import HotPrice from './HotPrice';
import { postsApi } from '../../API/PostsAPI';
import { selectPosts } from '../../features/posts/postsSlice';

export default function Catalog() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const posts = useSelector(selectPosts);
  useEffect(() => {
    dispatch(productsApi.fetchProducts());
    dispatch(postsApi.fetchPosts());
  }, [dispatch]);
  return (
    <div className="preview">
      <h2>КАТАЛОГ</h2>
      <HotPrice products={products} />
      <div>
        <ul>
          {posts.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
