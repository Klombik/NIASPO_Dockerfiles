FROM couchbase:community
EXPOSE 8091 8092 8093 11210
# Добавляем проверку доступности Couchbase сервера
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 CMD curl -f http://localhost:8091/ui/index.html || exit 1

# Команда для начальной настройки Couchbase
CMD ["couchbase-server", "--start", "&&", "/opt/couchbase/bin/couchbase-cli cluster-init --cluster-username=admin --cluster-password=password --cluster-ramsize=512"]