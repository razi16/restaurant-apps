import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favourite = {
  async render() {
    return `
      <h1 class="explore">Your Favourite Restaurants</h1>
      <div id="likedRestaurant" class="restaurants"></div>
 `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#likedRestaurant');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p class="empty-text">Tidak ada restoran untuk ditampilkan</p>';
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favourite;
