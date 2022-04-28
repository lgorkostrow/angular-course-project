# Changelog

## Task 7. NgRx
### Added
* Added NgRx for Product and Cart module
* Added feature and state selectors for product and cart states
* Added Router/Store
* Added product caching with the store
* Added router store
* Added navigation to the order page via router action

## Task 6. HttpClient
### Added 
* Added json server 
* Added HttpErrorInterceptor and TimingInterceptor
* Added SnackbarService

### Changed
* Changed ProductRepository from Promise to Observable

## Task 5. Routing
### Added
* Added IsCartEmptyGuard
* Added ProcessOrderComponent
* Added ProductViewPageComponent
* Added AdminModule with AdminGuard
* Added ProductResolver guard

### Changed
* Changed ProductModule structure

## Task 4. Pipes
### Added
* Added angular material
* Added Dropdown component 
* Added OrderByPipe

### Changed
* Reworked CartListComponent, replaced item list with a table
* Reworked ProductList and ProductItem, added material styles

### Removed 
* CartItemComponent

## Task 3. Services and DI
### Added
* Added LocalStorageService and SessionStorage services
* Added caching the cart in the local storage
* Added ConfigService
* Added SessionID generation with a factory method

### Changed
* Renamed product components, services and models

## Task 2. Components
### Added
* Added Highlight directive
* Added project title

### Changed
* Reworked project structure, added smart components
* Divided the project into modules

## Task 1. Introduction
### Added
* Added components: ProductList, ProductItem, CartList
* Added services: ProductRepository, CartService
* Added possibility to add items to a cart 
* Added template for viewing the cart
