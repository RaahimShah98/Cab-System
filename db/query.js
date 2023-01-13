const SEED_USERS = `
INSERT INTO Users (name, email, password, role) VALUES
  ('Alice Smith', 'alice@example.com', 'password1', 'customer'),
  ('Bob Johnson', 'bob@example.com', 'password2', 'customer'),
  ('Eve Williams', 'eve@example.com', 'password3', 'customer'),
  ('Mallory Ford', 'mallory@example.com', 'password4', 'customer'),
  ('Carol Thompson', 'carol@example.com', 'password5', 'customer'),
  ('David Moore', 'david@example.com', 'password6', 'customer'),
  ('Frank Smith', 'frank@example.com', 'password7', 'customer'),
  ('Greg Johnson', 'greg@example.com', 'password8', 'customer'),
  ('Hannah Williams', 'hannah@example.com', 'password9', 'customer'),
  ('Irene Ford', 'irene@example.com', 'password10', 'customer'),
  ('admin1', 'admin1@example.com', 'admin1password', 'admin'),
  ('admin2', 'admin2@example.com', 'admin2password', 'admin');
`

const SEED_CABS = `
INSERT INTO Cabs (driver_id, license_plate, model, capacity) VALUES
  (1, 'ABC123', 'Toyota Camry', 4),
  (2, 'DEF456', 'Honda Civic', 4),
  (3, 'GHI789', 'Ford Fusion', 4),
  (4, 'JKL012', 'Toyota Corolla', 4);
`

const SEED_TRIP = `
INSERT INTO Trips (cab_id, customer_id, start_time, end_time, start_location, end_location, price) VALUES
  (1, 1, '2022-01-01 12:00:00', '2022-01-01 12:30:00', '123 Main St', '456 Market St', 20.00),
  (1, 2, '2022-01-02 15:00:00', '2022-01-02 16:00:00', '789 Park Ave', '246 Maple St', 30.00),
  (2, 3, '2022-01-03 09:00:00', '2022-01-03 10:00:00', '369 Oak St', '159 Pine St', 25.00),
  (2, 4, '2022-01-04 18:00:00', '2022-01-04 19:00:00', '753 Cedar Ave', '928 Birch Dr', 35.00),
  (3, 5, '2022-01-05 14:00:00', '2022-01-05 15:00:00', '147 Maple St', '246 Oak Ave', 40.00),
  (3, 6, '2022-01-06 13:00:00', '2022-01-06 14:00:00', '753 Pine Ave', '369 Cedar Blvd', 45.00),
  (4, 7, '2022-01-07 11:00:00', '2022-01-07 12:00:00', '159 Birch St', '789 Oak Ave', 30.00);
`


