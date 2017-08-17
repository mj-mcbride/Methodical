CREATE database methodical;

USE methodical;
   
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS Sales_Employee;
DROP TABLE IF EXISTS Sales_per_Employee;
DROP TABLE IF EXISTS Customer;
DROP TABLE IF EXISTS Assignment;
DROP TABLE IF EXISTS Department;



CREATE TABLE IF NOT EXISTS Employee( 
	employee_id smallint NOT NULL AUTO_INCREMENT,
	forename varchar(50) NOT NULL,
	surname varchar(50) NOT NULL,
	street_number varchar (5) not null,
	street_name varchar (50) not null,
	city varchar (20) not null,
	NIN char(9) not null, 
	bank_account varchar(37) not null,
	salary int Not null default 13000,
	primary key (employee_id)
);

CREATE TABLE IF NOT EXISTS Sales_Employee( 
	sales_employee_id smallint NOT NULL,
	commission_rate decimal(2,2) Not null,
	
	foreign key(sales_employee_id) references
	Employee(employee_id),
	primary key (sales_employee_id)
);

CREATE TABLE IF NOT EXISTS Sales( 
	sales_id int not null auto_increment,
	sales_employee_id smallint NOT NULL,
	sales_total int Not null,
	date_of_sale date not null,
	
	primary key (sales_id),

	foreign key(sales_employee_id) references
	Sales_Employee(sales_employee_id)
	
);

CREATE TABLE IF NOT EXISTS Customer(
customer_id smallint not null,
customer_name varchar(25) not null,
primary key (customer_id)

);

CREATE TABLE IF NOT EXISTS Department(
department_id smallint not null auto_increment,
department_name varchar(25) not null,

primary key(department_id)
);

CREATE TABLE IF NOT EXISTS Employee_Department(
department_id smallint not null,
employee_id smallint NOT NULL,

foreign key(department_id) references
	Department(department_id),

foreign key(employee_id) references
	Employee(employee_id),

primary key (department_id, employee_id)

);

CREATE TABLE IF NOT EXISTS Project(
project_id smallint not null auto_increment,
project_name varchar(25) not null,
project_leader_id smallint NOT NULL,
project_customer smallint not null,

primary key(project_id),

foreign key(project_leader_id) references
	Employee(employee_id),

foreign key(project_customer) references
	Customer(customer_id)
	

);


CREATE TABLE IF NOT EXISTS Assignment(
assignment_id smallint NOT NULL AUTO_INCREMENT,
employee_id smallint not null,
project_id smallint not null,

foreign key(employee_id) references
	Employee(employee_id),

foreign key(project_id) references
	Project(project_id),

primary key(assignment_id)
);





 




