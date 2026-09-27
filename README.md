# COLORS LAMP Application

COLORS is a web application from the COLORS lab. Users log in with an existing account, save color names, and search their saved colors.

## Technologies
Linux, Apache, MySQL, PHP with mysqli, HTML, CSS, JavaScript, Git, and GitHub.

## Project Structure
- index.html: login page
- color.html: color management page
- LAMPAPI/: PHP endpoints and database configuration example
- css/: styles
- js/: browser logic and supplied MD5 utility
- images/: application images

## Setup
1. Install Apache, MySQL, and PHP with mysqli and mysqlnd support.
2. Clone this repository.
3. Create a MySQL database and a database user with access to it.
4. Create the tables described below and insert your own test user.
5. Copy LAMPAPI/db_config.example.php to LAMPAPI/db_config.php.
6. Edit db_config.php with your database host, username, password, and database name. Git ignores this local file.
7. Configure Apache to serve the application files from the website root with PHP enabled. Keep the .git directory inaccessible to web visitors.

## Database
The following is a minimal compatible schema for a new installation:

```sql
CREATE TABLE Users (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  Login VARCHAR(100) NOT NULL UNIQUE,
  Password VARCHAR(255) NOT NULL
);

CREATE TABLE Colors (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  UserId INT NOT NULL,
  Name VARCHAR(255) NOT NULL,
  FOREIGN KEY (UserId) REFERENCES Users(ID)
);
```

Create a test account in Users using your own test values. The current lab code compares passwords directly, so use a disposable test password.

## Run and Access
Start Apache and MySQL, then open http://localhost/index.html or your server's address. Log in, add a color, and search for it.

The frontend uses /LAMPAPI, so deployment assumes the website root. Update that path in js/code.js if deploying in a subdirectory.

For local development, with MySQL running and PHP configured, run `php -S localhost:8000` from the project directory and open http://localhost:8000/index.html.

GitHub hosts the source code. GitHub Pages cannot run the PHP/MySQL backend.

## Assumptions and Limitations
- This is an educational lab application.
- Accounts must already exist in the database; there is no registration page.
- Passwords are compared directly. Production use requires secure server-side password hashing. The supplied MD5 utility is not used by the active login code.
- Color endpoints accept a client-provided user ID without independently verifying authenticated ownership.
- Adding and searching colors are supported; editing and deleting are not.
- Database contents and deployment-specific settings are excluded.
- PHP syntax checks passed. A fresh installation requires testing with its configured database.

## AI Usage
ChatGPT assisted with organizing the existing lab files for Git, extracting database settings into a separate configuration file, planning commits, and drafting documentation and license instructions.

## License
See LICENSE.md for the MIT license. Third-party code retains its original license and notices.
