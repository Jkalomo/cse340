-- Assignment 2 - Task 1: Six SQL Statements
-- File: assignment2.sql
-- Student: [Jabulani Kalomo]
-- Date: [13 September 2025]

-- Query 1: Insert Tony Stark record into account table
INSERT INTO account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- Query 2: Modify Tony Stark record to change account_type to "Admin"
UPDATE account 
SET account_type = 'Admin' 
WHERE account_email = 'tony@starkent.com';

-- Query 3: Delete Tony Stark record from the database
DELETE FROM account 
WHERE account_email = 'tony@starkent.com';

-- Query 4: Modify GM Hummer description using REPLACE function
UPDATE inventory 
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- Query 5: Inner join to select make, model, and classification name for Sport category
SELECT i.inv_make, i.inv_model, c.classification_name
FROM inventory i
INNER JOIN classification c ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';

-- Query 6: Update all inventory records to add "/vehicles" to image paths
UPDATE inventory 
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
