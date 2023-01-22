# SD_API

cd SD_API

iniciar docker
docker compose up --build -d

terminar docker
docker compose down

iniciar ficheiro
docker exec sd_api2-server-1 npm run migrate