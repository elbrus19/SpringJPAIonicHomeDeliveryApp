![enter image description here](https://img.shields.io/badge/Author-Eliel_Bruna_Mendez-blue)

# 💻 SpringJPAIonicHomeDeliveryApp

Project of a home delivery application.

![logo HomeDeliveryApp]()

## 💬 Index

* [Introduction](#-Introduction)
* [Data Model](#-Documentation)
* [User requirements](#-User-requirements)
* [Use case](#-Use-case)
* [Intarfaces](#-Intarfaces)
* [Usability](#-Usability)
* [Manuals](#-Manuals)
* [Technological stack](#-Technological-stack)
* [Comparison of technologies](#-Comparison-of-technologies)
* [Planning](#-Planning)
* [Prerequisites](#-Prerequisites)
* [Built with](#-Built-with)
* [Thanks for](#-Thanks-for)

## Introduction

This is a project for a food company, specifically a cafeteria called “HomeDelivery", which has a home delivery service and wants to reach the maximum number of customers possible. Therefore, it has requested the creation of an application where a registered user can place orders and, therefore, both command workers and delivery workers, can access such orders, organize and send orders to their customers in a comfortable and simple way.

## Introduction

* E/R Diagram

![e/r]()

This data model has 4 entities: user / customer, order, delivery person and location.

     User: in this entity will store all the data of the user/client such as his ID, name and surname, contact phone, email and password, and address.

     Order: this entity refers to the order, therefore the order number will be stored to be able to identify it, date of the time that was ordered and when it was delivered to the customer, the status of the order(example: canceled or delivered), and the description of the order.

     Location: this entity stores the detailed location of where the order was placed. Therefore, your id, Street, zip code, neighborhood and municipality will be stored.

    Delivery_Person: this entity refers to the deliverer. Therefore, the following data will be saved: your id, first and last name, contact phone, your email and your password.

Therefore, there are different relationships between the entities:

    “Do " relationship between user / customer and order: this relationship shows a cardinality of (1, N), since, a user can make between one to many orders(1, n); and an order can only be made by one user(1,1).

    "Have" relationship between order and location: this relationship has a cardinality of (1,1) because an order can only have one location(1,1); and a location can only belong to one order(1,1).

    "Delivery" ratio between delivery man and order: this ratio shows a cardinality of (1, N), because a delivery man can distribute between one to many orders(1, n); and an order can only be distributed by one delivery man(1,1).

* Diagram Class

![diagram class]()

In this image we can see that each entity has a primary key: user → id, deliveryPerson → id, location → id and order → numOrder.

![diagram class1]()

In addition, the order class has three foreign keys (deliveryPersonId, LocationId, userId), since, in the order you want to record which user/customer made the order, which delivery person is responsible for delivering it and what is the exact location of the order.

* SQL

[SQL Database]()

## User requirements

* R1. Mobile app.

* R2. There will be different users:

    ◦ R2.1. There will be a customer user who can create, view and modify their orders. 
    ◦ R2.2. There will be a delivery user who will be able to view and modify the orders assigned by the order worker.  
    ◦ R2.3. There will be a command worker user who will be able to view all orders and modify.

* R3. To use the application, it is necessary to be previously registered.  
    ◦ R3.1. If you are a delivery user or command worker, the administrator has previously registered you in the application.  
    ◦ R3.2. If you are a client user, you will be registered in the Register window to be able to enter the application.

* R4. To be able to use this home service, you have to place the order within the area of Las Palmas de GC.

## Use cases

![use cases]()

## 📱 Interfaces

* Mockups and Prototypes

In this section we can see the following mokups of this application and the link of the prototyping.

The main window will be the login window, since, if you want to   use this home service, you will have to be previously registered. In this window you can see the fields required to log in and the Login button. 
By clicking on it, you will access the application itself. In addition, at the bottom appears an option to register if you do not already have an account. After clicking on the link, The Sing Up window will appear where you will have to fill in the necessary data to register.

Once inside the application, the first window that will be displayed is that of the menu. Here all the dishes that the local has available are displayed. If you want to access the other windows of the application, by pressing the top left button, a side navigation menu will appear with the information of the logged user and his email, and with the windows that the application has. For example, if we want to go to the maps window, we must click on the corresponding option as shown in the image. In this window, a map will be displayed to be able to see the address of each order.

The app also has an orders window. This window consists of storing the orders that are being made and that depending on the role that the user plays will have some functions or others. For example, if you are a customer, you will be able to create orders and see all the ones you have made, as well as having the option to update that order if you have made a mistake in any data or to cancel the order. Conversely, if you are a delivery person, you will be able to view the orders assigned to them and have the option to modify the order status. And, if you are the order worker, you will be able to view all orders that are placed, assign the order to a delivery person, and delete an order. By clicking on each of the buttons and icons that appear in the orders window, you will be directed to another window corresponding to the button you have clicked as the create button, where the fields to place the order and the edit button to update some field of said order will be filled in.
And finally, an option also appears, in the side navigation menu, called Sign Out that when you click on this option, you will log out and return to the Login window.

[Link to prototype]()

## Usability

These are the following usability aspects that the application contains:
* The application is elegant in its design and is attractive to the user. It contains images, visuals and soft and homogeneous colors throughout the application that appeal to the user.
* Also as we can see in the image on the left, it is intuitive and simple thus helping not to overload the application and facilitate its use.
* The application adds user feedback, because before making a change, for example when making a modification or when deleting, it displays a message by screen saying If you want to continue.
* Colors are used to help the user communicate ideas faster as, for example, in the image above by highlighting the edges of each button to highlight the function of each.
* Contains interactive elements, for example, when some data is missing to fill in the forms, the edges are shown in red indicating that it is necessary to fill in this data and a notice on the screen indicating that you can not continue to fill in all the required fields. And this at the same time, is a user feedback mode.
• In addition, the application has icons that allow the application to be more attractive and that shows a clear organization, as we can see in the first image of the usability section, where the idea of the corresponding window is clearly indicated.
* It has a dark color theme change to make the user feel more comfortable if browsing at night for example.
* Within the application, there are different error handles, for example, when it fails to execute the action, whether when creating, modifying or deleting, displaying a message per screen.
* Multimedia elements: it has multimedia elements allowing the interfaces to improve the retention of the information that is presented and maintains a balance between the contents that take advantage of the possibilities of hypertext and multimedia and those that do not.
* The application respects the size of the fonts allowing the application to be more readable and proportional to the resolution of the screen.

## Manuals

### 🖥️ Backend

To work with the server it is necessary to pre-install the workbench server or xampp. Also, install git to be able to clone the Github repository.

To load the project we will use the following line:

```
$ git clone https://github.com/SergioPA11/Proyecto-1
```

Go to backend folder:

```
$ cd backend
```
Then, Install Eclipse IDE for Enterprise Java Developers - 2020-09

Now you have to open the project on Eclipse and Run As Spring Boot App

### 🖥️ Frontend

To load the project we will use the following line:

```
$ git clone https://github.com/elbrus19/SpringJPAIonicHomeDeliveryApp
```

To install all the packages of the project we use the following line:

```
$ npm install
```

To start the server in Node.Js we will use the following line:

```
$ ionic serve

Or this line if we want to see it as mobile

$ ionic serve --lab
```

In order to use the previous line we need to install the following:
```
$ npm install @ionic/lab --save-dev
```

Además, es necesario instalar este comado para poder luego instalar apollo, que te permite trabajar con GraphQL:

```
$ npm install -g @angular/cli
```

Next, we introduce the following:

```
ng add apollo-angular
```

Finally, one thing you need to set is the URL of your GraphQL Server, so open src/app/graphql.module.ts and set uri variables:

```
const uri = 'http://localhost:8080/graphql';
```


## Technological stack

* Frontend: Ionic - Angular
* Backend: Spring, MySQL(BD), JPA
* Web Service: GraphQL

## Postman

[Link to ends-points](https://documenter.getpostman.com/view/13225722/TVspkpS9)

## Comparison of technologies

* NATIVE APPS

Native apps are those that use, during their development, the native language of the device on which they are to be installed.

In the case of iOS they are developed with Swift or Objective-C language.
For Android they are developed with Java.
According to Obux, among the advantages of native apps is: its excellent handling of sensors and services of mobile devices, its wide range to smartphones and the use of official tools for each platform.

* HYBRID APPS

Hybrid apps are developed using HTML5, CSS and JavaScript web technologies, which in turn will run in the system's native browser. These applications have a lower development cost than native ones, they can run on multiple devices and their distribution is more massive.

* WEBS APP

Finally, we find the app webs. They are accessed directly from the browser of the phone or tablet, and on almost all devices it will open almost the same way thanks to the use of Responsive Web Design. It is the simplest and most economical option, since it reduces development costs. Compatibility, usability and simplicity are among its advantages.

* POWER APPS

PowerApps is a suite of applications from Microsoft, which allows you to quickly and easily create custom applications for your business. Thus, innovating in your organization will be easier than ever. Five advantages it has are: wide availability, better data integration, automated functions, guaranteed security, higher productivity.

## Planning

The planning that has been carried out for this project has been done on GitHub. Within the repository where we have uploaded the project, there is a function that allows you to organize the tasks you want to perform. To have planned these tasks, it is necessary to create them first, therefore, this creation is done in the issues section. After you create all the tasks, in the Projects section, a project is created that allows you to plan those tasks. And there are several planning options, in my case I used the authomatic-kanvas. This option allows you to organize tasks into three parts: to do, in progress, and done. Finally, you are putting the tasks according to how you have done them.

[Link to planning](https://github.com/elbrus19/SpringJPAIonicHomeDeliveryApp/projects/2)

## 🧰 Prerequisites

* [Git]( https://git-scm.com/)
* [MySql]( https://www.mysql.com/)
* [Node.Js]( https://nodejs.org/en/)

## 🛠️ Built with

* [Postman](https://www.postman.com/)
* [Justinmind](https://www.justinmind.com/)
* [Visual-Paradigm](https://www.visual-paradigm.com/)
* [MySql](https://www.mysql.com/)
* [Node.Js](https://nodejs.org/en/)
* [Spring](https://spring.io/)
* [GraphQL](https://graphql.org/)
* [Ionic](https://ionicframework.com/)
* [Angular](https://angular.io/api/common/http/HttpClient)
* [Apollo](https://apollo-angular.com/docs/)
* JPA

## 🙏🏽 Thanks for

* [Tcrurav](https://github.com/tcrurav)
* [NestorBD](https://github.com/Nestorbd)
* [SergioPA11](https://github.com/SergioPA11)
* [Aaronmed](https://github.com/aaronmed)