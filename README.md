# What is this repository for? #

This is a repository for testing applicants in their knowledge of react / react-native. The **goal** is to create a registration page within the project structure using Redux, Saga, React-Native-Elements, React-Native-Paper, and React-Navigation in this application. What **doesn't** need to be implemented is communicate to any public facing API.

## The Requirements ##
 1. Create Registration Page.
 1. Basic email and password validation.
 1. When validation passes "submit" and navigate away.

### Project Break Down ###
Within the src file there are major areas for different key sections of the  

* assets: A Folder for storing assets such as images, json, etc... to be used across the whole application.

* components: A folder for storing re-usable across the whole application and not 1 page. 

* config: A folder for configurations

* navigators: A folder for storing "stacks" for the application. These describe the navigation path for the application. 

* sagas: A folder for storing different saga configurations. These should be broken up by data type or features.

* screens: A folder for individual screens within the applications.

* services: A folder for api request to be used within the sagas.

* stores: A folder for the redux data store. Within the stores folder sub folders are created for each data type.

* theme: A folder for theming configurations

* utils: A folder for utility functions.
