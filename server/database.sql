CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    list_type VARCHAR(20),
    list_color VARCHAR(30) DEFAULT 'Yellow, #ffd43b',
    tags text[] DEFAULT ARRAY[]::text[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    complete_by TIMESTAMP
);

-- for future use
-- CONSTRAINT color_hex_constraint CHECK (list_color IS NULL OR list_color ~* '^#[a-f0-9]{6}$'),
