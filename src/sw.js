/* eslint-disable no-console */
const CACHE_NAME = 'SmartV1'
const urlsToCache = ['/', '/index.css', '/main.tsx', '../public/icons/*.png']

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
            (res) => {
                // Registration was successful
                console.log('ServiceWorker registration successful', res)
            },
            (err) => {
                // Registration failed
                console.log('ServiceWorker registration failed: ', err)
            }
        )
    })
}

window.addEventListener('install', (event) => {
    // event.waitUntil takes a promise to know how
    // long the installation takes, and whether it
    // succeeded or not.
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache')
            return cache.addAll(urlsToCache)
        })
    )
})

window.addEventListener('fetch', (event) => {
    event.respondWith(
        // This method looks at the request and
        // finds any cached results from any of the
        // caches that the Service Worker has created.
        caches.match(event.request).then((res) => {
            // If a cache is hit, we can return thre response.
            if (res) {
                return res
            }

            // Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the request.
            const fetchRequest = event.request.clone()

            // A cache hasn't been hit so we need to perform a fetch,
            // which makes a network request and returns the data if
            // anything can be retrieved from the network.
            return fetch(fetchRequest).then((fetch) => {
                // Check if we received a valid response
                if (!fetch || fetch.status !== 200 || fetch.type !== 'basic') {
                    return fetch
                }

                // Cloning the response since it's a stream as well.
                // Because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
                const responseToCache = fetch.clone()

                caches.open(CACHE_NAME).then((cache) => {
                    // Add the request to the cache for future queries.
                    cache.put(event.request, responseToCache)
                })

                return fetch
            })
        })
    )
})

window.addEventListener('activate', (event) => {
    const cacheWhitelist = ['page-1', 'page-2']

    event.waitUntil(
        // Retrieving all the keys from the cache.
        caches.keys().then((cacheNames) => {
            return Promise.all(
                // Looping through all the cached files.
                cacheNames.map((cacheName) => {
                    // If the file in the cache is not in the whitelist
                    // it should be deleted.
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName)
                    }
                    return null
                })
            )
        })
    )
})
