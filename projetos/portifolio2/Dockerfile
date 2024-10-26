FROM python:3.10

RUN apt-get update && apt-get install -y sqlite3 libsqlite3-dev

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


# # Use a imagem oficial do Python
# FROM python:3.9-slim

# # Define o diretório de trabalho dentro do container
# WORKDIR /app

# # Copia o arquivo requirements.txt para o container
# COPY requirements.txt /app/

# # Instala as dependências da aplicação
# RUN pip install --no-cache-dir -r requirements.txt

# # Copia o restante da aplicação para o diretório de trabalho
# COPY . /app/

# # Expõe a porta que o Django vai rodar
# EXPOSE 8000

# # Define o comando para rodar o servidor
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]