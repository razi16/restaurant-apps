/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#likedRestaurant');
  I.waitForElement('.empty-text', 5);
  I.see('Tidak ada restoran untuk ditampilkan', '.empty-text');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.seeElement('#likedRestaurant');
  I.waitForElement('.empty-text', 5);
  I.see('Tidak ada restoran untuk ditampilkan', '.empty-text');

  I.amOnPage('/');

  I.wait(3);

  I.seeElement('h2', '#restaurants');
  const firstRestaurant = locate('h2', '#restaurants').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');

  I.wait(3);

  I.seeElement('article');
  const likedRestaurantName = await I.grabTextFrom('article h2');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});
