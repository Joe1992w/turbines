###### **Stack**
* PHP
    * Laravel
* JS (ES6)
    * ReactJS
    * Axios
* AWS EC2

###### **Reasoning**
The main reason I chose to make use of any framework was to demonstrate my ability to make use of both composer and npm/yarn.

**Laravel**
In this task, Laravel is almost entirely unused, I will list the main files of interest for your inspection:
* there is some simple routing performed in the routes/api.php and routes/web.php
* a WindTurbineModel in app/Models/WindTurbineModel.php which is responsible for generating the list of wind turbine parts
* a WindTurbineController in app/Http/Controllers/WindTurbineController.php to pass the data from the Model to the route.

**React**
* There is a simple collection of functional components that make use of react hooks in resources/js/components/InspectionData
* The turbine data is fetched from the api endpoint using axios and the react useEffect hook and then stored into state using a react state hook

**AWS**
I've not had experience with AWS in the past, however, I have been responsible for some the provisioning/upkeep of servers on other VPS providers in all of my previous roles and so I am reasonably confident in a unix shell.
As there is no DB requirement for the task, I have only installed nginx and php-fpm to serve the app on the EC2 instance.
