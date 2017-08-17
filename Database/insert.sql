use methodical;
   

INSERT INTO Employee (forename,surname,street_number,street_name,city,NIN,bank_account, salary) VALUES('Jack', 'Murphy' , '13a' , 'Queens Road' , 'Belfast' , 'PC029423D', '2343WSIWEIJNCIW', 25000);
INSERT INTO Employee (forename,surname,street_number,street_name,city,NIN,bank_account, salary) VALUES('Dariuz', 'AtleastITried' , '15' , 'The Best Road' , 'Belfast' , 'PC023744D', '342JGKFKIWEIJNCIW', 28000);
INSERT INTO Employee (forename,surname,street_number,street_name,city,NIN,bank_account, salary) VALUES('Mary-Jane','McBride' , '1' , 'Long Road' , 'Belfast' , 'PC532749D', '13423HWRIUIOFOIWEFSDS', 45000);

INSERT INTO Sales_Employee (sales_employee_id,commission_rate) VALUES(1, 0.2);
INSERT INTO Sales_Employee (sales_employee_id,commission_rate) VALUES(3, 0.5);

INSERT INTO Sales (sales_employee_id, sales_total, date_of_sale)VALUES(3, 5000000, '2017-05-27');

INSERT INTO Customer (customer_name) VALUES('Apple');
INSERT INTO Customer (customer_name) VALUES('Jeremy Rox' );


INSERT INTO Department (department_name) VALUES('Department 1');
INSERT INTO Department (department_name) VALUES('Department 2' );
INSERT INTO Department (department_name) VALUES('Department 3' );


INSERT INTO Project (project_name, project_leader_id, project_customer) VALUES('Project Numero Uno',3,2);
INSERT INTO Project (project_name, project_leader_id, project_customer) VALUES('Project Numero Dos',1,2);



use methodical;
INSERT INTO Employee_Department (department_id, employee_id) VALUES(3,2); -- Mary-Jane to department 2



INSERT INTO Assignment (employee_id, project_id) VALUES(3,1); -- Dariusz- to Project numero uno
INSERT INTO Assignment (employee_id,project_id) VALUES(1,1);
INSERT INTO Assignment (employee_id,project_id) VALUES(1,2);


