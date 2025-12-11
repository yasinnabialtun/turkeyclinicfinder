#!/bin/bash

echo "Waiting for services to be ready..."

# Wait for PostgreSQL
until pg_isready -h localhost -p 5432 -U tcf_user; do
  echo "PostgreSQL is unavailable - sleeping"
  sleep 2
done
echo "PostgreSQL is ready"

# Wait for Redis
until redis-cli -h localhost -p 6379 ping; do
  echo "Redis is unavailable - sleeping"
  sleep 2
done
echo "Redis is ready"

# Wait for Backend
until curl -f http://localhost:8000/health; do
  echo "Backend is unavailable - sleeping"
  sleep 2
done
echo "Backend is ready"

echo "All services are ready!"

