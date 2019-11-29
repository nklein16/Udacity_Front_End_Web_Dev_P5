console.log('Test 1');
var RESTAURANT_CACHE = 'restaurant-site_cache';
console.log('Test 2');
var urlsToCache = [
'/css/styles.css',
'/data/restaurants.json',
'/1.jpg',
'/2.jpg',
'/3.jpg',
'/4.jpg',
'/5.jpg',
'/6.jpg',
'/7.jpg',
'/8.jpg',
'/9.jpg',
'/10.jpg',
'/js/dbhelper.js',
'/js/main.js',
'/js/restaurant_info.js',
'/index.html',
'/restaurant.html'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(RESTAURANT_CACHE).then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

console.log('Test 3');

self.addEventListener('fetch', function(event) {
    console.log("fetching items...");
    //  Whether request is coming from server or from the cache, respond with it...
    event.respondWith(
        caches.match(event.request)
        // If response exists, return response; otherwise, go fetch the request from the event it is sourced in
        .then(function(response) {
            // Cache hit - return response
            if (response) {
            return response;
            }
            return fetch(event.request);
        }
        )
    );
});




