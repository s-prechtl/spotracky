import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

host = os.getenv('DB_HOST_UPGRADE') if os.getenv('DB_HOST_UPGRADE') else os.getenv('DB_HOST')
conn = psycopg2.connect(
    host=host,
    database=os.getenv('DB_NAME'),
    user=os.getenv('DB_USER'),
    password=os.getenv('DB_PASSWORD'),
    port=os.getenv('DB_PORT')
)

cursor = conn.cursor()

cursor.execute("UPDATE users SET count=count+1")
conn.commit()
cursor.close()
conn.close()

