
# je prends l'identité de ofood
export PGUSER=ofood
export PGPASSWORD=ofood
export PGDATABASE=ofood

# je lance le script de création des tables
psql -d ofood -f create_tables.sql

#j'importe les données
psql -d ofood -f data.sql
