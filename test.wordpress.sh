docker run --name RouletteDB -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=RouletteDB -p 3306:3306 -d mysql:latest
&&
docker run --name RoulettePress -p 80:80 -d wordpress:latest