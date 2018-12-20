from flask import Flask
from flask import Flask, send_from_directory, jsonify
app = Flask(__name__)
import json
import basic_query_code
#

@app.route('/')
def index():
    return send_from_directory("templates", "quality_of_place.html")


@app.route('/api/get_quality',methods=['POST'])
def get_quality():
    what_food =basic_query_code.get_nypl_best()


    return json.dumps({"ranked_options":what_food})

if __name__ == '__main__':
    app.run()
