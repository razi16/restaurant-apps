import CONFIG from '../../globals/config';

/* const text = ''; */
/* restaurant.menus.foods.forEach((element) => {
  const foods = document.getElementById('foods');
  foods.innerText = element;
}); */

const createRestaurantDetailTemplate = (restaurant) => `
  <h1>${restaurant.name}</h1>
  <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <h2>Kota</h2>
    <p>${restaurant.city}</p>
    <h2>Alamat</h2>
    <p>${restaurant.address}</p>
    <h2>Rating</h2>
    <p>${restaurant.rating}</p>
    <h2>Makanan</h2>
    <p>${restaurant.menus.foods.map((food) => {
    // eslint-disable-next-line no-param-reassign
    food.name = ` ${food.name}`;
    return food.name;
  })}.</p>
    <h2>Minuman</h2>
    <p>${restaurant.menus.drinks.map((drink) => {
    // eslint-disable-next-line no-param-reassign
    drink.name = ` ${drink.name}`;
    return drink.name;
  })}.</p>
    <h2>Reviews</h2>
    <p>${restaurant.customerReviews.map((review) => `${review.name}
            <br>
            ${review.date}
            <br>
            ${review.review}
            <br>
            <br> `).join('')}</p>
    <h2>Description</h2>
    <p>${restaurant.description}</p>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article>
<h2><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <p>Kota: ${restaurant.city}</p>
  <p>Rating: ${restaurant.rating}</p>
  <p>${restaurant.description}</p>
  </article>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate,
};
