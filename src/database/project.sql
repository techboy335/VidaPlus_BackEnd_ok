-- Active: 1742406710515@@127.0.0.1@3306
-- Usuário (patient, médico, administrador) 
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL
);

-- hash gerado por bcryptjs generator - ficticio

INSERT INTO users (id, name, email, password, role)
VALUES
  -- tipo NORMAL e senha = fulano123
	('u001', 'Fulano', 'fulano@email.com', '$2a$12$qPQj5Lm1dQK2auALLTC0dOWedtr/Th.aSFf3.pdK5jCmYelFrYadC', 'NORMAL'),
  -- tipo NORMAL e senha = beltrana00
	('u002', 'Beltrana', 'beltrana@email.com', '$2a$12$403HVkfVSUbDioyciv9IC.oBlgMqudbnQL8ubebJIXScNs8E3jYe2', 'NORMAL'),
  -- tipo ADMIN e senha = ciclano99
	('u003', 'Ciclano', 'ciclano@email.com', '$2a$12$lHyD.hKs3JDGu2nIbBrxYujrnfIX5RW5oq/B41HCKf7TSaq9RgqJ.', 'ADMIN');


CREATE TABLE patient (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    creator_id TEXT NOT NULL,  
    name TEXT NOT NULL,
    age INTEGER,
    email TEXT UNIQUE NOT NULL,
    phone TEXT NOT NULL,  
    address TEXT NOT NULL,
    complaint TEXT NOT NULL,
    created_at TEXT DEFAULT (DATETIME()) NOT NULL,
    updated_at TEXT DEFAULT (DATETIME()) NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES users (id) 
        ON UPDATE CASCADE
        ON DELETE CASCADE

);

INSERT INTO patient (id, creator_id, name, age, email, phone, address, complaint)
VALUES 
    ('p001', 'u001', 'Adam', '23', 'adam.adam@adam.com', 0125879, 'Example 123 New York', 'headaches'),
    ('p002', 'u001', 'Linda', '35', 'linda@linda.com', 145876, 'Example 321 New York', 'broke his arm'),
    ('p003', 'u002', 'Bela', '30', 'bela@bela.com', 987615, 'Example 321 New York', 'dizziness'),
    ('p004', 'u003', 'Tom', '30', 'tom@tom.com', 745946, 'Example 321 New York', 'nauseous');

DROP TABLE patient;