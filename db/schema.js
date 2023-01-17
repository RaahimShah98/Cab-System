const CREATE_TABLE_USERS = `
CREATE TABLE Users (
    id INTEGER PRIMARY KEY IDENTITY(1,1),
    name TEXT NOT NULL,
    email VARCHAR(200) NOT NULL Unique,
    password TEXT NOT NULL,
    role NVARCHAR(MAX) NOT NULL,
    CHECK (role IN ('admin', 'customer'))
  );
  
`;
const CREATE_TABLE_TRIPS = `
CREATE TABLE Trips (
    id INTEGER PRIMARY KEY IDENTITY(1,1),
    cab_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    start_location TEXT NOT NULL,
    end_location TEXT NOT NULL,
    price REAL NOT NULL,
    status VARCHAR(255) NOT NULL DEFAULT 'ongoing',
    FOREIGN KEY (cab_id) REFERENCES Cabs(id),
    FOREIGN KEY (customer_id) REFERENCES Users(id)
    CHECK (status IN ('completed', 'cancelled', 'ongoing'))
  );
`;

const CREATE_TABLE_CABS = `
CREATE TABLE Cabs (
    id INTEGER PRIMARY KEY IDENTITY(1,1),
    driver_id INTEGER NOT NULL,
    license_plate TEXT NOT NULL,
    model TEXT NOT NULL,
    capacity INTEGER NOT NULL,
    FOREIGN KEY (driver_id) REFERENCES Users(id)
    availability boolean NOT NULL DEFAULT true
  ); 
`;

module.exports = {
  CREATE_TABLE_CABS,
  CREATE_TABLE_TRIPS,
  CREATE_TABLE_USERS,
};
