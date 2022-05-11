import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    /* return response.json(); */
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
