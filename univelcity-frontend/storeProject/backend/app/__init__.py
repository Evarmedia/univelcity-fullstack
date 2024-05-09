from flask import Flask
import msql.connector

""" set up the app to connect to db."""

# initialize Flask app
app = Flask(__name__)

# db configuration
db_config = {
        'host': 'localhost',
        'user': 'cozy',
        'password ': '1234',
        'database': 'cozycove_db',
        }

db_connection = mysql.connector.connect(**db_config)
cursor = db_connection.cursor()

from app import routes
